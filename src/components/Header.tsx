import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
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
