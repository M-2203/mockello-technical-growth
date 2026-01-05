import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

// Data structured for future backend integration
export const testimonials = [
  {
    id: 1,
    quote: "MOCKELLO helped me crack my core company interview! The mechanical engineering questions were spot-on.",
    author: "Priya Sharma",
    stream: "Mechanical Engineering",
    company: "L&T",
  },
  {
    id: 2,
    quote: "The circuit theory questions were exactly what appeared in my TCS test. Couldn't have asked for better prep!",
    author: "Rahul Menon",
    stream: "Electrical & Electronics",
    company: "TCS",
  },
  {
    id: 3,
    quote: "Finally a platform that understands Civil Engineering! The structural analysis section is exceptional.",
    author: "Anjali Reddy",
    stream: "Civil Engineering",
    company: "Tata Projects",
  },
  {
    id: 4,
    quote: "The DSA and system design questions prepared me perfectly for my Google interview. Highly recommended!",
    author: "Vikram Singh",
    stream: "Computer Science",
    company: "Google",
  },
  {
    id: 5,
    quote: "As a Chemical Engineering student, finding quality questions was hard. MOCKELLO changed that completely.",
    author: "Deepa Nair",
    stream: "Chemical Engineering",
    company: "Reliance",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in-up">
          Student Success Stories
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-fade-in-up delay-100">
          Hear from engineers who've landed their dream jobs
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                    ? "opacity-0 -translate-x-full" 
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
                  <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
                  <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="text-sm text-muted-foreground">
                        {testimonial.stream}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-primary font-medium">
                        Placed at {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
