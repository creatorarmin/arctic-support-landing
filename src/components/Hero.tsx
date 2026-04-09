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
    <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      {/* Organic background shape */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 items-center">
          {/* Left content - offset for organic feel */}
          <motion.div 
            className="max-w-xl lg:py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border/60 bg-card/50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-muted-foreground tracking-wide">Kundtjänstlösningar</span>
            </motion.div>
            
            <h1 className="mb-7 text-foreground">
              Bättre support<br />
              <span className="italic font-normal text-muted-foreground/70">för växande företag</span>
            </h1>
            
            <p className="mb-10 text-base font-light text-muted-foreground leading-relaxed max-w-md">
              Vi hjälper företag att leverera enastående kundupplevelser genom 
              smart automatisering och dedikerade supportteam.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group rounded-full px-8">
                Boka ett samtal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Se hur det fungerar
              </Button>
            </div>
          </motion.div>

          {/* Right side - Chat with organic tilt */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div 
                className="max-w-md mx-auto rounded-2xl bg-card border border-border/60 overflow-hidden elevation-3"
                style={{ rotate: -1 }}
                initial={{ opacity: 0, y: 20, rotate: -1 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Chat header */}
                <div className="bg-secondary/30 border-b border-border/40 px-5 py-3.5 flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center organic-blob">
                      <span className="text-foreground font-semibold text-sm">K</span>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-card" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Kundra AI</p>
                    <p className="text-xs text-muted-foreground font-light">Online</p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="h-[420px] overflow-hidden px-4 py-4">
                  <div className="flex flex-col gap-3 h-full">
                    <AnimatePresence mode="popLayout">
                      {visibleMessages.map((message) => (
                        <motion.div
                          key={`${currentConversationIndex}-${message.id}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                              message.type === "user" 
                                ? "bg-[#0b93f6] text-white rounded-br-md" 
                                : "bg-[#e5e5ea] text-[#1c1c1e] rounded-bl-md"
                            }`}
                          >
                            <p className="text-sm leading-relaxed font-sans">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                            <div className="flex gap-1.5">
                              {[0, 0.15, 0.3].map((delay, i) => (
                                <motion.span 
                                  key={i}
                                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50"
                                  animate={{ opacity: [0.3, 1, 0.3] }}
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
                <div className="border-t border-border/40 px-4 py-3">
                  <button 
                    onClick={scrollToContact}
                    className="w-full flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5 cursor-pointer hover:border-muted-foreground/30 transition-all duration-200 group"
                  >
                    <span className="text-sm text-muted-foreground font-light flex-1 text-left">Skriv ett meddelande...</span>
                    <div className="h-7 w-7 rounded-full bg-accent flex items-center justify-center group-hover:bg-foreground transition-colors duration-200">
                      <ArrowRight className="h-3.5 w-3.5 text-foreground group-hover:text-background transition-colors duration-200" />
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
