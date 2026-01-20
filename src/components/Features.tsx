import { Clock, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Snabbare svarstider",
    description: "Minska genomsnittlig svarstid med 70%. Era kunder får snabba svar, oavsett om det är genom automatisering eller ert team.",
  },
  {
    icon: Users,
    title: "Nöjdare kunder",
    description: "Konsekvent och hjälpsam support bygger lojalitet. Våra kunder ser i snitt 40% högre kundnöjdhet.",
  },
  {
    icon: TrendingUp,
    title: "Skala enkelt",
    description: "Hantera tio gånger fler ärenden utan tio gånger högre kostnader. Väx smart och hållbart.",
  },
];

const Features = () => {
  return (
    <section id="losningar" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Därför väljer företag oss
          </p>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Support som faktiskt fungerar
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:bg-secondary/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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