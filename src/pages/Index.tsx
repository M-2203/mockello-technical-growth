import Header from "@/components/mockello/Header";
import InteractiveBackground from "@/components/mockello/InteractiveBackground";
import HeroSection from "@/components/mockello/HeroSection";
import FeatureBento from "@/components/mockello/FeatureBento";
import GrowthFeatures from "@/components/mockello/GrowthFeatures";
import StatsSection from "@/components/mockello/StatsSection";
import TestimonialCarousel from "@/components/mockello/TestimonialCarousel";
import StreamTicker from "@/components/mockello/StreamTicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed background with floating elements */}
      <InteractiveBackground />
      
      {/* Fixed header */}
      <Header />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stream Ticker */}
        <StreamTicker />
        
        {/* Feature Bento Grid */}
        <FeatureBento />
        
        {/* Growth Features */}
        <GrowthFeatures />
        
        {/* Stats Counter */}
        <StatsSection />
        
        {/* Testimonials */}
        <TestimonialCarousel />
        
        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-foreground font-bold">MOCKELLO</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Mockello. Empowering Future Engineers.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
