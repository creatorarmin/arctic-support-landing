import { Clock, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Faster response times",
    description: "Reduce average response time by 70%. Customers get answers quickly, whether through automation or your team.",
  },
  {
    icon: Users,
    title: "Happier customers",
    description: "Consistent, helpful support builds loyalty. Our clients see a 40% improvement in satisfaction scores.",
  },
  {
    icon: TrendingUp,
    title: "Scale with ease",
    description: "Handle 10x more inquiries without 10x the cost. Grow your support capacity intelligently.",
  },
];

const Features = () => {
  return (
    <section id="solutions" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Why companies choose us
          </p>
          <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Support that actually works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:bg-secondary/30"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
