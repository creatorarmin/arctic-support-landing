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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Tack för ditt meddelande!",
      description: "Vi återkommer till dig inom kort.",
    });
    
    reset();
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
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
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Snabb implementation</h3>
                  <p className="text-sm text-muted-foreground">Kom igång på några dagar, inte månader</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Personlig demo</h3>
                  <p className="text-sm text-muted-foreground">Se hur Kundra fungerar för just er bransch</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Ingen bindningstid</h3>
                  <p className="text-sm text-muted-foreground">Testa riskfritt med vår 14-dagars provperiod</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
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
                      className="bg-background"
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
                      className="bg-background"
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
                      className="bg-background"
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
                      <SelectTrigger className="bg-background">
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
                    className="bg-background resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Skickar..."
                  ) : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground">
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
