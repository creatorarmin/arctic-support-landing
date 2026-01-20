const About = () => {
  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Om oss
            </p>
            <h2 className="mb-6 text-3xl text-foreground sm:text-4xl lg:text-5xl">
              Byggd av människor som förstår service
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vi startade AutoServe för att vi såg hur företag kämpade med samma 
                utmaning: ökande kundförväntningar och begränsade resurser.
              </p>
              <p>
                Vårt team kombinerar decenniers erfarenhet inom kundservice med 
                praktiska tekniklösningar. Vi handlar inte om att ersätta människor – 
                vi handlar om att hjälpa dem göra sitt bästa arbete.
              </p>
              <p>
                Idag arbetar vi med företag i alla storlekar för att skapa 
                supportupplevelser som kunderna verkligen uppskattar.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">2019</div>
              <div className="text-sm text-muted-foreground">Grundat</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">85</div>
              <div className="text-sm text-muted-foreground">Medarbetare</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">12</div>
              <div className="text-sm text-muted-foreground">Länder</div>
            </div>
            <div className="rounded-xl bg-card border border-border p-6">
              <div className="text-2xl font-semibold text-foreground mb-1">500M+</div>
              <div className="text-sm text-muted-foreground">Sparat för kunder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;