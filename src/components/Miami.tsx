const highlights = [
  {
    label: "Booming tech scene",
    detail: "One of the fastest-growing startup ecosystems in the US.",
  },
  {
    label: "Latin America gateway",
    detail: "Strategic bridge to the fastest-growing tech talent in LATAM.",
  },
  {
    label: "Global connectivity",
    detail: "International hub connecting North America, Europe and the world.",
  },
  {
    label: "Engineering talent",
    detail: "A growing base of senior engineers, CTOs and tech founders.",
  },
];

export default function Miami() {
  return (
    <section id="miami" className="bg-[#031B2E] relative overflow-hidden">
      {/* Top wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 0 C480 60 960 0 1440 40 L1440 0 Z" fill="#FFF7EA" />
      </svg>

      <div className="py-20 relative">
        {/* Sun glow */}
        <div className="absolute right-[5%] top-[10%] w-72 h-72 rounded-full pointer-events-none sun-pulse"
          style={{ background: "radial-gradient(circle, #FFD18A 0%, #FF6F61 45%, transparent 70%)", opacity: 0.2 }}
        />
        {/* Aqua glow */}
        <div className="absolute left-[-5%] bottom-[5%] w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, #00D5E8 0%, transparent 70%)", opacity: 0.08 }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bridge block */}
          <div className="rounded-3xl p-8 sm:p-12 mb-16 text-center max-w-3xl mx-auto"
            style={{ background: "rgba(0,213,232,0.07)", border: "1px solid rgba(0,213,232,0.2)" }}
          >
            <span className="text-[#FF6F61] text-sm font-bold tracking-widest uppercase mb-3 block">
              Miami as the bridge
            </span>
            <p className="text-white text-lg sm:text-xl leading-relaxed font-medium">
              Miami connects North America, Latin America and the global
              engineering ecosystem — making it the perfect home for a
              community-driven DevOps event.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <span className="text-[#FF6F61] text-sm font-bold tracking-widest uppercase mb-4 block">
                Why Miami
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
                More than a city.{" "}
                <span className="text-[#FF6F61]">A crossroads.</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Miami is becoming a strategic bridge between North America,
                Latin America and the global technology ecosystem. This is not
                just a local event — it&apos;s a regional signal that the
                future of engineering is being built here too.
              </p>
              <a
                href="#waitlist"
                className="gradient-btn-primary text-white font-bold text-base px-8 py-4 rounded-full inline-block"
              >
                Be part of it →
              </a>
            </div>

            {/* Right: highlights */}
            <div className="space-y-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-start gap-4 p-5 rounded-2xl hover:border-[#FF6F61]/40 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF6F61] mt-2 shrink-0" />
                  <div>
                    <p className="text-white font-bold mb-1">{h.label}</p>
                    <p className="text-slate-400 text-sm">{h.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 60 C480 0 960 60 1440 20 L1440 60 Z" fill="#FFF7EA" />
      </svg>
    </section>
  );
}
