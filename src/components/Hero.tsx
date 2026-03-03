import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Kundtjänstlösningar
            </p>
            
            <h1 className="mb-6 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Bättre support för växande företag
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Vi hjälper företag att leverera enastående kundupplevelser genom 
              smart automatisering och dedikerade supportteam. Mindre väntan, fler lösningar.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Boka ett samtal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Se hur det fungerar
              </Button>
            </div>
          </motion.div>

          {/* Right side - Live chat conversation */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div 
                className="max-w-md mx-auto rounded-2xl bg-card border border-border overflow-hidden relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Chat header */}
                <div className="bg-muted/30 border-b border-border px-4 py-3 flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-foreground font-semibold text-sm">K</span>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-card" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Kundra AI</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="h-[320px] overflow-hidden px-4 py-4">
                  <div className="flex flex-col gap-3 h-full">
                    <AnimatePresence mode="popLayout">
                      {visibleMessages.map((message) => (
                        <motion.div
                          key={`${currentConversationIndex}-${message.id}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                              message.type === "user" 
                                ? "bg-foreground text-background rounded-br-md" 
                                : "bg-muted text-foreground rounded-bl-md"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Typing indicator */}
                      {isTyping && (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                            <div className="flex gap-1.5">
                              {[0, 0.15, 0.3].map((delay, i) => (
                                <motion.span 
                                  key={i}
                                  className="h-2 w-2 rounded-full bg-muted-foreground/60"
                                  animate={{ opacity: [0.4, 1, 0.4] }}
                                  transition={{ duration: 0.8, repeat: Infinity, delay }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Chat input */}
                <div className="border-t border-border px-4 py-3">
                  <button 
                    onClick={scrollToContact}
                    className="w-full flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 cursor-pointer hover:border-muted-foreground/30 transition-colors group"
                  >
                    <span className="text-sm text-muted-foreground flex-1 text-left">Skriv ett meddelande...</span>
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-foreground" />
                    </div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
