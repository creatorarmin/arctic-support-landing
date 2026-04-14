import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ChatMessage {
  id: number;
  type: "user" | "ai";
  text: string;
}

const conversations: ChatMessage[][] = [
  [
    { id: 1, type: "user", text: "Hej! Jag vill boka ett bord för två." },
    { id: 2, type: "ai", text: "Hej! Självklart. Vilket datum och tid passar er?" },
    { id: 3, type: "user", text: "Lördag kväll, runt 19:00" },
    { id: 4, type: "ai", text: "Perfekt! Jag har ett bord för 2 pers kl 19:00. Vill du bekräfta?" },
    { id: 5, type: "user", text: "Ja, boka det tack!" },
    { id: 6, type: "ai", text: "Klart! Bekräftelse skickas till din e-post. Välkommen! 🍽️" },
  ],
  [
    { id: 1, type: "user", text: "Hej, jag har en fråga om min faktura." },
    { id: 2, type: "ai", text: "Hej! Självklart, vad undrar du över?" },
    { id: 3, type: "user", text: "Jag förstår inte en post på 299 kr" },
    { id: 4, type: "ai", text: "Det är månadsavgiften för Premium-paketet som startade 1 mars." },
    { id: 5, type: "user", text: "Ah, tack! Kan jag få en kopia på fakturan?" },
    { id: 6, type: "ai", text: "Absolut! Jag skickar en kopia till din e-post nu. ✉️" },
  ],
];

const Hero = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);

  const currentConversation = conversations[currentConversationIndex];

  useEffect(() => {
    if (currentMessageIndex >= currentConversation.length) {
      const resetTimer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentMessageIndex(0);
        setCurrentConversationIndex(prev => (prev + 1) % conversations.length);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const nextMessage = currentConversation[currentMessageIndex];

    if (nextMessage.type === "ai") {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, nextMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1400);
      return () => clearTimeout(typingTimer);
    } else {
      const messageTimer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, nextMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(messageTimer);
    }
  }, [currentMessageIndex, currentConversation]);

  const scrollToContact = () => {
    const el = document.getElementById("kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-14">
      <div className="absolute top-20 right-8 font-mono text-[20rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none hidden lg:block">
        01
      </div>

      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <div className="inline-block border border-border px-3 py-1 mb-8">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                Kundtjänst · Automatisering · AI
              </span>
            </div>

            <h1 className="mb-6 text-foreground">
              Bättre
              <br />
              <span className="text-muted-foreground/30">support.</span>
              <br />
              Lägre
              <br />
              <span className="text-muted-foreground/30">kostnad.</span>
            </h1>

            <p className="mb-10 text-base text-muted-foreground leading-relaxed max-w-md">
              Automatiserad kundservice för företag som värdesätter
              precision och effektivitet.
            </p>

            <div className="flex gap-4 items-center">
              <Button size="lg" className="text-sm px-8">
                Boka demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#losningar" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
                Läs mer
              </a>
            </div>
          </div>

          {/* Phone mockup with real chat */}
          <div className="hidden lg:flex justify-center">
            <div className="relative mx-auto w-[300px]">
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

                  {/* Screen content */}
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
                            key={`${currentConversationIndex}-${message.id}`}
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
                      <button
                        onClick={scrollToContact}
                        className="w-full flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 cursor-pointer hover:border-muted-foreground/40 transition-colors"
                      >
                        <span className="text-[11px] text-muted-foreground flex-1 text-left">Skriv ett meddelande...</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      </button>
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

export default Hero;
