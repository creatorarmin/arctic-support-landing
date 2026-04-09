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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
            Därför väljer företag oss
          </p>
          <h2 className="text-foreground">
            Support som faktiskt fungerar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-8 transition-colors duration-200 hover:border-accent/40 elevation-1"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 font-sans text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
