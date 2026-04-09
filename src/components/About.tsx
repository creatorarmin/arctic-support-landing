import { Mic } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDashboard((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              Om oss
            </p>
            <h2 className="mb-6 text-foreground">
              Byggd av människor som förstår service
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
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
            <div className="relative mx-auto w-[300px] sm:w-[340px]">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-foreground/20 to-foreground/30 p-[3px] elevation-4">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-card">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-full bg-foreground/90" />
                  
                  {/* Status bar */}
                  <div className="absolute top-1 left-0 right-0 z-10 flex items-center justify-between px-8 py-1.5">
                    <span className="text-[10px] font-medium text-foreground/70">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-end gap-[2px]">
                        <div className="w-[3px] h-[4px] rounded-sm bg-foreground/60" />
                        <div className="w-[3px] h-[6px] rounded-sm bg-foreground/60" />
                        <div className="w-[3px] h-[8px] rounded-sm bg-foreground/60" />
                        <div className="w-[3px] h-[10px] rounded-sm bg-foreground/60" />
                      </div>
                      <div className="w-5 h-2.5 rounded-[3px] border border-foreground/60 p-[1.5px]">
                        <div className="w-3/4 h-full rounded-[1.5px] bg-foreground/60" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Screen */}
                  <div className="relative aspect-[9/16] overflow-hidden">
                    {!showDashboard ? (
                      <div className="absolute inset-0 p-6 pt-12 flex flex-col">
                        <div className="text-center mb-6 mt-2">
                          <h3 className="font-sans text-foreground font-semibold text-base">
                            Kundra AI-Assistent
                          </h3>
                          <p className="text-muted-foreground text-xs mt-1">Demo</p>
                        </div>
                        
                        <div className="bg-secondary rounded-full py-2 px-4 mb-6 flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs text-muted-foreground">Ansluten</span>
                        </div>
                        
                        {/* Waveform */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="flex items-center gap-1">
                            {[...Array(12)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-accent/50 rounded-full animate-pulse"
                                style={{ 
                                  height: `${8 + Math.sin(i * 0.8) * 12}px`,
                                  animationDelay: `${i * 100}ms` 
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Mic */}
                        <div className="flex justify-center mb-6">
                          <button
                            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors"
                            onClick={() => setShowDashboard(true)}
                          >
                            <Mic className="w-6 h-6 text-primary-foreground" />
                          </button>
                        </div>
                        
                        <div className="bg-secondary rounded-lg p-4 border border-border">
                          <p className="text-sm text-muted-foreground">
                            "Hur kan jag hjälpa dig idag?"
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 p-4 pt-12 flex flex-col">
                        <div className="text-center mb-4 mt-2">
                          <h3 className="font-sans text-foreground font-semibold text-sm">
                            Kundra AI-Assistent
                          </h3>
                          <p className="text-muted-foreground text-xs mt-1">Adminvy</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2.5 flex-1">
                          {[
                            { label: "Konversationer", value: "1,247", change: "+12%" },
                            { label: "Svarstid", value: "0.8s", change: "-23%" },
                            { label: "Lösta ärenden", value: "94%", change: "+5%" },
                            { label: "Bokningar", value: "89", change: "+18%" },
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="bg-secondary rounded-lg p-3 border border-border"
                            >
                              <p className="text-[10px] text-muted-foreground mb-1">{item.label}</p>
                              <p className="text-lg font-semibold text-foreground">{item.value}</p>
                              <p className="text-[10px] text-emerald-600 mt-0.5">{item.change}</p>
                            </div>
                          ))}
                        </div>
                        
                        <button
                          className="mt-3 bg-secondary rounded-full py-2 px-4 flex items-center justify-center gap-2 cursor-pointer hover:bg-muted transition-colors"
                          onClick={() => setShowDashboard(false)}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs text-muted-foreground">AI aktiv</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Side buttons */}
              <div className="absolute left-0 top-24 h-7 w-[3px] rounded-l-sm bg-foreground/20" />
              <div className="absolute left-0 top-36 h-10 w-[3px] rounded-l-sm bg-foreground/20" />
              <div className="absolute right-0 top-36 h-14 w-[3px] rounded-r-sm bg-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
