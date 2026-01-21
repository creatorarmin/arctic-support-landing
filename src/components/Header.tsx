import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Kundra
          </span>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#losningar" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Lösningar
          </a>
          <a href="#om-oss" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Om oss
          </a>
          <a href="#priser" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Priser
          </a>
          <a href="#kontakt" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Kontakt
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Logga in
          </Button>
          <Button size="sm">
            Kontakta oss
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;