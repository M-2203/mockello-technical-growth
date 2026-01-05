import { BookOpen, Target, Brain, BarChart3, Clock, Award } from "lucide-react";

// Data structured for future backend integration
export const growthFeatures = [
  {
    id: 1,
    icon: "BookOpen",
    title: "Concept Clarity",
    benefit: "Each question comes with detailed explanations to reinforce learning",
  },
  {
    id: 2,
    icon: "Target",
    title: "Targeted Practice",
    benefit: "Focus on specific topics - strengthen weaknesses, polish strengths",
  },
  {
    id: 3,
    icon: "Brain",
    title: "Knowledge Retention",
    benefit: "Spaced repetition ensures concepts stick for the long term",
  },
  {
    id: 4,
    icon: "BarChart3",
    title: "Progress Tracking",
    benefit: "Visual dashboards show your growth over time",
  },
  {
    id: 5,
    icon: "Clock",
    title: "Time Management",
    benefit: "Practice under timed conditions to build exam confidence",
  },
  {
    id: 6,
    icon: "Award",
    title: "Achievement System",
    benefit: "Earn badges and milestones to stay motivated",
  },
];

const iconMap = {
  BookOpen,
  Target,
  Brain,
  BarChart3,
  Clock,
  Award,
};

const GrowthFeatures = () => {
  return (
    <section id="growth" className="py-20 bg-card/50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4 animate-fade-in-up">
          How You'll Grow
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-fade-in-up delay-100">
          Our learning system is designed to make you truly understand, not just memorize
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {growthFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={feature.id}
                className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthFeatures;
