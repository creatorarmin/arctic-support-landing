import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Customer Service Solutions
            </p>
            
            <h1 className="mb-6 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Better support for your growing business
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              We help companies deliver exceptional customer experiences through 
              smart automation and dedicated support teams. Less waiting, more solving.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                See how it works
              </Button>
            </div>
          </div>

          {/* Right side - Simple visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-card border border-border p-8">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20" />
                      <div className="space-y-1.5">
                        <div className="h-3 w-24 rounded bg-muted" />
                        <div className="h-2 w-16 rounded bg-muted/60" />
                      </div>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="h-2 w-3/4 rounded bg-muted" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 justify-end">
                      <div className="space-y-1.5 text-right">
                        <div className="h-3 w-20 rounded bg-primary/30 ml-auto" />
                        <div className="h-2 w-14 rounded bg-primary/20 ml-auto" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-primary/30" />
                    </div>
                    <div className="rounded-lg bg-primary/10 p-4 ml-8">
                      <div className="h-2 w-3/4 rounded bg-primary/20" />
                      <div className="mt-2 h-2 w-full rounded bg-primary/20" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-background p-3">
                    <div className="h-2 flex-1 rounded bg-muted/40" />
                    <div className="h-8 w-8 rounded bg-primary/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
