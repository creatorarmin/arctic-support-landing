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
    <div ref={ref} className="text-4xl font-bold text-foreground sm:text-5xl font-serif">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)]" />
      
      {/* Top and bottom borders with gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative text-center py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Vertical divider (not on first item) */}
              {index > 0 && (
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
              )}
              
              <AnimatedCounter
                endValue={stat.endValue}
                suffix={stat.suffix}
                startValue={stat.startValue}
              />
              <div className="mt-3 text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
