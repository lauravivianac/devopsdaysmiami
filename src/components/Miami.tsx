const HIGHLIGHTS = [
  { label: "Booming tech scene",    detail: "One of the fastest-growing startup ecosystems in the US." },
  { label: "Latin America gateway", detail: "Strategic bridge to the fastest-growing tech talent in LATAM." },
  { label: "Global connectivity",   detail: "International hub connecting North America, Europe and the world." },
  { label: "Engineering talent",    detail: "A growing base of senior engineers, CTOs and tech founders." },
];

export default function Miami() {
  return (
    <section id="miami" className="py-28 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, #021428 0%, #031d38 50%, #042548 100%)"
    }}>
      {/* Sunset glow right */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 90% 85%, rgba(240,81,62,0.15) 0%, rgba(244,136,74,0.08) 40%, transparent 65%)" }}/>
      {/* Aqua left */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 10% 20%, rgba(0,207,228,0.1) 0%, transparent 65%)" }}/>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Bridge callout */}
        <div className="card-glass rounded-3xl p-8 sm:p-12 mb-20 max-w-3xl mx-auto text-center"
          style={{ borderColor: "rgba(0,207,228,0.2)" }}>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f0513e] bg-[#f0513e]/10 px-3 py-1 rounded-full mb-4">
            Miami as the bridge
          </span>
          <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
            Miami connects North America, Latin America and the global
            engineering ecosystem — making it the perfect home for a
            community-driven DevOps event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f0513e] bg-[#f0513e]/10 px-3 py-1 rounded-full mb-5">
              Why Miami
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              More than a city.{" "}
              <span className="text-grad-warm">A crossroads.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Miami is becoming a strategic bridge between North America,
              Latin America and the global technology ecosystem. This is not
              just a local event — it&apos;s a regional signal that the future
              of engineering is being built here too.
            </p>
            <a href="#waitlist" className="btn-cta inline-flex px-8 py-4 text-base">
              Be part of it →
            </a>
          </div>

          <div className="space-y-3">
            {HIGHLIGHTS.map(h => (
              <div key={h.label} className="card-dark rounded-2xl p-5 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#f0513e] mt-1.5 shrink-0"
                  style={{ boxShadow: "0 0 8px rgba(240,81,62,0.7)" }}/>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{h.label}</p>
                  <p className="text-slate-400 text-sm">{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
