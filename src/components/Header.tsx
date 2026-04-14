import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border glass">
      <div className="container mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="font-mono text-sm font-bold tracking-tight text-foreground uppercase">
            Kundra
          </span>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#losningar", label: "Lösningar" },
            { href: "#om-oss", label: "Om oss" },
            { href: "#priser", label: "Priser" },
            { href: "#kontakt", label: "Kontakt" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-xs h-8 px-4">
            Logga in
          </Button>
          <Button size="sm" className="text-xs h-8 px-4">
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
