import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="gradient-divider mb-8" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="h-4 w-4" />
            <span className="font-mono text-xs text-muted-foreground">kundra</span>
          </div>
          
          <nav className="flex items-center gap-6">
            {[
              { label: "lösningar", href: "#losningar" },
              { label: "om_oss", href: "#om-oss" },
              { label: "kontakt", href: "#kontakt" },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-mono text-[10px] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <p className="font-mono text-[10px] text-muted-foreground">
            © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
