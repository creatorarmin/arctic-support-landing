import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDashboard(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Om oss
            </p>
            <h2 className="mb-6 text-foreground">
              Byggd av människor som förstår service
            </h2>
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed">
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
          </motion.div>
          
          {/* Smartphone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative mx-auto w-[300px] sm:w-[340px]">
                {/* Phone outer frame */}
                <div className="relative rounded-[2.5rem] bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 p-[3px] elevation-4">
                  {/* Phone inner */}
                  <div className="relative overflow-hidden rounded-[2.4rem] bg-background">
                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-full bg-foreground/90" />
                    
                    {/* Status bar */}
                    <div className="absolute top-1 left-0 right-0 z-10 flex items-center justify-between px-8 py-1.5">
                      <span className="text-[10px] font-medium text-foreground/80">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-end gap-[2px]">
                          <div className="w-[3px] h-[4px] rounded-sm bg-foreground/70" />
                          <div className="w-[3px] h-[6px] rounded-sm bg-foreground/70" />
                          <div className="w-[3px] h-[8px] rounded-sm bg-foreground/70" />
                          <div className="w-[3px] h-[10px] rounded-sm bg-foreground/70" />
                        </div>
                        <div className="flex items-center gap-[2px]">
                          <div className="w-5 h-2.5 rounded-[3px] border border-foreground/70 p-[1.5px]">
                            <div className="w-3/4 h-full rounded-[1.5px] bg-foreground/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen content */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showDashboard ? (
                          <motion.div
                            key="voice"
                            className="absolute inset-0 p-6 pt-12 flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-center mb-6 mt-2">
                              <h3 className="font-sans text-foreground font-semibold text-base">
                                Kundra AI-Assistent
                              </h3>
                              <p className="text-muted-foreground text-xs mt-1 font-light">Demo</p>
                            </div>
                            
                            <div className="bg-secondary/50 rounded-full py-2 px-4 mb-6 flex items-center justify-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-xs text-muted-foreground font-light">Ansluten</span>
                            </div>
                            
                            {/* Audio waveform */}
                            <div className="flex-1 flex items-center justify-center">
                              <div className="flex items-center gap-1">
                                {[...Array(12)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-1 bg-muted-foreground/40 rounded-full"
                                    animate={{
                                      height: [6, 20 + Math.random() * 16, 6],
                                    }}
                                    transition={{
                                      duration: 0.8 + Math.random() * 0.4,
                                      repeat: Infinity,
                                      delay: i * 0.1,
                                      ease: "easeInOut",
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            {/* Mic button */}
                            <div className="flex justify-center mb-6">
                              <motion.button 
                                className="relative cursor-pointer"
                                onClick={() => setShowDashboard(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div className="relative w-14 h-14 rounded-full bg-foreground flex items-center justify-center">
                                  <Mic className="w-6 h-6 text-background" />
                                </div>
                              </motion.button>
                            </div>
                            
                            <div className="bg-secondary/30 rounded-xl p-4 border border-border/30">
                              <motion.p 
                                className="text-sm text-muted-foreground font-light"
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                              >
                                "Hur kan jag hjälpa dig idag?"
                              </motion.p>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="dashboard"
                            className="absolute inset-0 p-4 pt-12 flex flex-col"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-center mb-4 mt-2">
                              <h3 className="font-sans text-foreground font-semibold text-sm">
                                Kundra AI-Assistent
                              </h3>
                              <p className="text-muted-foreground text-xs mt-1 font-light">Adminvy</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2.5 flex-1">
                              {[
                                { label: "Konversationer", value: "1,247", change: "+12%" },
                                { label: "Svarstid", value: "0.8s", change: "-23%" },
                                { label: "Lösta ärenden", value: "94%", change: "+5%" },
                                { label: "Bokningar", value: "89", change: "+18%" },
                              ].map((item, i) => (
                                <motion.div 
                                  key={item.label}
                                  className="bg-secondary/30 rounded-xl p-3 border border-border/20"
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.08 }}
                                >
                                  <p className="text-[10px] text-muted-foreground font-light mb-1">{item.label}</p>
                                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                                  <p className="text-[10px] text-emerald-500/80 mt-0.5">{item.change}</p>
                                </motion.div>
                              ))}
                            </div>
                            
                            <motion.button
                              className="mt-3 bg-secondary/30 rounded-full py-2 px-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-secondary/50 transition-colors duration-200"
                              onClick={() => setShowDashboard(false)}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-xs text-muted-foreground font-light">AI aktiv</span>
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                {/* Side buttons */}
                <div className="absolute left-0 top-24 h-7 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-36 h-10 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-50 h-10 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute right-0 top-36 h-14 w-[3px] rounded-r-sm bg-zinc-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
