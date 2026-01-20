import { Target, TrendingDown, Smile, Clock } from "lucide-react";

const stats = [
  { icon: Target, label: "Ökad noggrannhet" },
  { icon: TrendingDown, label: "Sänkta kostnader" },
  { icon: Smile, label: "Förbättrad kundupplevelse" },
  { icon: Clock, label: "Support dygnet runt" },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center">
                <stat.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
