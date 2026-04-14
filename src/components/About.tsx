import { useState, useEffect } from "react";
import { Mic, Wifi, Signal } from "lucide-react";

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
              {/* Outer phone shell — titanium-like frame */}
              <div
                className="relative rounded-[3rem] p-[2px]"
                style={{
                  background: 'linear-gradient(145deg, hsl(199 15% 70%), hsl(199 10% 50%), hsl(199 15% 65%))',
                  boxShadow: '0 25px 60px -12px hsl(199 71% 15% / 0.25), 0 8px 24px -4px hsl(199 71% 15% / 0.12), inset 0 1px 0 hsl(0 0% 100% / 0.15)',
                }}
              >
                {/* Inner bezel */}
                <div
                  className="relative rounded-[2.85rem] p-[6px]"
                  style={{
                    background: 'linear-gradient(180deg, hsl(199 10% 20%), hsl(199 15% 12%))',
                  }}
                >
                  {/* Screen glass */}
                  <div className="relative overflow-hidden rounded-[2.4rem]" style={{ background: 'hsl(220 20% 97%)' }}>
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                      <div
                        className="h-[22px] w-[90px] rounded-full flex items-center justify-center gap-2"
                        style={{ background: 'hsl(0 0% 5%)' }}
                      >
                        {/* Camera dot */}
                        <div className="w-[8px] h-[8px] rounded-full ml-6" style={{
                          background: 'radial-gradient(circle, hsl(220 30% 25%) 30%, hsl(0 0% 8%) 70%)',
                          boxShadow: 'inset 0 0 2px hsl(220 40% 40% / 0.5)',
                        }} />
                      </div>
                    </div>

                    {/* Status bar */}
                    <div className="absolute top-1.5 left-0 right-0 z-10 flex items-center justify-between px-7 py-1">
                      <span className="text-[10px] font-semibold font-mono" style={{ color: 'hsl(0 0% 15%)' }}>9:41</span>
                      <div className="flex items-center gap-1">
                        {/* Signal bars */}
                        <div className="flex items-end gap-[1.5px]">
                          <div className="w-[3px] h-[4px] rounded-[1px]" style={{ background: 'hsl(0 0% 15%)' }} />
                          <div className="w-[3px] h-[6px] rounded-[1px]" style={{ background: 'hsl(0 0% 15%)' }} />
                          <div className="w-[3px] h-[8px] rounded-[1px]" style={{ background: 'hsl(0 0% 15%)' }} />
                          <div className="w-[3px] h-[10px] rounded-[1px]" style={{ background: 'hsl(0 0% 15% / 0.3)' }} />
                        </div>
                        {/* WiFi icon */}
                        <svg width="13" height="10" viewBox="0 0 13 10" className="ml-0.5">
                          <path d="M6.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="hsl(0 0% 15%)" />
                          <path d="M3.8 6.8a3.8 3.8 0 0 1 5.4 0" stroke="hsl(0 0% 15%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                          <path d="M1.5 4.5a7 7 0 0 1 10 0" stroke="hsl(0 0% 15%)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        </svg>
                        {/* Battery */}
                        <div className="flex items-center ml-0.5">
                          <div className="w-[22px] h-[10px] rounded-[2.5px] border-[1.5px] p-[1.5px]" style={{ borderColor: 'hsl(0 0% 15%)' }}>
                            <div className="w-[70%] h-full rounded-[1px]" style={{ background: 'hsl(0 0% 15%)' }} />
                          </div>
                          <div className="w-[1.5px] h-[4px] rounded-r-sm -ml-[0.5px]" style={{ background: 'hsl(0 0% 15%)' }} />
                        </div>
                      </div>
                    </div>

                    {/* Screen content */}
                    <div className="relative aspect-[9/19.5] flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(220 15% 97%), hsl(220 10% 95%))' }}>
                      {/* App header */}
                      <div className="pt-11 pb-3 px-4 text-center" style={{ borderBottom: '0.5px solid hsl(0 0% 85%)' }}>
                        <div
                          className="h-9 w-9 rounded-full mx-auto mb-1.5 flex items-center justify-center"
                          style={{ background: 'linear-gradient(135deg, hsl(199 71% 15%), hsl(199 60% 25%))' }}
                        >
                          <span className="text-xs font-bold font-mono" style={{ color: 'hsl(0 0% 93%)' }}>K</span>
                        </div>
                        <p className="text-[11px] font-semibold" style={{ color: 'hsl(0 0% 10%)' }}>Kundra AI</p>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${isActive ? 'animate-pulse' : ''}`}
                            style={{ background: isActive ? 'hsl(142 60% 45%)' : 'hsl(0 0% 75%)' }}
                          />
                          <p className="text-[9px]" style={{ color: 'hsl(0 0% 50%)' }}>
                            {isActive ? "Aktiv" : "Standby"}
                          </p>
                        </div>
                      </div>

                      {/* Voice visualization area */}
                      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-5">
                        {/* Sound wave visualization */}
                        <div className="flex items-center gap-[3px] h-16">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-[2.5px] rounded-full transition-all duration-300"
                              style={{
                                background: isActive
                                  ? `hsl(199 71% ${25 + Math.sin(i * 0.5) * 10}%)`
                                  : 'hsl(0 0% 80%)',
                                height: isActive
                                  ? `${12 + Math.sin((i * 0.6) + statusIndex * 1.5) * 18 + Math.cos((i * 0.9) + statusIndex * 2) * 12}px`
                                  : '6px',
                                opacity: isActive ? 0.4 + Math.sin((i * 0.5) + statusIndex) * 0.35 : 0.25,
                              }}
                            />
                          ))}
                        </div>

                        {/* Mic button */}
                        <button
                          className="relative h-16 w-16 rounded-full flex items-center justify-center transition-all duration-500"
                          style={{
                            background: isActive
                              ? 'linear-gradient(135deg, hsl(199 71% 15%), hsl(199 60% 22%))'
                              : 'hsl(0 0% 90%)',
                            color: isActive ? 'hsl(0 0% 93%)' : 'hsl(0 0% 60%)',
                            boxShadow: isActive
                              ? '0 4px 20px hsl(199 71% 15% / 0.3), 0 2px 8px hsl(199 71% 15% / 0.2)'
                              : 'none',
                          }}
                        >
                          {isActive && (
                            <>
                              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'hsl(199 71% 15% / 0.15)' }} />
                              <span className="absolute -inset-2 rounded-full border animate-pulse" style={{ borderColor: 'hsl(199 71% 15% / 0.1)' }} />
                            </>
                          )}
                          <Mic className="h-6 w-6 relative z-10" />
                        </button>

                        {/* Status text */}
                        <div className="text-center space-y-1 min-h-[40px]">
                          <p
                            key={statusIndex}
                            className="text-[12px] font-mono font-medium animate-fade-in"
                            style={{ color: isActive ? 'hsl(199 71% 15%)' : 'hsl(0 0% 50%)' }}
                          >
                            {statusMessages[statusIndex].text}
                          </p>
                        </div>
                      </div>

                      {/* Bottom stats bar */}
                      <div className="px-4 pb-8 pt-3" style={{ borderTop: '0.5px solid hsl(0 0% 85%)' }}>
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-[10px] font-mono font-bold" style={{ color: 'hsl(199 71% 15%)' }}>{callCount}</p>
                            <p className="text-[8px]" style={{ color: 'hsl(0 0% 55%)' }}>Samtal idag</p>
                          </div>
                          <div className="text-center">
                            <p className="text-[10px] font-mono font-bold" style={{ color: 'hsl(199 71% 15%)' }}>1.2s</p>
                            <p className="text-[8px]" style={{ color: 'hsl(0 0% 55%)' }}>Svarstid</p>
                          </div>
                          <div className="text-center">
                            <p className="text-[10px] font-mono font-bold" style={{ color: 'hsl(199 71% 15%)' }}>98%</p>
                            <p className="text-[8px]" style={{ color: 'hsl(0 0% 55%)' }}>Nöjdhet</p>
                          </div>
                        </div>
                      </div>

                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] rounded-full" style={{ background: 'hsl(0 0% 15% / 0.2)' }} />
                    </div>

                    {/* Screen glass reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-[2.4rem]"
                      style={{
                        background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, transparent 40%, transparent 60%, hsl(0 0% 100% / 0.03) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Side buttons — more realistic */}
              {/* Silent switch */}
              <div
                className="absolute -left-[3px] top-[72px] h-[14px] w-[4px] rounded-l-[2px]"
                style={{ background: 'linear-gradient(90deg, hsl(199 10% 55%), hsl(199 10% 65%))' }}
              />
              {/* Volume up */}
              <div
                className="absolute -left-[3px] top-[100px] h-[28px] w-[4px] rounded-l-[2px]"
                style={{ background: 'linear-gradient(90deg, hsl(199 10% 55%), hsl(199 10% 65%))' }}
              />
              {/* Volume down */}
              <div
                className="absolute -left-[3px] top-[136px] h-[28px] w-[4px] rounded-l-[2px]"
                style={{ background: 'linear-gradient(90deg, hsl(199 10% 55%), hsl(199 10% 65%))' }}
              />
              {/* Power button */}
              <div
                className="absolute -right-[3px] top-[115px] h-[40px] w-[4px] rounded-r-[2px]"
                style={{ background: 'linear-gradient(270deg, hsl(199 10% 55%), hsl(199 10% 65%))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;