import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  endValue: number;
  prefix?: string;
  suffix: string;
  label: string;
  startValue?: number;
}

const stats: StatItem[] = [
  { endValue: 7, startValue: 1, suffix: "/10", label: "Kunder föredrar AI" },
  { endValue: 95, suffix: "%", label: "Ökad noggrannhet" },
  { endValue: 30, suffix: "%", label: "Sänkta kostnader" },
  { endValue: 24, suffix: "/7", label: "Support dygnet runt", startValue: 24 },
];

const AnimatedCounter = ({ 
  endValue, 
  suffix, 
  startValue = 0, 
  duration = 3500 
}: {
  endValue: number; 
  suffix: string; 
  startValue?: number; 
  duration?: number;
}) => {
  const [count, setCount] = useState(startValue);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const startTime = Date.now();
    const difference = endValue - startValue;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + difference * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, endValue, startValue, duration]);

  return (
    <div ref={ref} className="font-serif text-3xl text-foreground sm:text-4xl tracking-tight">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="gradient-divider" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <AnimatedCounter
                endValue={stat.endValue}
                suffix={stat.suffix}
                startValue={stat.startValue}
              />
              <div className="mt-2 text-sm font-light text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default Stats;
