const DATA = [
  { stat: "#3",    desc: "Largest tech ecosystem in the US" },
  { stat: "50+",   desc: "Countries in Miami's engineering community" },
  { stat: "4×",    desc: "Tech job growth over the last 5 years" },
  { stat: "LATAM", desc: "Gateway to the fastest-growing engineering talent" },
];

export default function Miami() {
  return (
    <section id="miami" className="py-24" style={{ background: "#FFF8F2" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule-coral" />
          <span className="label" style={{ color: "#FF8A6B" }}>Why Miami</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-tight mb-7" style={{ color: "#071A3A" }}>
            Miami is the bridge<br />
            <span className="grad-coral">the tech world needed.</span>
          </h2>
          <p className="text-xl leading-relaxed" style={{ color: "rgba(7,26,58,0.65)" }}>
            Miami connects North America, Latin America and the global engineering ecosystem.
            It&apos;s not just a location — it&apos;s a strategic signal that the future
            of software delivery is being built right here.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {DATA.map(d => (
            <div key={d.stat} className="card-light p-8 text-center">
              <div className="font-black mb-2 grad-aqua-coral" style={{ fontSize: 36, lineHeight: 1 }}>
                {d.stat}
              </div>
              <p className="text-sm leading-snug" style={{ color: "rgba(7,26,58,0.50)" }}>{d.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8"
          style={{ borderTop: "1.5px solid rgba(255,138,107,0.20)" }}>
          <p className="text-base font-medium" style={{ color: "rgba(7,26,58,0.55)" }}>
            Ready to be part of the first DevOpsDays in Miami?
          </p>
          <a href="#waitlist" className="btn btn-primary shrink-0">
            Join the waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
