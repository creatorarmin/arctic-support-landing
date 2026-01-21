import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Kundtjänstlösningar
            </p>
            
            <h1 className="mb-6 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Bättre support för växande företag
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Vi hjälper företag att leverera enastående kundupplevelser genom 
              smart automatisering och dedikerade supportteam. Mindre väntan, fler lösningar.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Boka ett samtal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Se hur det fungerar
              </Button>
            </div>
          </motion.div>

          {/* Right side - Animated visual */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glow effect behind the card */}
              <motion.div 
                className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="aspect-square max-w-md mx-auto rounded-2xl bg-card border border-border p-8 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Subtle shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                <div className="h-full flex flex-col justify-between relative z-10">
                  {/* Incoming message */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="h-10 w-10 rounded-full bg-primary/20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="space-y-1.5">
                        <div className="h-3 w-24 rounded bg-muted" />
                        <div className="h-2 w-16 rounded bg-muted/60" />
                      </div>
                    </div>
                    <motion.div 
                      className="rounded-lg bg-muted/50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <div className="h-2 w-3/4 rounded bg-muted" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Outgoing message (AI response) */}
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <div className="flex items-center gap-3 justify-end">
                      <div className="space-y-1.5 text-right">
                        <div className="h-3 w-20 rounded bg-primary/30 ml-auto" />
                        <div className="h-2 w-14 rounded bg-primary/20 ml-auto" />
                      </div>
                      <motion.div 
                        className="h-10 w-10 rounded-full bg-primary/30"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 hsl(var(--primary) / 0.4)",
                            "0 0 0 8px hsl(var(--primary) / 0)",
                            "0 0 0 0 hsl(var(--primary) / 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </div>
                    <motion.div 
                      className="rounded-lg bg-primary/10 p-4 ml-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1 }}
                    >
                      <div className="h-2 w-3/4 rounded bg-primary/20" />
                      <div className="mt-2 h-2 w-full rounded bg-primary/20" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Typing indicator */}
                  <motion.div 
                    className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                  >
                    <div className="h-2 flex-1 rounded bg-muted/40" />
                    <motion.div 
                      className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="flex gap-0.5"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <motion.span 
                          className="h-1.5 w-1.5 rounded-full bg-primary/60"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.span 
                          className="h-1.5 w-1.5 rounded-full bg-primary/60"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;