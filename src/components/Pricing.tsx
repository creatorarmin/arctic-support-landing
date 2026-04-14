import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Start",
    price: "490",
    description: "Mindre team, grundläggande automatisering",
    features: [
      "500 konversationer/mån",
      "Mailsupport",
      "Grundläggande statistik",
      "2 användare",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "1 490",
    description: "Växande företag, högre volym",
    features: [
      "5 000 konversationer/mån",
      "Prioriterad support",
      "Avancerad analys",
      "10 användare",
      "Alla integrationer",
      "Anpassade flöden",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Offert",
    description: "Skräddarsytt för större verksamheter",
    features: [
      "Obegränsade konversationer",
      "Dedikerad kontakt",
      "API-åtkomst",
      "SLA-garanti",
      "On-premise",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="priser" className="py-24 sm:py-32 relative">
      <div className="absolute top-12 left-8 font-mono text-[12rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none hidden lg:block">
        04
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-block border border-border px-3 py-1 mb-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                Priser
              </span>
            </div>
            <h2 className="text-foreground">
              Tydlig<br />prissättning
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            Inga dolda avgifter. Skala upp eller ner efter behov.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative group border bg-card p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:elevation-3 ${
                plan.popular ? "border-foreground" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-foreground" />
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-sm font-bold text-foreground uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-[10px] text-muted-foreground border border-foreground/20 px-2 py-0.5 uppercase tracking-wider">
                      Populär
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground tabular-nums tracking-tighter">
                    {plan.price}
                  </span>
                  {plan.price !== "Offert" && (
                    <span className="text-xs text-muted-foreground ml-1">kr/mån</span>
                  )}
                </div>
              </div>

              <div className="gradient-divider mb-6" />

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-foreground/30 shrink-0" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full text-xs"
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
