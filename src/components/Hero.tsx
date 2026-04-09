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
  [
    { id: 1, type: "user", text: "Hur exporterar jag data från bokföringssystemet?" },
    { id: 2, type: "ai", text: "Du hittar export under Inställningar > Rapporter." },
    { id: 3, type: "user", text: "Vilka format stöds?" },
    { id: 4, type: "ai", text: "Vi stödjer Excel, CSV och PDF för alla rapporter." },
    { id: 5, type: "user", text: "Perfekt, kan jag schemalägga automatisk export?" },
    { id: 6, type: "ai", text: "Ja! Gå till Automatisering och välj frekvens. 📊" },
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
      }, 1500);
      return () => clearTimeout(typingTimer);
    } else {
      const messageTimer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, nextMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 1200);
      return () => clearTimeout(messageTimer);
    }
  }, [currentMessageIndex, currentConversation]);

  const scrollToContact = () => {
    const el = document.getElementById("kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              Kundtjänstlösningar
            </p>
            
            <h1 className="mb-6 text-foreground">
              Bättre support för växande företag
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed max-w-md">
              Vi hjälper företag att leverera enastående kundupplevelser genom 
              smart automatisering och dedikerade supportteam.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Boka ett samtal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline" size="lg">
                Se hur det fungerar
              </Button>
            </div>
          </div>

          {/* Chat demo */}
          <div className="hidden lg:block">
            <div className="max-w-md mx-auto rounded-lg bg-card border border-border overflow-hidden elevation-3">
              {/* Chat header */}
              <div className="bg-primary px-5 py-3.5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-sm">K</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground">Kundra AI</p>
                  <p className="text-xs text-primary-foreground/70">Online</p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="h-[420px] overflow-hidden px-4 py-4 bg-card">
                <div className="flex flex-col gap-3 h-full">
                  {visibleMessages.map((message) => (
                    <div
                      key={`${currentConversationIndex}-${message.id}`}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg px-4 py-2.5 ${
                          message.type === "user" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-lg px-4 py-3">
                        <div className="flex gap-1.5">
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
                  className="w-full flex items-center gap-3 rounded-md border border-border bg-background px-4 py-2.5 cursor-pointer hover:border-muted-foreground/40 transition-colors duration-200 group"
                >
                  <span className="text-sm text-muted-foreground flex-1 text-left">Skriv ett meddelande...</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
