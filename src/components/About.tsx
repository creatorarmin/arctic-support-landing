import { motion, AnimatePresence } from "framer-motion";
import { Mic } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  // Auto-cycle between views
  useEffect(() => {
    const interval = setInterval(() => {
      setShowDashboard(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          
          {/* Smartphone mockup with live demo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Abstract network background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <svg 
                className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] opacity-20"
                viewBox="0 0 400 400"
              >
                {/* Network nodes */}
                {[
                  { cx: 50, cy: 100, delay: 0 },
                  { cx: 120, cy: 50, delay: 0.2 },
                  { cx: 200, cy: 80, delay: 0.4 },
                  { cx: 280, cy: 40, delay: 0.6 },
                  { cx: 350, cy: 90, delay: 0.8 },
                  { cx: 30, cy: 200, delay: 0.3 },
                  { cx: 370, cy: 180, delay: 0.5 },
                  { cx: 60, cy: 300, delay: 0.7 },
                  { cx: 140, cy: 350, delay: 0.9 },
                  { cx: 250, cy: 330, delay: 0.1 },
                  { cx: 320, cy: 280, delay: 0.4 },
                  { cx: 380, cy: 320, delay: 0.6 },
                ].map((node, i) => (
                  <motion.circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0.3, 0.7, 0.3], scale: 1 }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: node.delay,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                  />
                ))}
                
                {/* Network connections */}
                {[
                  { x1: 50, y1: 100, x2: 120, y2: 50, delay: 0 },
                  { x1: 120, y1: 50, x2: 200, y2: 80, delay: 0.1 },
                  { x1: 200, y1: 80, x2: 280, y2: 40, delay: 0.2 },
                  { x1: 280, y1: 40, x2: 350, y2: 90, delay: 0.3 },
                  { x1: 30, y1: 200, x2: 50, y2: 100, delay: 0.4 },
                  { x1: 350, y1: 90, x2: 370, y2: 180, delay: 0.5 },
                  { x1: 30, y1: 200, x2: 60, y2: 300, delay: 0.6 },
                  { x1: 60, y1: 300, x2: 140, y2: 350, delay: 0.7 },
                  { x1: 140, y1: 350, x2: 250, y2: 330, delay: 0.8 },
                  { x1: 250, y1: 330, x2: 320, y2: 280, delay: 0.9 },
                  { x1: 320, y1: 280, x2: 380, y2: 320, delay: 0.1 },
                  { x1: 370, y1: 180, x2: 320, y2: 280, delay: 0.3 },
                  { x1: 200, y1: 80, x2: 200, y2: 200, delay: 0.5 },
                  { x1: 50, y1: 100, x2: 200, y2: 200, delay: 0.7 },
                  { x1: 350, y1: 90, x2: 200, y2: 200, delay: 0.9 },
                  { x1: 60, y1: 300, x2: 200, y2: 200, delay: 0.2 },
                  { x1: 320, y1: 280, x2: 200, y2: 200, delay: 0.4 },
                ].map((line, i) => (
                  <motion.line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="hsl(var(--primary))"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: line.delay,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                  />
                ))}
                
                {/* Central glow node */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="8"
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  viewport={{ once: true }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="20"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  viewport={{ once: true }}
                />
              </svg>
            </div>
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-[320px] sm:w-[380px]">
              {/* Phone outer frame */}
                <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 p-2 shadow-2xl">
                  {/* Phone inner bezel */}
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0d1117]">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-7 w-32 rounded-full bg-black flex items-center justify-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
                    </div>
                    
                    {/* Status bar */}
                    <div className="absolute top-1 left-0 right-0 z-10 flex items-center justify-between px-8 py-1.5">
                      <span className="text-[10px] font-semibold text-white/90">9:41</span>
                      <div className="flex items-center gap-1.5">
                        {/* Signal bars */}
                        <div className="flex items-end gap-[2px]">
                          <div className="w-[3px] h-[4px] rounded-sm bg-white/90" />
                          <div className="w-[3px] h-[6px] rounded-sm bg-white/90" />
                          <div className="w-[3px] h-[8px] rounded-sm bg-white/90" />
                          <div className="w-[3px] h-[10px] rounded-sm bg-white/90" />
                        </div>
                        {/* WiFi */}
                        <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1.29 7.05a1 1 0 0 1 .32-1.38A16.06 16.06 0 0 1 12 2a16.06 16.06 0 0 1 10.39 3.67 1 1 0 0 1-1.06 1.7A14.06 14.06 0 0 0 12 4 14.06 14.06 0 0 0 2.67 7.37a1 1 0 0 1-1.38-.32zM12 8a12.06 12.06 0 0 0-7.74 2.79 1 1 0 1 0 1.28 1.54A10.06 10.06 0 0 1 12 10a10.06 10.06 0 0 1 6.46 2.33 1 1 0 1 0 1.28-1.54A12.06 12.06 0 0 0 12 8zm0 6a8.06 8.06 0 0 0-5.13 1.82 1 1 0 1 0 1.26 1.56A6.06 6.06 0 0 1 12 16a6.06 6.06 0 0 1 3.87 1.38 1 1 0 1 0 1.26-1.56A8.06 8.06 0 0 0 12 14zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                        </svg>
                        {/* Battery */}
                        <div className="flex items-center gap-[2px]">
                          <div className="w-5 h-2.5 rounded-[3px] border border-white/90 p-[1.5px]">
                            <div className="w-3/4 h-full rounded-[1.5px] bg-white/90" />
                          </div>
                          <div className="w-[2px] h-1.5 rounded-r-sm bg-white/90" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Screen content with AnimatePresence for transitions */}
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <AnimatePresence mode="wait">
                        {!showDashboard ? (
                          <motion.div
                            key="voice"
                            className="absolute inset-0 p-6 pt-10 flex flex-col"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* App header */}
                            <div className="text-center mb-6">
                              <h3 className="text-primary font-semibold text-lg">
                                Kundra AI-Assistent
                              </h3>
                              <p className="text-muted-foreground text-xs mt-1">Demo</p>
                            </div>
                            
                            {/* Status bar */}
                            <div className="bg-muted/30 rounded-full py-2 px-4 mb-6 flex items-center justify-center gap-2">
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs text-muted-foreground">Ansluten</span>
                            </div>
                            
                            {/* Audio waveform visualization */}
                            <div className="flex-1 flex items-center justify-center">
                              <div className="flex items-center gap-1">
                                {[...Array(12)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    className="w-1.5 bg-primary/80 rounded-full"
                                    animate={{
                                      height: [8, 24 + Math.random() * 20, 8],
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
                            
                            {/* Mic button - clickable to show dashboard */}
                            <div className="flex justify-center mb-6">
                              <motion.button 
                                className="relative cursor-pointer"
                                onClick={() => setShowDashboard(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {/* Pulse rings */}
                                <motion.div
                                  className="absolute inset-0 rounded-full bg-primary/30"
                                  animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <motion.div
                                  className="absolute inset-0 rounded-full bg-primary/20"
                                  animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                />
                                
                                <motion.div 
                                  className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                                  animate={{ 
                                    boxShadow: [
                                      "0 0 20px hsl(var(--primary) / 0.4)",
                                      "0 0 40px hsl(var(--primary) / 0.6)",
                                      "0 0 20px hsl(var(--primary) / 0.4)"
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <Mic className="w-7 h-7 text-primary-foreground" />
                                </motion.div>
                              </motion.button>
                            </div>
                            
                            {/* Chat response area */}
                            <div className="bg-muted/20 rounded-xl p-4 border border-border/30">
                              <motion.p 
                                className="text-sm text-muted-foreground"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                "Hur kan jag hjälpa dig idag?"
                              </motion.p>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="dashboard"
                            className="absolute inset-0 p-4 pt-10 flex flex-col"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* App header */}
                            <div className="text-center mb-4">
                              <h3 className="text-primary font-semibold text-base">
                                Kundra AI-Assistent
                              </h3>
                              <p className="text-muted-foreground text-xs mt-1">Adminvy</p>
                            </div>
                            
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-3 flex-1">
                              {/* Conversations */}
                              <motion.div 
                                className="bg-muted/30 rounded-xl p-3 border border-border/30"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <p className="text-xs text-muted-foreground mb-1">Konversationer</p>
                                <p className="text-xl font-bold text-foreground">1,247</p>
                                <p className="text-xs text-emerald-500 mt-1">+12% ↑</p>
                              </motion.div>
                              
                              {/* Response time */}
                              <motion.div 
                                className="bg-muted/30 rounded-xl p-3 border border-border/30"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <p className="text-xs text-muted-foreground mb-1">Svarstid</p>
                                <p className="text-xl font-bold text-foreground">0.8s</p>
                                <p className="text-xs text-emerald-500 mt-1">-23% ↓</p>
                              </motion.div>
                              
                              {/* Resolved cases */}
                              <motion.div 
                                className="bg-muted/30 rounded-xl p-3 border border-border/30"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <p className="text-xs text-muted-foreground mb-1">Lösta ärenden</p>
                                <p className="text-xl font-bold text-foreground">94%</p>
                                <p className="text-xs text-emerald-500 mt-1">+5% ↑</p>
                              </motion.div>
                              
                              {/* Bookings */}
                              <motion.div 
                                className="bg-muted/30 rounded-xl p-3 border border-border/30"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                              >
                                <p className="text-xs text-muted-foreground mb-1">Bokningar</p>
                                <p className="text-xl font-bold text-foreground">89</p>
                                <p className="text-xs text-emerald-500 mt-1">+18% ↑</p>
                              </motion.div>
                            </div>
                            
                            {/* Back button */}
                            <motion.button
                              className="mt-3 bg-muted/20 rounded-full py-2 px-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-muted/30 transition-colors"
                              onClick={() => setShowDashboard(false)}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-emerald-500"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs text-muted-foreground">AI aktiv</span>
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                
                {/* Side buttons */}
                <div className="absolute left-0 top-24 h-8 w-1 rounded-l-sm bg-zinc-600" />
                <div className="absolute left-0 top-36 h-12 w-1 rounded-l-sm bg-zinc-600" />
                <div className="absolute left-0 top-52 h-12 w-1 rounded-l-sm bg-zinc-600" />
                <div className="absolute right-0 top-36 h-16 w-1 rounded-r-sm bg-zinc-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
