import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small teams getting started with automation",
    features: [
      "Up to 500 conversations/month",
      "Email support",
      "Basic analytics",
      "2 team members",
      "Standard integrations",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "149",
    description: "For growing businesses with higher volume needs",
    features: [
      "Up to 5,000 conversations/month",
      "Priority support",
      "Advanced analytics",
      "10 team members",
      "All integrations",
      "Custom workflows",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale operations",
    features: [
      "Unlimited conversations",
      "Dedicated account manager",
      "Custom reporting",
      "Unlimited team members",
      "API access",
      "SLA guarantee",
      "On-premise option",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your business needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-8 ${
                plan.popular
                  ? "border-primary bg-card"
                  : "border-border bg-card/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground text-lg">$</span>
                  )}
                  <span className="font-serif text-4xl text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
