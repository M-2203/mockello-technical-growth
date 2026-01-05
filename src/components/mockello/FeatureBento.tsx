import { Layers, Building, Wrench, TrendingUp } from "lucide-react";

// Data structured for future backend integration
export const features = [
  {
    id: 1,
    icon: "Layers",
    title: "Subject Matter Expertise",
    description: "Deep dive into Thermodynamics, Circuit Theory, Structures, or Data Structures",
  },
  {
    id: 2,
    icon: "Building",
    title: "Placement Ready",
    description: "Questions curated for L&T, Bosch, Tata, and Google",
  },
  {
    id: 3,
    icon: "Wrench",
    title: "Practical Scenarios",
    description: "Solve real-world engineering problems, not just textbook theory",
  },
  {
    id: 4,
    icon: "TrendingUp",
    title: "Adaptive Analysis",
    description: "Identify your weak zones before the interviewers do",
  },
];

const iconMap = {
  Layers,
  Building,
  Wrench,
  TrendingUp,
};

const FeatureBento = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in-up">
          Core Benefits
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-fade-in-up delay-100">
          Everything you need to ace your technical interviews
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className={`glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 cursor-pointer group animate-fade-in-up`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBento;
