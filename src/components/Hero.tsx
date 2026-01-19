import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI-Powered Customer Service</span>
            </motion.div>
            
            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Automate Support.
              <br />
              <span className="text-gradient">Delight Customers.</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Resolve 80% of customer inquiries instantly with intelligent automation. 
              Reduce response times, cut costs, and scale support effortlessly.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16"
            >
              <p className="mb-4 text-sm text-muted-foreground">Trusted by 500+ companies worldwide</p>
              <div className="flex flex-wrap items-center gap-8 opacity-50">
                <div className="text-lg font-semibold text-foreground">Acme Inc</div>
                <div className="text-lg font-semibold text-foreground">TechCorp</div>
                <div className="text-lg font-semibold text-foreground">GlobalFin</div>
                <div className="text-lg font-semibold text-foreground">CloudBase</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
