const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Stylized M Logo */}
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">M</span>
          </div>
          <span className="text-foreground font-bold text-xl tracking-tight">
            MOCKELLO
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#growth" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Testimonials
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
