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

const contactSchema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  company: z.string().trim().max(100).optional(),
  interest: z.string().optional(),
  message: z.string().trim().min(1, "Meddelande krävs").max(1000),
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

  const onSubmit = async (_data: ContactFormData) => {
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
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
              Kontakt
            </p>
            <h2 className="mb-5 text-foreground">
              Redo att förbättra er kundservice?
            </h2>
            <p className="mb-10 text-lg text-muted-foreground leading-relaxed">
              Låt oss diskutera hur vi kan hjälpa ert team att leverera bättre kundupplevelser.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Snabb implementation", desc: "Kom igång på några dagar, inte månader" },
                { title: "Personlig demo", desc: "Se hur Kundra fungerar för just er bransch" },
                { title: "Ingen bindningstid", desc: "Testa riskfritt med vår 14-dagars provperiod" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="rounded-lg border border-border bg-card p-8 sm:p-10 elevation-2">
              <h3 className="mb-6 font-sans text-lg font-semibold text-foreground">Kontakta oss</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <User className="h-3.5 w-3.5" /> Namn
                    </Label>
                    <Input id="name" placeholder="Ditt namn" {...register("name")} className="bg-background" />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <Mail className="h-3.5 w-3.5" /> E-post
                    </Label>
                    <Input id="email" type="email" placeholder="din@epost.se" {...register("email")} className="bg-background" />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <Building2 className="h-3.5 w-3.5" /> Företag
                    </Label>
                    <Input id="company" placeholder="Ditt företag" {...register("company")} className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      <MessageSquare className="h-3.5 w-3.5" /> Intresse
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
                  <Label htmlFor="message" className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase tracking-wider">
                    <MessageSquare className="h-3.5 w-3.5" /> Meddelande
                  </Label>
                  <Textarea id="message" placeholder="Berätta hur vi kan hjälpa dig..." rows={4} {...register("message")} className="bg-background resize-none" />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                  {isSubmitting ? "Skickar..." : (
                    <>
                      Skicka meddelande
                      <Send className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-xs text-muted-foreground">
                  Genom att skicka godkänner du vår integritetspolicy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
