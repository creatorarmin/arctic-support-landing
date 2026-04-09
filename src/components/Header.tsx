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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Kundra
          </span>
        </div>
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#losningar" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Lösningar
          </a>
          <a href="#om-oss" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Om oss
          </a>
          <a href="#priser" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Priser
          </a>
          <a href="#kontakt" className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
            Kontakt
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
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
