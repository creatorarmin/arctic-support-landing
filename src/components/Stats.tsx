const stats = [
  { value: "500+", label: "Companies served" },
  { value: "2M+", label: "Conversations handled monthly" },
  { value: "94%", label: "Customer satisfaction" },
  { value: "24/7", label: "Support availability" },
];

const Stats = () => {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold text-foreground sm:text-4xl">
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
