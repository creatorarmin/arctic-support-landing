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
import { ArrowRight, Send, Building2, Mail, User, MessageSquare } from "lucide-react";
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
    <section id="kontakt" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient shape */}
      <motion.div 
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/[0.015] blur-3xl"
        animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-4 text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Redo att förbättra er kundservice?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Låt oss diskutera hur vi kan hjälpa ert team att leverera bättre kundupplevelser med AI-driven support.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Snabb implementation", desc: "Kom igång på några dagar, inte månader" },
                { title: "Personlig demo", desc: "Se hur Kundra fungerar för just er bransch" },
                { title: "Ingen bindningstid", desc: "Testa riskfritt med vår 14-dagars provperiod" },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.06] group-hover:bg-white/[0.08] transition-colors">
                    <ArrowRight className="h-4 w-4 text-foreground/70" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Form shadow depth */}
              <div className="absolute inset-2 -bottom-2 rounded-2xl bg-white/[0.02] blur-lg" />
              
              <div className="relative rounded-2xl border border-white/[0.08] bg-card/70 backdrop-blur-sm p-8 sm:p-10 shadow-2xl shadow-black/10">
                {/* Top accent */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <h3 className="mb-6 text-xl font-medium text-foreground">Kontakta oss</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        Namn *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ditt namn"
                        {...register("name")}
                        className="bg-white/[0.03] border-white/[0.08] focus:border-white/20"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        E-post *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="din@epost.se"
                        {...register("email")}
                        className="bg-white/[0.03] border-white/[0.08] focus:border-white/20"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        Företag
                      </Label>
                      <Input
                        id="company"
                        placeholder="Ditt företag"
                        {...register("company")}
                        className="bg-white/[0.03] border-white/[0.08] focus:border-white/20"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="flex items-center gap-2 text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                        Intresse
                      </Label>
                      <Select onValueChange={(value) => setValue("interest", value)}>
                        <SelectTrigger className="bg-white/[0.03] border-white/[0.08]">
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
                    <Label htmlFor="message" className="flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      Meddelande *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Berätta hur vi kan hjälpa dig..."
                      rows={4}
                      {...register("message")}
                      className="bg-white/[0.03] border-white/[0.08] focus:border-white/20 resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Skickar..."
                    ) : (
                      <>
                        Skicka meddelande
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    Genom att skicka godkänner du vår integritetspolicy
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
