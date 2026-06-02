const POINTS = [
  { stat: "3rd",   desc: "Largest tech ecosystem in the US by VC investment" },
  { stat: "LATAM", desc: "Gateway to the fastest-growing engineering talent in the Americas" },
  { stat: "50+",   desc: "Countries represented in Miami's tech community" },
  { stat: "4x",    desc: "Growth in tech jobs over the last five years" },
];

export default function Miami() {
  return (
    <section id="miami" className="py-28" style={{ background: "#010e1e" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/35">Why Miami</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        {/* Bridge statement */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-white leading-tight mb-6">
            Miami is the bridge<br />
            <span className="text-grad-coral">the tech world needed.</span>
          </h2>
          <p className="text-[#4a6880] text-xl leading-relaxed">
            Miami connects North America, Latin America and the global engineering ecosystem.
            It&apos;s not just a location — it&apos;s a strategic signal that the future of
            software delivery is being built right here.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {POINTS.map(p => (
            <div key={p.stat} className="card-navy rounded-xl p-7">
              <div className="text-3xl font-black text-[#38d9f0] mb-3">{p.stat}</div>
              <p className="text-[#4a6880] text-sm leading-snug">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-8 border-t border-white/8">
          <p className="text-white/70 text-base flex-1">
            Ready to be part of the first DevOpsDays in Miami?
          </p>
          <a href="#waitlist" className="btn-dark text-sm px-7 py-3 shrink-0">
            Join the waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
