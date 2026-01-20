const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-lg font-semibold text-foreground">AutoServe</span>
          
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
            © 2025 AutoServe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;