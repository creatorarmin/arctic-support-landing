const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About us
            </p>
            <h2 className="mb-6 text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Built by people who understand service
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started AutoServe because we saw businesses struggling with the same 
                problem: growing customer expectations and limited resources.
              </p>
              <p>
                Our team combines decades of customer service experience with practical 
                technology solutions. We're not about replacing people—we're about 
                helping them do their best work.
              </p>
              <p>
                Today, we work with companies of all sizes to create support experiences 
                that customers actually appreciate.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">2019</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">85</div>
              <div className="text-sm text-muted-foreground">Team members</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">12</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">$50M+</div>
              <div className="text-sm text-muted-foreground">Saved for clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
