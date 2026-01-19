import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-12 text-center sm:p-16"
        >

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Ready to Transform Your Support?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Join hundreds of companies delivering exceptional customer experiences with AI automation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Talk to Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required • 14-day free trial
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
