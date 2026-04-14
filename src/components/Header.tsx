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
      <div className="container mx-auto flex h-12 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-5 w-5" />
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            kundra
          </span>
        </div>
        
        <nav className="hidden items-center gap-6 md:flex">
          {[
            { href: "#losningar", label: "lösningar" },
            { href: "#om-oss", label: "om_oss" },
            { href: "#priser", label: "priser" },
            { href: "#kontakt", label: "kontakt" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>
          <Button variant="ghost" size="sm" className="font-mono text-xs h-7 px-3">
            logga_in
          </Button>
          <Button size="sm" className="font-mono text-xs h-7 px-3">
            kontakt
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
