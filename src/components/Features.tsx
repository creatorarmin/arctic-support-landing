import { Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Snabbare svarstider",
    description: "Minska genomsnittlig svarstid med 70%. Era kunder får snabba svar, oavsett om det är genom automatisering eller ert team.",
    accent: "70%",
  },
  {
    icon: Users,
    title: "Nöjdare kunder",
    description: "Konsekvent och hjälpsam support bygger lojalitet. Våra kunder ser i snitt 40% högre kundnöjdhet.",
    accent: "40%",
  },
  {
    icon: TrendingUp,
    title: "Skala enkelt",
    description: "Hantera tio gånger fler ärenden utan tio gånger högre kostnader. Väx smart och hållbart.",
    accent: "10x",
  },
];

const Features = () => {
  return (
    <section id="losningar" className="py-28 sm:py-36 relative">
      <div className="container mx-auto px-6">
        {/* Asymmetric header - left aligned */}
        <div className="max-w-lg mb-20">
          <h2 className="text-foreground mb-5">
            Support som <br />
            <span className="italic font-normal text-muted-foreground/60">faktiskt fungerar</span>
          </h2>
          <p className="text-muted-foreground font-light">
            Därför väljer företag oss
          </p>
        </div>

        {/* Stacked feature blocks instead of uniform cards */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center rounded-2xl border border-border/40 bg-card/30 p-8 md:p-10 transition-all duration-500 hover:bg-card/60 hover:border-border/60"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/60 border border-border/30 shrink-0">
                <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-500" />
              </div>
              
              <div>
                <h3 className="font-sans text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>

              <div className="font-serif text-4xl md:text-5xl text-muted-foreground/15 group-hover:text-muted-foreground/25 transition-colors duration-500 tracking-tight">
                {feature.accent}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
