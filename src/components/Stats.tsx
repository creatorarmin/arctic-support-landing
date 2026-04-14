import { useEffect, useRef, useState } from "react";

interface StatItem {
  endValue: number;
  suffix: string;
  label: string;
  startValue?: number;
}

const stats: StatItem[] = [
  { endValue: 7, startValue: 1, suffix: "/10", label: "kunder_föredrar" },
  { endValue: 95, suffix: "%", label: "noggrannhet" },
  { endValue: 30, suffix: "%", label: "kostnadsminskning" },
  { endValue: 24, suffix: "/7", label: "tillgänglighet", startValue: 24 },
];

const AnimatedCounter = ({ endValue, suffix, startValue = 0, duration = 2500 }: {
  endValue: number; suffix: string; startValue?: number; duration?: number;
}) => {
  const [count, setCount] = useState(startValue);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated || !ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasAnimated(true);
        const start = Date.now();
        const diff = endValue - startValue;
        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(startValue + diff * ease));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, endValue, startValue, duration]);

  return (
    <div ref={ref} className="font-mono text-2xl font-bold text-foreground tabular-nums">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-12">
      <div className="gradient-divider" />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} startValue={stat.startValue} />
              <div className="mt-1 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="gradient-divider" />
    </section>
  );
};

export default Stats;
