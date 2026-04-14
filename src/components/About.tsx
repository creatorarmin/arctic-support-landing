const About = () => {
  return (
    <section id="om-oss" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="mb-3 font-mono text-xs text-muted-foreground tracking-wider">
              // om_oss
            </p>
            <h2 className="mb-5 text-foreground">
              Byggt av praktiker
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Vi startade Kundra för att vi såg hur företag kämpade med samma 
                utmaning: ökande kundförväntningar och begränsade resurser.
              </p>
              <p>
                Vårt team kombinerar erfarenhet inom kundservice med 
                tekniklösningar. Vi ersätter inte människor — vi gör dem effektivare.
              </p>
              <p>
                Idag arbetar vi med företag i alla storlekar.
              </p>
            </div>
          </div>
          
          {/* Data display */}
          <div className="border border-border">
            <div className="border-b border-border px-4 py-2">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">system_status</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { key: "konversationer", val: "1,247", delta: "+12%" },
                { key: "svarstid", val: "0.8s", delta: "-23%" },
                { key: "lösta_ärenden", val: "94%", delta: "+5%" },
                { key: "aktiva_agenter", val: "12", delta: "—" },
                { key: "uptime", val: "99.97%", delta: "—" },
              ].map((row) => (
                <div key={row.key} className="flex items-center justify-between px-4 py-3">
                  <span className="font-mono text-xs text-muted-foreground">{row.key}</span>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-semibold text-foreground tabular-nums">{row.val}</span>
                    <span className="font-mono text-[10px] text-muted-foreground tabular-nums w-8 text-right">{row.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
