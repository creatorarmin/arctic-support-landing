import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container mx-auto px-6">
        <div className="organic-divider mb-16" />
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-semibold text-foreground tracking-tight">Kundra</span>
            </div>
            <p className="text-sm font-light text-muted-foreground max-w-sm">
              Bättre kundupplevelser genom smart automatisering.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <nav className="flex flex-wrap gap-6">
              {[
                { label: "Lösningar", href: "#losningar" },
                { label: "Om oss", href: "#om-oss" },
                { label: "Priser", href: "#priser" },
                { label: "Kontakt", href: "#kontakt" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-sm font-light text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="text-xs font-light text-muted-foreground/60">
              © 2025 Kundra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
