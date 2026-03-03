import Logo from "@/components/Logo";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Logo className="h-7 w-7" />
            <span className="text-lg font-semibold text-foreground">Kundra</span>
          </motion.div>
          
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {[
              { href: "#losningar", label: "Lösningar" },
              { href: "#om-oss", label: "Om oss" },
              { href: "#kontakt", label: "Kontakt" },
              { href: "#", label: "Integritetspolicy" },
            ].map(link => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-sm text-muted-foreground transition-colors hover:text-foreground relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/30 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          
          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <p className="text-sm text-muted-foreground/60">
            © 2025 Kundra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
