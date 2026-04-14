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
    <section className="relative min-h-[80vh] flex items-center pt-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="max-w-lg">
            <p className="mb-3 font-mono text-xs text-muted-foreground tracking-wider">
              // kundtjänst_automatisering
            </p>
            
            <h1 className="mb-5 text-foreground">
              Bättre support.<br />Lägre kostnad.
            </h1>
            
            <p className="mb-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Automatiserad kundservice för företag som värdesätter precision och effektivitet.
            </p>
            
            <div className="flex gap-3">
              <Button size="sm" className="font-mono text-xs">
                boka_demo
                <ArrowRight className="ml-1.5 h-3 w-3" />
              </Button>
              <Button variant="outline" size="sm" className="font-mono text-xs">
                se_mer
              </Button>
            </div>
          </div>

          {/* Terminal-style chat */}
          <div className="hidden lg:block">
            <div className="max-w-md mx-auto border border-border bg-card overflow-hidden">
              {/* Terminal bar */}
              <div className="border-b border-border px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground ml-2">kundra_chat.sh</span>
              </div>
              
              {/* Messages */}
              <div className="h-[380px] overflow-hidden px-4 py-3 font-mono text-xs">
                <div className="flex flex-col gap-2">
                  {visibleMessages.map((message) => (
                    <div key={`${currentConversationIndex}-${message.id}`}>
                      <span className="text-muted-foreground">
                        {message.type === "user" ? "usr" : "sys"}
                      </span>
                      <span className="text-muted-foreground/50 mx-1">›</span>
                      <span className={message.type === "user" ? "text-foreground" : "text-muted-foreground"}>
                        {message.text}
                      </span>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div>
                      <span className="text-muted-foreground">sys</span>
                      <span className="text-muted-foreground/50 mx-1">›</span>
                      <span className="text-muted-foreground animate-pulse">_</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Input */}
              <div className="border-t border-border px-4 py-2.5">
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <span>usr ›</span>
                  <span className="animate-pulse">_</span>
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
