import { Clock, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Snabbare svarstider",
    metric: "−70%",
    description: "Minska genomsnittlig svarstid. Kunder får svar direkt, oavsett kanal.",
  },
  {
    icon: Users,
    title: "Nöjdare kunder",
    metric: "+40%",
    description: "Konsekvent support bygger lojalitet. Mätbar förbättring i NPS och CSAT.",
  },
  {
    icon: TrendingUp,
    title: "Skalbar tillväxt",
    metric: "10×",
    description: "Hantera tio gånger fler ärenden utan proportionell kostnadsökning.",
  },
];

const Features = () => {
  return (
    <section id="losningar" className="py-24 sm:py-32">
      {/* Large decorative number */}
      <div className="container mx-auto px-6 relative">
        <div className="absolute -top-8 -left-4 font-mono text-[12rem] font-bold text-foreground/[0.02] leading-none select-none pointer-events-none hidden lg:block">
          02
        </div>

        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="inline-block border border-border px-3 py-1 mb-4">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                Funktioner
              </span>
            </div>
            <h2 className="text-foreground">
              Mätbara<br />resultat
            </h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed">
            Varje funktion är designad för att ge konkret, mätbar påverkan på er verksamhet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ marginTop: i === 1 ? '2rem' : i === 2 ? '4rem' : '0' }}
            >
              {/* Staggered cards */}
              <div className="border border-border bg-card p-8 transition-all duration-300 hover:elevation-3 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-8">
                  <feature.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono text-[10px] text-muted-foreground/40">
                    0{i + 1}
                  </span>
                </div>
                
                <div className="font-mono text-5xl font-bold text-foreground mb-4 tabular-nums tracking-tighter">
                  {feature.metric}
                </div>
                
                <h3 className="font-mono text-sm font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
