import { Clock, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "svarstid",
    metric: "-70%",
    description: "Minska genomsnittlig svarstid. Kunder får svar direkt, oavsett kanal.",
  },
  {
    icon: Users,
    title: "kundnöjdhet",
    metric: "+40%",
    description: "Konsekvent support bygger lojalitet. Mätbar förbättring i NPS och CSAT.",
  },
  {
    icon: TrendingUp,
    title: "skalbarhet",
    metric: "10x",
    description: "Hantera tio gånger fler ärenden utan proportionell kostnadsökning.",
  },
];

const Features = () => {
  return (
    <section id="losningar" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs text-muted-foreground tracking-wider">
            // funktioner
          </p>
          <h2 className="text-foreground">
            Mätbara resultat
          </h2>
        </div>

        <div className="grid gap-px md:grid-cols-3 border border-border">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-card p-8 ${i < 2 ? "md:border-r md:border-border" : ""}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <feature.icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {feature.title}
                </span>
              </div>
              <div className="font-mono text-3xl font-bold text-foreground mb-3 tabular-nums">
                {feature.metric}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
