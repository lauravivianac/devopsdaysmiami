const HIGHLIGHTS = [
  { label: "Booming tech scene",      detail: "One of the fastest-growing startup ecosystems in the US." },
  { label: "Latin America gateway",   detail: "Strategic bridge to the fastest-growing tech talent in LATAM." },
  { label: "Global connectivity",     detail: "International hub connecting North America, Europe and the world." },
  { label: "Engineering talent",      detail: "A growing base of senior engineers, CTOs and tech founders." },
];

export default function Miami() {
  return (
    <section id="miami" className="py-28 relative overflow-hidden" style={{ background: "#040f1c" }}>

      {/* Warm sunset glow */}
      <div
        className="absolute right-0 bottom-0 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 80%, rgba(244,146,74,0.09) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Bridge callout */}
        <div
          className="glass rounded-2xl p-8 sm:p-10 mb-20 max-w-3xl mx-auto text-center"
          style={{ borderColor: "rgba(0,200,224,0.18)" }}
        >
          <p className="text-[#f05c4a] text-xs font-bold tracking-widest uppercase mb-3">
            Miami as the bridge
          </p>
          <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
            Miami connects North America, Latin America and the global
            engineering ecosystem — making it the perfect home for a
            community-driven DevOps event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#f05c4a] text-xs font-bold tracking-widest uppercase mb-4">
              Why Miami
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              More than a city.{" "}
              <span className="text-[#f05c4a]">A crossroads.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Miami is becoming a strategic bridge between North America,
              Latin America and the global technology ecosystem. This is not
              just a local event — it&apos;s a regional signal that the
              future of engineering is being built here too.
            </p>
            <a
              href="#waitlist"
              className="btn-primary inline-block px-8 py-4 text-base"
            >
              <span>Be part of it →</span>
            </a>
          </div>

          <div className="space-y-3">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="card-premium flex items-start gap-4 rounded-2xl p-5"
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                  style={{ background: "#f05c4a", boxShadow: "0 0 8px rgba(240,92,74,0.6)" }}
                />
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{h.label}</p>
                  <p className="text-slate-500 text-sm">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
