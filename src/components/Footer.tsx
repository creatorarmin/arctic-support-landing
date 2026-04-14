import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="gradient-divider mb-12" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-2.5">
            <Logo className="h-5 w-5" />
            <span className="font-mono text-sm font-bold text-foreground uppercase tracking-tight">
              Kundra
            </span>
          </div>
          
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Lösningar", href: "#losningar" },
              { label: "Om oss", href: "#om-oss" },
              { label: "Priser", href: "#priser" },
              { label: "Kontakt", href: "#kontakt" },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <p className="text-sm text-muted-foreground md:text-right">
            © 2025 Kundra. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
