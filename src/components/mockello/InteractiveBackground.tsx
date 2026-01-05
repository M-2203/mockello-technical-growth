import { Cog, Cpu, Compass, Ruler } from "lucide-react";

const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden blueprint-grid">
      {/* Floating Engineering Symbols */}
      
      {/* Gear - Mechanical */}
      <div className="absolute top-20 left-[10%] animate-float opacity-20">
        <Cog className="w-16 h-16 text-primary animate-spin-slow" />
      </div>
      
      <div className="absolute top-[40%] right-[8%] animate-float-delayed opacity-15">
        <Cog className="w-24 h-24 text-primary animate-spin-reverse" />
      </div>
      
      {/* CPU - Computer Science */}
      <div className="absolute top-[30%] left-[5%] animate-float-delayed opacity-20">
        <Cpu className="w-12 h-12 text-primary animate-blink" />
      </div>
      
      <div className="absolute bottom-[30%] right-[12%] animate-float opacity-15">
        <Cpu className="w-20 h-20 text-primary" />
      </div>
      
      {/* Compass - Civil */}
      <div className="absolute top-[60%] left-[15%] animate-float opacity-15">
        <Compass className="w-14 h-14 text-primary" />
      </div>
      
      {/* Ruler - Design/Architecture */}
      <div className="absolute bottom-[20%] left-[8%] animate-float-delayed opacity-20">
        <Ruler className="w-16 h-16 text-primary rotate-45" />
      </div>
      
      <div className="absolute top-[15%] right-[15%] animate-float opacity-15">
        <Ruler className="w-10 h-10 text-primary -rotate-12" />
      </div>
      
      {/* Additional decorative gears */}
      <div className="absolute bottom-[40%] right-[5%] animate-float opacity-10">
        <Cog className="w-32 h-32 text-accent animate-spin-slow" />
      </div>
      
      <div className="absolute top-[70%] right-[25%] animate-float-delayed opacity-10">
        <Cog className="w-8 h-8 text-primary animate-spin-reverse" />
      </div>
    </div>
  );
};

export default InteractiveBackground;
