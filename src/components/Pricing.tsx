import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Start",
    price: "490",
    description: "Perfekt för mindre team som vill komma igång",
    features: [
      "Upp till 500 konversationer/månad",
      "Mailsupport",
      "Grundläggande statistik",
      "2 teammedlemmar",
      "Standardintegrationer",
    ],
    popular: false,
  },
  {
    name: "Professionell",
    price: "1 490",
    description: "För växande företag med högre volym",
    features: [
      "Upp till 5 000 konversationer/månad",
      "Prioriterad support",
      "Avancerad analys",
      "10 teammedlemmar",
      "Alla integrationer",
      "Anpassade arbetsflöden",
    ],
    popular: true,
  },
  {
    name: "Företag",
    price: "Offert",
    description: "Skräddarsydda lösningar för större verksamheter",
    features: [
      "Obegränsat antal konversationer",
      "Dedikerad kontaktperson",
      "Anpassad rapportering",
      "Obegränsat antal användare",
      "API-åtkomst",
      "SLA-garanti",
      "On-premise möjlighet",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="priser" className="py-28 sm:py-36 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mb-20">
          <h2 className="text-foreground mb-4">
            Enkla priser,<br />
            <span className="italic font-normal text-muted-foreground/60">inga överraskningar</span>
          </h2>
          <p className="text-muted-foreground font-light">
            Välj den plan som passar ert företag.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-8 lg:p-10 transition-all duration-500 flex flex-col ${
                plan.popular
                  ? "border-foreground/15 bg-card elevation-2 scale-[1.02]"
                  : "border-border/40 bg-card/30 hover:border-border/60 hover:bg-card/50"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 bg-foreground text-background text-xs font-medium px-4 py-1 rounded-full">
                  Mest populär
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-sans text-base font-semibold text-foreground mb-2 tracking-wide">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "Offert" && (
                    <span className="text-muted-foreground text-sm font-light ml-1">kr/mån</span>
                  )}
                </div>
              </div>

              <div className="organic-divider mb-8" />

              <ul className="space-y-3.5 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Offert" ? "Kontakta oss" : "Kom igång"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
