import { motion } from "framer-motion";
import { MessageSquare, Zap, BarChart3, Clock, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "AI understands context and intent, handling complex queries with human-like precision.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Eliminate wait times. Customers get accurate answers in milliseconds, 24/7.",
  },
  {
    icon: BarChart3,
    title: "Actionable Analytics",
    description: "Deep insights into customer sentiment, trends, and agent performance.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Go live in minutes, not months. Simple integration with your existing tools.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption. Your data stays protected.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Serve customers in 50+ languages with native-quality translations.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Everything You Need to Scale Support
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to transform your customer experience
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
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
