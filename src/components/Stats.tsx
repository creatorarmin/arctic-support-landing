import { useEffect, useRef, useState } from "react";

interface StatItem {
  endValue: number;
  suffix: string;
  label: string;
  startValue?: number;
}

const stats: StatItem[] = [
  { endValue: 7, startValue: 1, suffix: "/10", label: "Kunder föredrar" },
  { endValue: 95, suffix: "%", label: "Noggrannhet" },
  { endValue: 30, suffix: "%", label: "Kostnadsminskning" },
  { endValue: 24, suffix: "/7", label: "Tillgänglighet", startValue: 24 },
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
    <div ref={ref} className="font-mono text-4xl sm:text-5xl font-bold text-foreground tabular-nums tracking-tighter">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 overflow-hidden">
      {/* Marquee strip */}
      <div className="border-y border-border py-4 mb-16">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-12 mr-12">
              {["Automatisering", "Kundservice", "AI-driven", "Skalbart", "Effektivt", "24/7 Support", "Datadriven", "Integration"].map((word) => (
                <span key={`${setIdx}-${word}`} className="font-mono text-xs text-muted-foreground/40 uppercase tracking-[0.3em]">
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <span className="font-mono text-[10px] text-muted-foreground/30 absolute -top-4 left-0">
                0{i + 1}
              </span>
              <AnimatedCounter endValue={stat.endValue} suffix={stat.suffix} startValue={stat.startValue} />
              <div className="mt-2 text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
