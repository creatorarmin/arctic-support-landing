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

const FloatingShape = ({ 
  className, 
  delay = 0, 
  duration = 20 
}: { 
  className: string; 
  delay?: number; 
  duration?: number;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 10, -20, 0],
      x: [0, 15, -10, 20, 0],
      rotate: [0, 5, -3, 7, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

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
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Ambient floating shapes */}
      <FloatingShape 
        className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-white/[0.03] to-transparent blur-2xl"
        delay={0}
        duration={25}
      />
      <FloatingShape 
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tl from-white/[0.02] to-transparent blur-3xl"
        delay={3}
        duration={30}
      />
      <FloatingShape 
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent blur-xl"
        delay={6}
        duration={18}
      />
      
      {/* Diagonal line accent */}
      <div className="absolute top-0 right-0 w-px h-[60vh] bg-gradient-to-b from-transparent via-white/10 to-transparent transform rotate-12 origin-top-right" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kundtjänstlösningar
            </motion.p>
            
            <h1 className="mb-6 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Bättre support för växande företag
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Vi hjälper företag att leverera enastående kundupplevelser genom 
              smart automatisering och dedikerade supportteam. Mindre väntan, fler lösningar.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Boka ett samtal
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Se hur det fungerar
              </Button>
            </div>
            
            {/* Trust line */}
            <motion.div 
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">200+</span> företag litar på oss
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Live chat conversation */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Shadow/depth behind card */}
              <div className="absolute inset-4 -bottom-2 rounded-2xl bg-white/[0.03] blur-xl" />
              
              <motion.div 
                className="max-w-md mx-auto rounded-2xl bg-card/80 backdrop-blur-sm border border-white/[0.08] overflow-hidden relative shadow-2xl shadow-black/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Chat header */}
                <div className="bg-white/[0.03] border-b border-white/[0.06] px-4 py-3 flex items-center gap-3">
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
                                : "bg-white/[0.06] text-foreground rounded-bl-md border border-white/[0.04]"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </div>
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          key="typing"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-white/[0.06] rounded-2xl rounded-bl-md px-4 py-3 border border-white/[0.04]">
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
                <div className="border-t border-white/[0.06] px-4 py-3">
                  <button 
                    onClick={scrollToContact}
                    className="w-full flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 cursor-pointer hover:bg-white/[0.05] transition-colors group"
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
