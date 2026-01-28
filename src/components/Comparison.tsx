import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutItems = [
  "Långa köer",
  "Missade mejl",
  "Stressad personal",
];

const withItems = [
  "Direkt svar",
  "Automatiskt bokad demo",
  "Nöjda kunder",
];

const Comparison = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Without Kundra */}
          <motion.div
            className="relative rounded-2xl border border-border bg-card p-8 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-destructive/5" />
            <div className="relative">
              <h3 className="text-xl font-medium text-muted-foreground mb-6">
                Utan Kundra
              </h3>
              <ul className="space-y-4">
                {withoutItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                      <X className="h-3.5 w-3.5 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* With Kundra */}
          <motion.div
            className="relative rounded-2xl border border-primary/30 bg-card p-8 overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute inset-0 bg-primary/5" />
            <div className="relative">
              <h3 className="text-xl font-medium text-foreground mb-6">
                Med Kundra
              </h3>
              <ul className="space-y-4">
                {withItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
