import { Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Snabbare svarstider",
    description: "Minska genomsnittlig svarstid med 70%. Era kunder får snabba svar, oavsett om det är genom automatisering eller ert team.",
    metric: "70%",
    metricLabel: "snabbare",
  },
  {
    icon: Users,
    title: "Nöjdare kunder",
    description: "Konsekvent och hjälpsam support bygger lojalitet. Våra kunder ser i snitt 40% högre kundnöjdhet.",
    metric: "40%",
    metricLabel: "nöjdare",
  },
  {
    icon: TrendingUp,
    title: "Skala enkelt",
    description: "Hantera tio gånger fler ärenden utan tio gånger högre kostnader. Väx smart och hållbart.",
    metric: "10x",
    metricLabel: "kapacitet",
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

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative rounded-2xl border border-white/[0.06] bg-card/60 backdrop-blur-sm p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-card/80 h-full">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Metric badge */}
                <div className="mb-6 flex items-end justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.06]">
                    <feature.icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-foreground">{feature.metric}</span>
                    <p className="text-xs text-muted-foreground">{feature.metricLabel}</p>
                  </div>
                </div>
                
                <h3 className="mb-3 text-xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
