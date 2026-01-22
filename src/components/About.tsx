import { motion } from "framer-motion";
import kundraAppImage from "@/assets/kundra-ai-assistant.png";

const About = () => {
  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Om oss
            </p>
            <h2 className="mb-6 text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Byggd av människor som förstår service
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vi startade AutoServe för att vi såg hur företag kämpade med samma 
                utmaning: ökande kundförväntningar och begränsade resurser.
              </p>
              <p>
                Vårt team kombinerar decenniers erfarenhet inom kundservice med 
                praktiska tekniklösningar. Vi handlar inte om att ersätta människor – 
                vi handlar om att hjälpa dem göra sitt bästa arbete.
              </p>
              <p>
                Idag arbetar vi med företag i alla storlekar för att skapa 
                supportupplevelser som kunderna verkligen uppskattar.
              </p>
            </div>
          </div>
          
          {/* Smartphone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow effect behind the phone */}
            <motion.div 
              className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.25, 0.15]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-[280px] sm:w-[320px]">
                {/* Phone outer frame */}
                <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-700 to-zinc-900 p-2 shadow-2xl">
                  {/* Phone inner bezel */}
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-black">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-b-2xl bg-black" />
                    
                    {/* Screen content */}
                    <div className="relative aspect-[9/19] overflow-hidden">
                      {/* App screenshot */}
                      <img 
                        src={kundraAppImage} 
                        alt="Kundra AI-Assistent Demo" 
                        className="w-full h-full object-cover object-top"
                      />
                      
                      {/* Shimmer effect overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                      />
                      
                      {/* Animated pulse on the mic button area */}
                      <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-20 h-20 rounded-full"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 hsl(var(--primary) / 0.4)",
                            "0 0 0 20px hsl(var(--primary) / 0)",
                            "0 0 0 0 hsl(var(--primary) / 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Side buttons */}
                <div className="absolute left-0 top-24 h-8 w-1 rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-36 h-12 w-1 rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-52 h-12 w-1 rounded-l-sm bg-zinc-700" />
                <div className="absolute right-0 top-36 h-16 w-1 rounded-r-sm bg-zinc-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
