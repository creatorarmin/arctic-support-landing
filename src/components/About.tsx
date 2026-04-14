const About = () => {
  return (
    <section id="om-oss" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block border border-border px-3 py-1 mb-4">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
              Om oss
            </span>
          </div>
          <h2 className="text-foreground">Byggt av praktiker</h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-5 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
            <p>
              Vi startade Kundra för att vi såg hur företag kämpade med samma
              utmaning — ökande kundförväntningar och begränsade resurser.
            </p>
            <p>
              Vårt team kombinerar erfarenhet inom kundservice med
              tekniklösningar. Vi ersätter inte människor, vi gör dem effektivare.
            </p>
          </div>

          {/* Data table */}
          <div className="relative">
            <div className="absolute inset-0 bg-foreground/5 translate-x-3 translate-y-3" />
            <div className="relative border border-border bg-card">
              <div className="border-b border-border px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Systemstatus</span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                  <span className="font-mono text-[10px] text-muted-foreground">Live</span>
                </div>
              </div>
              <div className="divide-y divide-border">
                {[
                  { key: "Konversationer", val: "1,247", delta: "+12%" },
                  { key: "Svarstid", val: "0.8s", delta: "−23%" },
                  { key: "Lösta ärenden", val: "94%", delta: "+5%" },
                  { key: "Aktiva agenter", val: "12", delta: "—" },
                  { key: "Uptime", val: "99.97%", delta: "—" },
                ].map((row) => (
                  <div key={row.key} className="flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors">
                    <span className="text-xs text-muted-foreground">{row.key}</span>
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-sm font-bold text-foreground tabular-nums">{row.val}</span>
                      <span className="font-mono text-[10px] text-muted-foreground tabular-nums w-10 text-right">{row.delta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
