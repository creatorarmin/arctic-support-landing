import { Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Därför väljer företag oss
          </p>
          <h2 className="text-foreground">
            Support som faktiskt fungerar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-muted-foreground/20 hover:bg-secondary/20 elevation-1 hover:elevation-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary border border-border/50">
                <feature.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h3 className="mb-3 font-sans text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
