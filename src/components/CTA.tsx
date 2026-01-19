import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-border bg-card p-12 text-center sm:p-16">
          <h2 className="mb-4 text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Ready to improve your support?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Let's discuss how we can help your team deliver better customer experiences.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Schedule a call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              View case studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
