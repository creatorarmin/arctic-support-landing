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
        <div className="mb-16 text-center">
          <div className="inline-block border-2 border-foreground/30 px-4 py-1.5 mb-4">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
              Kontakt
            </span>
          </div>
          <h2 className="text-foreground">Redo att börja?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Berätta om ert behov. Vi återkommer med en anpassad lösning.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-foreground/5 translate-x-3 translate-y-3" />
            <div className="relative border border-border bg-card">
              <div className="border-b border-border px-8 py-4 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">Kontaktformulär</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Namn
                    </Label>
                    <Input id="name" {...register("name")} className="bg-background text-base h-11" />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      E-post
                    </Label>
                    <Input id="email" type="email" {...register("email")} className="bg-background text-base h-11" />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Företag
                    </Label>
                    <Input id="company" {...register("company")} className="bg-background text-base h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Intresse
                    </Label>
                    <Select onValueChange={(value) => setValue("interest", value)}>
                      <SelectTrigger className="bg-background text-base h-11">
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

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Meddelande
                  </Label>
                  <Textarea id="message" rows={4} {...register("message")} className="bg-background text-base resize-none" />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Skickar..." : "Skicka meddelande"}
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
