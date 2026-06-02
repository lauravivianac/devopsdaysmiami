const highlights = [
  {
    label: "Booming tech scene",
    detail: "One of the fastest-growing startup ecosystems in the US",
  },
  {
    label: "Latin America gateway",
    detail: "Strategic bridge to the fastest-growing tech talent in LATAM",
  },
  {
    label: "Global connectivity",
    detail: "International hub connecting North America, Europe and the world",
  },
  {
    label: "Engineering talent",
    detail: "A growing base of senior engineers, CTOs and tech founders",
  },
];

export default function Miami() {
  return (
    <section id="miami" className="py-24 relative overflow-hidden">
      {/* Miami-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050d1a] via-[#0d1f3c] to-[#050d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff6b6b]/30 to-transparent" />

      {/* Background blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-[#ff6b6b]/10 via-[#7c3aed]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#ff6b6b] text-sm font-semibold tracking-widest uppercase mb-4 block">
              Why Miami
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              More than a city.{" "}
              <span className="text-[#ff6b6b]">A crossroads.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Miami is becoming a strategic bridge between North America, Latin
              America and the global technology ecosystem. This is not just a
              local event — it&apos;s a regional signal that the future of
              engineering is being built here too.
            </p>
            <a href="#waitlist" className="btn-primary text-white font-bold text-base px-8 py-4 rounded-full inline-block">
              Be part of it →
            </a>
          </div>

          {/* Right: highlights */}
          <div className="space-y-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-4 p-5 card-glass rounded-2xl hover:border-[#ff6b6b]/30 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff6b6b] mt-2 shrink-0" />
                <div>
                  <p className="text-white font-bold mb-1">{h.label}</p>
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
