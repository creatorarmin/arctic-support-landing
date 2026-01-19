import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Channels",
    description: "Integrate with email, chat, social media, and more in just a few clicks.",
  },
  {
    number: "02",
    title: "Train Your AI",
    description: "Upload your knowledge base. Our AI learns your products, policies, and brand voice.",
  },
  {
    number: "03",
    title: "Go Live",
    description: "Launch in minutes. Watch as AI handles inquiries while you focus on growth.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Up and Running in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform your customer service
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8`}
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-xl font-bold text-primary shadow-glow">
                  {step.number}
                </div>

                {/* Content */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
