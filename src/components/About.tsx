import { useState, useEffect } from "react";
import { Mic } from "lucide-react";

const statusMessages = [
  { text: "Lyssnar på kund...", color: "text-foreground" },
  { text: "Analyserar fråga...", color: "text-foreground" },
  { text: "Genererar svar...", color: "text-foreground" },
  { text: "Svar levererat ✓", color: "text-foreground" },
  { text: "Väntar på nästa samtal...", color: "text-muted-foreground" },
];

const About = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [callCount, setCallCount] = useState(142);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => {
        const next = (prev + 1) % statusMessages.length;
        if (next === 0) setCallCount((c) => c + 1);
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Pulse mic active state based on status
    setIsActive(statusIndex < 3);
  }, [statusIndex]);

  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block border border-border px-3 py-1 mb-4">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Om oss
            </span>
          </div>
          <h2 className="text-foreground">Byggt av praktiker</h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
            <p>
              Vi startade Kundra för att vi såg hur företag kämpade med samma
              utmaning — ökande kundförväntningar och begränsade resurser.
            </p>
            <p>
              Vårt team kombinerar erfarenhet inom kundservice med
              tekniklösningar. Vi ersätter inte människor, vi gör dem effektivare.
            </p>
            <p>
              Idag arbetar vi med företag i alla storlekar för att skapa
              supportupplevelser som kunderna verkligen uppskattar.
            </p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative mx-auto w-[280px] sm:w-[300px]">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] bg-foreground/10 p-[3px] elevation-4">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-card">
                  {/* Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-full bg-foreground/90" />

                  {/* Status bar */}
                  <div className="absolute top-1 left-0 right-0 z-10 flex items-center justify-between px-8 py-1.5">
                    <span className="text-[10px] font-medium text-foreground/70 font-mono">9:41</span>
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
                  <div className="relative aspect-[9/19.5] flex flex-col">
                    {/* App header */}
                    <div className="pt-10 pb-3 px-4 border-b border-border text-center">
                      <div className="h-8 w-8 rounded-full bg-foreground/10 mx-auto mb-1 flex items-center justify-center">
                        <span className="text-xs font-bold text-foreground font-mono">K</span>
                      </div>
                      <p className="text-[11px] font-semibold text-foreground">Kundra AI</p>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-accent animate-pulse' : 'bg-muted-foreground/40'}`} />
                        <p className="text-[9px] text-muted-foreground">
                          {isActive ? "Aktiv" : "Standby"}
                        </p>
                      </div>
                    </div>

                    {/* Voice visualization area */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
                      {/* Sound wave visualization */}
                      <div className="flex items-center gap-[3px] h-16">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-[2.5px] rounded-full bg-foreground/20 transition-all duration-300"
                            style={{
                              height: isActive
                                ? `${12 + Math.sin((i * 0.6) + statusIndex * 1.5) * 18 + Math.cos((i * 0.9) + statusIndex * 2) * 12}px`
                                : '6px',
                              opacity: isActive ? 0.3 + Math.sin((i * 0.5) + statusIndex) * 0.3 : 0.15,
                              animationDelay: `${i * 50}ms`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Mic button */}
                      <button
                        className={`relative h-16 w-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? 'bg-foreground text-background shadow-lg'
                            : 'bg-foreground/10 text-foreground/40'
                        }`}
                      >
                        {isActive && (
                          <>
                            <span className="absolute inset-0 rounded-full bg-foreground/20 animate-ping" />
                            <span className="absolute -inset-2 rounded-full border border-foreground/10 animate-pulse" />
                          </>
                        )}
                        <Mic className="h-6 w-6 relative z-10" />
                      </button>

                      {/* Status text */}
                      <div className="text-center space-y-1 min-h-[40px]">
                        <p
                          key={statusIndex}
                          className={`text-[12px] font-mono font-medium ${statusMessages[statusIndex].color} animate-fade-in`}
                        >
                          {statusMessages[statusIndex].text}
                        </p>
                      </div>
                    </div>

                    {/* Bottom stats bar */}
                    <div className="px-4 pb-8 pt-3 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <p className="text-[10px] font-mono font-bold text-foreground">{callCount}</p>
                          <p className="text-[8px] text-muted-foreground">Samtal idag</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] font-mono font-bold text-foreground">1.2s</p>
                          <p className="text-[8px] text-muted-foreground">Svarstid</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[10px] font-mono font-bold text-foreground">98%</p>
                          <p className="text-[8px] text-muted-foreground">Nöjdhet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute left-0 top-24 h-7 w-[3px] rounded-l-sm bg-foreground/10" />
              <div className="absolute left-0 top-36 h-10 w-[3px] rounded-l-sm bg-foreground/10" />
              <div className="absolute right-0 top-36 h-14 w-[3px] rounded-r-sm bg-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
