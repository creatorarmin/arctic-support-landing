import { motion } from "framer-motion";
import { Mic } from "lucide-react";

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
              <div className="relative mx-auto w-[280px] sm:w-[320px]">
                {/* Phone outer frame */}
                <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-500 p-2 shadow-2xl">
                  {/* Phone inner bezel */}
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0d1117]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-b-2xl bg-black" />
                    
                    {/* Screen content - Live Demo UI */}
                    <div className="relative aspect-[9/19] p-6 pt-10 flex flex-col">
                      {/* App header */}
                      <div className="text-center mb-6">
                        <motion.h3 
                          className="text-primary font-semibold text-lg italic"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          Kundra AI-Assistent
                        </motion.h3>
                        <p className="text-muted-foreground text-xs mt-1">Demo</p>
                      </div>
                      
                      {/* Status bar */}
                      <motion.div 
                        className="bg-muted/30 rounded-full py-2 px-4 mb-6 flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-emerald-500"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-xs text-muted-foreground">Ansluten</span>
                      </motion.div>
                      
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
                      
                      {/* Mic button */}
                      <div className="flex justify-center mb-6">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.05 }}
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
                        </motion.div>
                      </div>
                      
                      {/* Chat response area */}
                      <motion.div 
                        className="bg-muted/20 rounded-xl p-4 border border-border/30"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.p 
                          className="text-sm text-muted-foreground"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          "Hur kan jag hjälpa dig idag?"
                        </motion.p>
                      </motion.div>
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
