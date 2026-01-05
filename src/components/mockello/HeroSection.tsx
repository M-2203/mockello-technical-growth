import { Cog, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Animated Vault/Gear */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-spin-slow" />
          
          {/* Middle ring with gears */}
          <div className="absolute inset-4 border-2 border-primary/50 rounded-full animate-spin-reverse" />
          
          {/* Center vault icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Cog className="w-20 h-20 text-primary animate-vault-unlock" />
              <Unlock className="w-8 h-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          {/* Decorative outer gears */}
          <div className="absolute -top-2 -right-2">
            <Cog className="w-8 h-8 text-accent animate-spin-slow" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Cog className="w-6 h-6 text-accent animate-spin-reverse" />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
          TECHNICAL DOMAIN
          <span className="block text-primary mt-2">UNLOCKED</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          From Blueprint to Reality. Master the Core of Engineering.
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-in-up delay-400">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl animate-pulse-glow"
          >
            Select Your Stream
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
