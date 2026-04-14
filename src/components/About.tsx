import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  text: string;
}

const conversation: ChatMessage[] = [
  { id: 1, type: "user", text: "Hur exporterar jag data?" },
  { id: 2, type: "ai", text: "Gå till Inställningar → Rapporter." },
  { id: 3, type: "user", text: "Vilka format stöds?" },
  { id: 4, type: "ai", text: "Excel, CSV och PDF." },
  { id: 5, type: "user", text: "Kan jag schemalägga export?" },
  { id: 6, type: "ai", text: "Ja! Under Automatisering, välj frekvens. 📊" },
];

const About = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      const timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentMessageIndex(0);
        setCycle(c => c + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }

    const next = conversation[currentMessageIndex];

    if (next.type === "ai") {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, next]);
        setCurrentMessageIndex(i => i + 1);
      }, 1400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, next]);
        setCurrentMessageIndex(i => i + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, cycle]);

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
          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
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
                  <div className="relative aspect-[9/19.5]">
                    {/* Chat header */}
                    <div className="pt-10 pb-2 px-4 border-b border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-8 w-8 rounded-full bg-foreground/10 mx-auto mb-1 flex items-center justify-center">
                          <span className="text-xs font-bold text-foreground font-mono">K</span>
                        </div>
                        <p className="text-[11px] font-semibold text-foreground">Kundra</p>
                        <p className="text-[9px] text-muted-foreground">Online</p>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-hidden px-3 py-3">
                      <div className="flex flex-col gap-1.5">
                        {visibleMessages.map((message) => (
                          <div
                            key={`${cycle}-${message.id}`}
                            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] px-3 py-1.5 ${
                                message.type === "user"
                                  ? "bg-primary text-primary-foreground rounded-[18px] rounded-br-[4px]"
                                  : "bg-secondary text-secondary-foreground rounded-[18px] rounded-bl-[4px]"
                              }`}
                            >
                              <p className="text-[11px] leading-snug">{message.text}</p>
                            </div>
                          </div>
                        ))}

                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="bg-secondary rounded-[18px] rounded-bl-[4px] px-3.5 py-2.5">
                              <div className="flex gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse" />
                                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse [animation-delay:150ms]" />
                                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-pulse [animation-delay:300ms]" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Input bar */}
                    <div className="absolute bottom-4 left-0 right-0 px-3">
                      <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
                        <span className="text-[11px] text-muted-foreground flex-1">Skriv ett meddelande...</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
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
