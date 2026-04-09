import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Building2, Mail, User, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100, "Namn får max vara 100 tecken"),
  email: z.string().trim().email("Ogiltig e-postadress").max(255, "E-post får max vara 255 tecken"),
  company: z.string().trim().max(100, "Företagsnamn får max vara 100 tecken").optional(),
  interest: z.string().optional(),
  message: z.string().trim().min(1, "Meddelande krävs").max(1000, "Meddelande får max vara 1000 tecken"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CTA = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer till dig inom kort.",
    });
    
    reset();
  };

  return (
    <section id="kontakt" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Organic background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-accent/15 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-5 text-foreground">
              Redo att förbättra<br />
              <span className="italic font-normal text-muted-foreground/60">er kundservice?</span>
            </h2>
            <p className="mb-12 text-base font-light text-muted-foreground leading-relaxed max-w-md">
              Låt oss diskutera hur vi kan hjälpa ert team att leverera bättre kundupplevelser.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Snabb implementation", desc: "Kom igång på några dagar, inte månader" },
                { title: "Personlig demo", desc: "Se hur Kundra fungerar för just er bransch" },
                { title: "Ingen bindningstid", desc: "Testa riskfritt med vår 14-dagars provperiod" },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-8 h-[1px] bg-muted-foreground/30 mt-3 shrink-0" />
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm font-light text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border/40 bg-card/50 p-8 sm:p-10 elevation-2">
              <h3 className="mb-8 font-serif text-2xl text-foreground">Kontakta oss</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <User className="h-3.5 w-3.5" />
                      Namn
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ditt namn"
                      {...register("name")}
                      className="bg-background/50 rounded-xl border-border/40"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <Mail className="h-3.5 w-3.5" />
                      E-post
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="din@epost.se"
                      {...register("email")}
                      className="bg-background/50 rounded-xl border-border/40"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <Building2 className="h-3.5 w-3.5" />
                      Företag
                    </Label>
                    <Input
                      id="company"
                      placeholder="Ditt företag"
                      {...register("company")}
                      className="bg-background/50 rounded-xl border-border/40"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <MessageSquare className="h-3.5 w-3.5" />
                      Intresse
                    </Label>
                    <Select onValueChange={(value) => setValue("interest", value)}>
                      <SelectTrigger className="bg-background/50 rounded-xl border-border/40">
                        <SelectValue placeholder="Välj ett alternativ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Boka en demo</SelectItem>
                        <SelectItem value="pricing">Prisfrågor</SelectItem>
                        <SelectItem value="partnership">Partnerskap</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="other">Övrigt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    <MessageSquare className="h-3.5 w-3.5" />
                    Meddelande
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Berätta hur vi kan hjälpa dig..."
                    rows={4}
                    {...register("message")}
                    className="bg-background/50 resize-none rounded-xl border-border/40"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground font-light">
                  Genom att skicka godkänner du vår integritetspolicy
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
