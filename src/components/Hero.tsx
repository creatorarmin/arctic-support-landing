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
    { id: 1, type: "user", text: "Jag vill boka ett bord för två." },
    { id: 2, type: "ai", text: "Datum och tid?" },
    { id: 3, type: "user", text: "Lördag 19:00" },
    { id: 4, type: "ai", text: "Bord för 2, lör 19:00. Bekräfta?" },
    { id: 5, type: "user", text: "Ja." },
    { id: 6, type: "ai", text: "Bekräftat. E-post skickad." },
  ],
  [
    { id: 1, type: "user", text: "Fråga om min faktura." },
    { id: 2, type: "ai", text: "Vad undrar du?" },
    { id: 3, type: "user", text: "Post på 299 kr?" },
    { id: 4, type: "ai", text: "Premium-paket, startdatum 1 mars." },
    { id: 5, type: "user", text: "Kan jag få kopia?" },
    { id: 6, type: "ai", text: "Skickat till din e-post." },
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
      }, 1200);
      return () => clearTimeout(typingTimer);
    } else {
      const messageTimer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, nextMessage]);
        setCurrentMessageIndex(prev => prev + 1);
      }, 900);
      return () => clearTimeout(messageTimer);
    }
  }, [currentMessageIndex, currentConversation]);

  return (
    <section className="relative min-h-screen flex items-center pt-14">
      {/* Large decorative number */}
      <div className="absolute top-20 right-8 font-mono text-[20rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none hidden lg:block">
        01
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3">
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

          {/* Terminal chat — elevated with rotation */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative">
              {/* Shadow card behind */}
              <div className="absolute inset-0 bg-foreground/5 translate-x-3 translate-y-3" />
              
              <div className="relative border border-border bg-card overflow-hidden elevation-3">
                {/* Terminal bar */}
                <div className="border-b border-border px-4 py-2.5 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                    <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">live demo</span>
                </div>
                
                {/* Messages */}
                <div className="h-[360px] overflow-hidden px-5 py-4 font-mono text-xs">
                  <div className="flex flex-col gap-3">
                    {visibleMessages.map((message) => (
                      <div key={`${currentConversationIndex}-${message.id}`} className="flex gap-3">
                        <span className={`shrink-0 w-8 text-right ${message.type === "user" ? "text-foreground" : "text-muted-foreground/50"}`}>
                          {message.type === "user" ? "du" : "ai"}
                        </span>
                        <span className="text-muted-foreground/30">│</span>
                        <span className={message.type === "user" ? "text-foreground" : "text-muted-foreground"}>
                          {message.text}
                        </span>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-3">
                        <span className="shrink-0 w-8 text-right text-muted-foreground/50">ai</span>
                        <span className="text-muted-foreground/30">│</span>
                        <span className="text-muted-foreground">
                          <span className="inline-block w-1.5 h-3.5 bg-foreground/60 animate-pulse" />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Input */}
                <div className="border-t border-border px-5 py-3 flex items-center gap-3 font-mono text-xs">
                  <span className="text-muted-foreground/50">›</span>
                  <span className="text-muted-foreground">Skriv ett meddelande...</span>
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
