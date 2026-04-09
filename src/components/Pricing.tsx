import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Start",
    price: "490",
    description: "Perfekt för mindre team som vill komma igång med automatisering",
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
    <section id="priser" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
            Priser
          </p>
          <h2 className="text-foreground mb-4">
            Enkla och tydliga priser
          </h2>
          <p className="text-muted-foreground text-lg">
            Välj den plan som passar ert företag. Inga dolda avgifter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 flex flex-col transition-colors duration-200 ${
                plan.popular
                  ? "border-accent bg-card elevation-2"
                  : "border-border bg-card hover:border-accent/40 elevation-1"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Mest populär
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "Offert" && (
                    <span className="text-muted-foreground text-sm"> kr/mån</span>
                  )}
                </div>
              </div>

              <div className="gradient-divider mb-8" />

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full mt-auto"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Offert" ? "Kontakta oss" : "Kom igång"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
