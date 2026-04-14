import { Clock, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Clock,
    title: "Snabbare svarstider",
    prefix: "−",
    value: 70,
    suffix: "%",
    duration: 1800,
    description: "Minska genomsnittlig svarstid. Kunder får svar direkt, oavsett kanal.",
  },
  {
    icon: Users,
    title: "Nöjdare kunder",
    prefix: "+",
    value: 40,
    suffix: "%",
    duration: 2400,
    description: "Konsekvent support bygger lojalitet. Mätbar förbättring i NPS och CSAT.",
  },
  {
    icon: TrendingUp,
    title: "Skalbar tillväxt",
    prefix: "",
    value: 10,
    suffix: "×",
    duration: 3000,
    description: "Hantera tio gånger fler ärenden utan proportionell kostnadsökning.",
  },
];

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (current >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
};

const Features = () => {
  return (
    <section id="losningar" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block border border-border px-3 py-1 mb-4">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Funktioner
            </span>
          </div>
          <h2 className="text-foreground">Mätbara resultat</h2>
          <p className="mt-4 text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Varje funktion är designad för att ge konkret, mätbar påverkan på er verksamhet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const { count, ref } = useCountUp(feature.value, 2200);
            return (
              <div
                key={feature.title}
                ref={ref}
                className="group border border-border bg-card p-8 transition-all duration-300 hover:elevation-3 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-8">
                  <feature.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="font-mono text-[10px] text-muted-foreground/40">
                    0{i + 1}
                  </span>
                </div>

                <div className="font-mono text-5xl font-bold text-foreground mb-4 tabular-nums tracking-tighter">
                  {feature.prefix}{count}{feature.suffix}
                </div>

                <h3 className="font-mono text-sm font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
