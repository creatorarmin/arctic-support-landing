import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="text-lg font-semibold text-foreground">Kundra</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#losningar" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Lösningar
            </a>
            <a href="#om-oss" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Om oss
            </a>
            <a href="#kontakt" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Kontakt
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Integritetspolicy
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Kundra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;