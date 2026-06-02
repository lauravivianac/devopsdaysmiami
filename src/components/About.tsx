const STATS = [
  { value: "2",      suffix: " days",  sub: "talks · ignites · open spaces" },
  { value: "Open",   suffix: " CFP",   sub: "practitioner-led sessions"      },
  { value: "LATAM",  suffix: " + US",  sub: "cross-regional community"       },
  { value: "100%",   suffix: "",        sub: "community spirit, zero fluff"  },
];

export default function About() {
  return (
    <section id="about" className="py-32" style={{ background:"#080f1e" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="section-rule" />
          <span className="label">About the event</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">

          {/* Copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-tight mb-8" style={{ color:"var(--text-1)" }}>
              Engineering community.{" "}
              <span className="grad-cyan">Real conversations.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color:"var(--text-2)" }}>
              DevOpsDays Miami will bring together engineers, platform teams, cloud leaders,
              SREs, DevOps practitioners, architects, startups, enterprises and technology
              partners to explore the future of software delivery.
            </p>
            <p className="text-base leading-relaxed" style={{ color:"var(--text-3)" }}>
              Rooted in the global DevOpsDays tradition — open, community-led, practitioner-focused.
              No vendor pitches. No fluff. Just real teams sharing real stories.
            </p>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map(s => (
              <div key={s.sub} className="card p-6">
                <div className="font-black mb-2" style={{ fontSize:28, color:"var(--text-1)", lineHeight:1 }}>
                  {s.value}
                  <span className="grad-cyan text-lg">{s.suffix}</span>
                </div>
                <p className="text-xs" style={{ color:"var(--text-3)" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
