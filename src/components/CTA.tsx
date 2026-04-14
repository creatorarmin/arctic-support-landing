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
import { Send } from "lucide-react";
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
      title: "Meddelande skickat",
      description: "Vi återkommer inom kort.",
    });
    reset();
  };

  return (
    <section id="kontakt" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-3 font-mono text-xs text-muted-foreground tracking-wider">
              // kontakt
            </p>
            <h2 className="mb-4 text-foreground">
              Kom igång
            </h2>
            <p className="mb-8 text-sm text-muted-foreground leading-relaxed max-w-sm">
              Berätta om ert behov. Vi återkommer med en anpassad lösning.
            </p>
            
            <div className="space-y-3 font-mono text-xs text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-muted-foreground/50">01</span>
                <span>Implementation på dagar</span>
              </div>
              <div className="flex gap-3">
                <span className="text-muted-foreground/50">02</span>
                <span>Personlig demo för er bransch</span>
              </div>
              <div className="flex gap-3">
                <span className="text-muted-foreground/50">03</span>
                <span>14 dagars kostnadsfri test</span>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-border bg-card">
              <div className="border-b border-border px-6 py-3">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">kontakt_form</span>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      namn
                    </Label>
                    <Input id="name" placeholder="—" {...register("name")} className="bg-background font-mono text-xs h-8" />
                    {errors.name && <p className="text-[10px] text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      e-post
                    </Label>
                    <Input id="email" type="email" placeholder="—" {...register("email")} className="bg-background font-mono text-xs h-8" />
                    {errors.email && <p className="text-[10px] text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      företag
                    </Label>
                    <Input id="company" placeholder="—" {...register("company")} className="bg-background font-mono text-xs h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="interest" className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      intresse
                    </Label>
                    <Select onValueChange={(value) => setValue("interest", value)}>
                      <SelectTrigger className="bg-background font-mono text-xs h-8">
                        <SelectValue placeholder="—" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Demo</SelectItem>
                        <SelectItem value="pricing">Priser</SelectItem>
                        <SelectItem value="partnership">Partnerskap</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    meddelande
                  </Label>
                  <Textarea id="message" placeholder="—" rows={3} {...register("message")} className="bg-background font-mono text-xs resize-none" />
                  {errors.message && <p className="text-[10px] text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" size="sm" className="w-full font-mono text-xs" disabled={isSubmitting}>
                  {isSubmitting ? "skickar..." : (
                    <>
                      skicka
                      <Send className="ml-1.5 h-3 w-3" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
