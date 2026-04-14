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
import { ArrowRight } from "lucide-react";
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
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block border border-border px-3 py-1 mb-4">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Kontakt
            </span>
          </div>
          <h2 className="text-foreground">Redo att börja?</h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Berätta om ert behov. Vi återkommer med en anpassad lösning.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {[
                { num: "01", text: "Implementation på dagar, inte månader" },
                { num: "02", text: "Personlig demo anpassad för er bransch" },
                { num: "03", text: "14 dagars kostnadsfri testperiod" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <span className="font-mono text-3xl font-bold text-foreground/15 tabular-nums leading-none">{item.num}</span>
                  <span className="text-base text-muted-foreground pt-1">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/5 translate-x-3 translate-y-3" />
              <div className="relative border border-border bg-card">
                <div className="border-b border-border px-6 py-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Kontaktformulär</span>
                  <ArrowRight className="h-3 w-3 text-muted-foreground/40" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs text-muted-foreground uppercase tracking-wider">
                        Namn
                      </Label>
                      <Input id="name" {...register("name")} className="bg-background text-sm h-9" />
                      {errors.name && <p className="text-[10px] text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider">
                        E-post
                      </Label>
                      <Input id="email" type="email" {...register("email")} className="bg-background text-sm h-9" />
                      {errors.email && <p className="text-[10px] text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-xs text-muted-foreground uppercase tracking-wider">
                        Företag
                      </Label>
                      <Input id="company" {...register("company")} className="bg-background text-sm h-9" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="interest" className="text-xs text-muted-foreground uppercase tracking-wider">
                        Intresse
                      </Label>
                      <Select onValueChange={(value) => setValue("interest", value)}>
                        <SelectTrigger className="bg-background text-sm h-9">
                          <SelectValue placeholder="Välj..." />
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
                    <Label htmlFor="message" className="text-xs text-muted-foreground uppercase tracking-wider">
                      Meddelande
                    </Label>
                    <Textarea id="message" rows={3} {...register("message")} className="bg-background text-sm resize-none" />
                    {errors.message && <p className="text-[10px] text-destructive">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Skickar..." : "Skicka meddelande"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
