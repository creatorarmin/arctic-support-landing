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

export const useChat = () => {
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

  return { visibleMessages, isTyping, currentConversationIndex };
};

const Hero = () => {
  const { visibleMessages, isTyping, currentConversationIndex } = useChat();

  const scrollToContact = () => {
    const el = document.getElementById("kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-14">

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
              <span className="text-foreground/20">support.</span>
              <br />
              Lägre
              <br />
              <span className="text-foreground/20">kostnad.</span>
            </h1>

            <p className="mb-10 text-lg text-muted-foreground leading-relaxed max-w-lg">
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

          {/* Chat window */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/5 translate-x-3 translate-y-3" />
              <div className="relative border border-border bg-card/20 backdrop-blur-sm overflow-hidden elevation-3">
                {/* Chat header */}
                <div className="border-b border-border px-5 py-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-foreground/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground font-mono">K</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Kundra</p>
                    <p className="text-[10px] text-muted-foreground">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-[420px] overflow-hidden px-4 py-4">
                  <div className="flex flex-col gap-2">
                    {visibleMessages.map((message) => (
                      <div
                        key={`${currentConversationIndex}-${message.id}`}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] px-3.5 py-2 ${
                            message.type === "user"
                              ? "bg-secondary text-secondary-foreground rounded-2xl rounded-br-sm"
                              : "bg-primary text-primary-foreground rounded-2xl rounded-bl-sm"
                          }`}
                        >
                          <p className="text-[13px] leading-relaxed">{message.text}</p>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-secondary rounded-2xl rounded-bl-sm px-4 py-3">
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

                {/* Input */}
                <div className="border-t border-border px-4 py-3">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 cursor-pointer hover:border-muted-foreground/40 transition-colors"
                  >
                    <span className="text-sm text-muted-foreground flex-1 text-left">Skriv ett meddelande...</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
