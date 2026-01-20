const stats = [
  { value: "7/10", label: "Kunder föredrar AI" },
  { value: "95%", label: "Ökad noggrannhet" },
  { value: "30%", label: "Sänkta kostnader" },
  { value: "24/7", label: "Support dygnet runt" },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
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
