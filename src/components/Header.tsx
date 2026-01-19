import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <span className="text-xl font-semibold tracking-tight text-foreground">
          AutoServe
        </span>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#solutions" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Solutions
          </a>
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
