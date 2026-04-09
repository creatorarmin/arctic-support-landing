import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6">
        <div className="gradient-divider mb-12" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="text-lg font-semibold text-foreground tracking-tight">Kundra</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {["Lösningar", "Om oss", "Kontakt", "Integritetspolicy"].map((item) => (
              <a 
                key={item}
                href={`#${item === "Lösningar" ? "losningar" : item === "Om oss" ? "om-oss" : item === "Kontakt" ? "kontakt" : ""}`} 
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <p className="text-xs text-muted-foreground">
            © 2025 Kundra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
