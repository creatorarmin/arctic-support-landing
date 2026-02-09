import { motion, AnimatePresence } from "framer-motion";
import { Mic, BarChart3, Clock, CheckCircle, CalendarCheck } from "lucide-react";
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
    <section id="om-oss" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Subtle gradient background for modern feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Om oss</span>
            </div>
            
            <h2 className="mb-8 text-3xl text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Byggd av människor som förstår service
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Vi startade Kundra för att vi såg hur företag kämpade med samma 
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
          
          {/* Modern phone mockup — wider & bigger */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Ambient glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/8 blur-[100px]"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Phone frame — modern flat design, wider */}
              <div className="relative mx-auto w-[320px] sm:w-[380px]">
                {/* Phone outer shell */}
                <div className="relative rounded-[2.8rem] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
                  {/* Inner bezel */}
                  <div className="relative overflow-hidden rounded-[2.6rem] bg-background">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 h-[26px] w-[100px] rounded-full bg-black flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
                    </div>
                    
                    {/* Screen */}
                    <div className="relative aspect-[9/18.5] overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showDashboard ? (
                          <motion.div
                            key="voice"
                            className="absolute inset-0 p-5 pt-14 flex flex-col"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35 }}
                          >
                            {/* Header */}
                            <div className="text-center mb-5">
                              <h3 className="text-primary font-semibold text-lg tracking-tight">
                                Kundra AI
                              </h3>
                              <p className="text-muted-foreground text-[11px] mt-1 tracking-wide uppercase">Röstassistent</p>
                            </div>
                            
                            {/* Status pill */}
                            <div className="mx-auto bg-secondary/60 backdrop-blur-sm rounded-full py-2 px-5 mb-8 flex items-center gap-2.5 border border-border/40">
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs text-foreground/70 font-medium">Ansluten</span>
                            </div>
                            
                            {/* Waveform */}
                            <div className="flex-1 flex items-center justify-center">
                              <div className="flex items-center gap-[3px]">
                                {[...Array(16)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-[3px] bg-primary/70 rounded-full"
                                    animate={{
                                      height: [6, 20 + Math.random() * 24, 6],
                                    }}
                                    transition={{
                                      duration: 0.7 + Math.random() * 0.5,
                                      repeat: Infinity,
                                      delay: i * 0.08,
                                      ease: "easeInOut",
                                    }}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            {/* Mic button */}
                            <div className="flex justify-center mb-8">
                              <motion.button 
                                className="relative cursor-pointer"
                                onClick={() => setShowDashboard(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <motion.div
                                  className="absolute inset-0 rounded-full bg-primary/25"
                                  animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                                  transition={{ duration: 1.8, repeat: Infinity }}
                                />
                                <motion.div 
                                  className="relative w-[72px] h-[72px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                                  animate={{ 
                                    boxShadow: [
                                      "0 0 24px hsl(var(--primary) / 0.3)",
                                      "0 0 48px hsl(var(--primary) / 0.5)",
                                      "0 0 24px hsl(var(--primary) / 0.3)"
                                    ]
                                  }}
                                  transition={{ duration: 2.5, repeat: Infinity }}
                                >
                                  <Mic className="w-7 h-7 text-primary-foreground" />
                                </motion.div>
                              </motion.button>
                            </div>
                            
                            {/* Response area */}
                            <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-4 border border-border/30">
                              <motion.p 
                                className="text-sm text-muted-foreground text-center"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                              >
                                "Hur kan jag hjälpa dig idag?"
                              </motion.p>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="dashboard"
                            className="absolute inset-0 p-5 pt-14 flex flex-col"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.35 }}
                          >
                            {/* Header */}
                            <div className="text-center mb-5">
                              <h3 className="text-primary font-semibold text-lg tracking-tight">
                                Kundra AI
                              </h3>
                              <p className="text-muted-foreground text-[11px] mt-1 tracking-wide uppercase">Dashboard</p>
                            </div>
                            
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-3 flex-1 content-start">
                              {[
                                { icon: BarChart3, label: "Konversationer", value: "1,247", change: "+12%", delay: 0.1 },
                                { icon: Clock, label: "Svarstid", value: "0.8s", change: "-23%", delay: 0.15 },
                                { icon: CheckCircle, label: "Lösta ärenden", value: "94%", change: "+5%", delay: 0.2 },
                                { icon: CalendarCheck, label: "Bokningar", value: "89", change: "+18%", delay: 0.25 },
                              ].map((stat, i) => (
                                <motion.div 
                                  key={i}
                                  className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-3.5 border border-border/30"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: stat.delay }}
                                >
                                  <stat.icon className="w-4 h-4 text-primary mb-2" />
                                  <p className="text-[10px] text-muted-foreground mb-1">{stat.label}</p>
                                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                                  <p className="text-[10px] text-emerald-500 mt-1 font-medium">{stat.change}</p>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* Back button */}
                            <motion.button
                              className="mt-4 bg-secondary/40 backdrop-blur-sm rounded-full py-2.5 px-5 flex items-center justify-center gap-2 cursor-pointer hover:bg-secondary/60 transition-colors border border-border/30"
                              onClick={() => setShowDashboard(false)}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.35 }}
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs text-foreground/70 font-medium">AI aktiv</span>
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                {/* Minimal side buttons */}
                <div className="absolute left-0 top-28 h-8 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-40 h-14 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute left-0 top-58 h-14 w-[3px] rounded-l-sm bg-zinc-700" />
                <div className="absolute right-0 top-40 h-16 w-[3px] rounded-r-sm bg-zinc-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
