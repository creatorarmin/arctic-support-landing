import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "start",
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
    name: "pro",
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
    name: "enterprise",
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
    <section id="priser" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs text-muted-foreground tracking-wider">
            // priser
          </p>
          <h2 className="text-foreground">
            Tydlig prissättning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px border border-border">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`bg-card p-8 flex flex-col ${i < 2 ? "md:border-r md:border-border" : ""}`}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-mono text-sm font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="font-mono text-[10px] text-muted-foreground border border-border px-1.5 py-0.5">
                      rec
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-2xl font-bold text-foreground tabular-nums">
                    {plan.price}
                  </span>
                  {plan.price !== "Offert" && (
                    <span className="text-xs text-muted-foreground">kr/mån</span>
                  )}
                </div>
              </div>

              <div className="gradient-divider mb-6" />

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="font-mono text-xs text-muted-foreground/50">—</span>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full font-mono text-xs"
                variant={plan.popular ? "default" : "outline"}
                size="sm"
              >
                {plan.price === "Offert" ? "kontakt" : "kom_igång"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
