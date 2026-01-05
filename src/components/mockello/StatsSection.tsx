import { useEffect, useState, useRef } from "react";

// Data structured for future backend integration
export const stats = [
  { id: 1, value: 10000, suffix: "+", label: "Technical Questions" },
  { id: 2, value: 15, suffix: "+", label: "Engineering Streams" },
  { id: 3, value: 500, suffix: "+", label: "Company Question Sets" },
  { id: 4, value: 95, suffix: "%", label: "Student Satisfaction" },
];

const CounterNumber = ({ 
  target, 
  suffix, 
  isVisible 
}: { 
  target: number; 
  suffix: string; 
  isVisible: boolean;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target, isVisible]);
  
  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in-up">
          The MOCKELLO Advantage
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-fade-in-up delay-100">
          Join thousands of engineering students who've transformed their preparation
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <CounterNumber 
                  target={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible}
                />
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
