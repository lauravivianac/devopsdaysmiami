const DATA = [
  { stat: "#3",     desc: "Largest tech ecosystem in the US" },
  { stat: "50+",    desc: "Countries in Miami's engineering community" },
  { stat: "4×",     desc: "Tech job growth over the last 5 years" },
  { stat: "LATAM",  desc: "Gateway to the fastest-growing engineering talent" },
];

export default function Miami() {
  return (
    <section id="miami" className="py-32" style={{ background:"#050d18" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label">Why Miami</span>
        </div>

        {/* Headline + bridge statement */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-tight mb-7" style={{ color:"var(--text-1)" }}>
            Miami is the bridge<br />
            <span className="grad-coral">the tech world needed.</span>
          </h2>
          <p className="text-xl leading-relaxed" style={{ color:"var(--text-2)" }}>
            Miami connects North America, Latin America and the global engineering ecosystem.
            It&apos;s not just a location — it&apos;s a strategic signal that the future
            of software delivery is being built right here.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {DATA.map(d => (
            <div key={d.stat} className="card p-8">
              <div className="font-black mb-3 grad-cyan" style={{ fontSize:36, lineHeight:1 }}>
                {d.stat}
              </div>
              <p className="text-sm leading-snug" style={{ color:"var(--text-3)" }}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10"
          style={{ borderTop:"1px solid var(--border)" }}>
          <p className="text-base" style={{ color:"var(--text-3)" }}>
            Ready to be part of the first DevOpsDays in Miami?
          </p>
          <a href="#waitlist" className="btn btn-outline shrink-0">
            Join the waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
