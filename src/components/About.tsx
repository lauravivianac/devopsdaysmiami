const stats = [
  { value: "2-day", label: "Community Event" },
  { value: "Open", label: "Call for Papers" },
  { value: "Free", label: "Community Spirit" },
  { value: "Global", label: "Network" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FFF7EA] relative overflow-hidden">
      {/* Decorative aqua wave top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D5E8] to-transparent opacity-60" />

      {/* Subtle palm / tropical abstract SVG */}
      <svg className="absolute right-0 top-0 h-full opacity-[0.04] pointer-events-none" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="350" cy="100" rx="120" ry="40" fill="#0067B1" transform="rotate(-30 350 100)" />
        <ellipse cx="350" cy="100" rx="100" ry="35" fill="#00D5E8" transform="rotate(15 350 100)" />
        <ellipse cx="350" cy="100" rx="110" ry="38" fill="#031B2E" transform="rotate(-60 350 100)" />
        <rect x="340" y="100" width="12" height="300" rx="6" fill="#0067B1" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#0067B1] text-sm font-bold tracking-widest uppercase mb-4 block">
              About the event
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#031B2E] mb-6 leading-tight">
              Engineering community.{" "}
              <span className="gradient-text-aqua">Real conversations.</span>
            </h2>
            <p className="text-[#031B2E]/75 text-lg leading-relaxed mb-6">
              DevOpsDays Miami will bring together engineers, platform teams,
              cloud leaders, SREs, DevOps practitioners, architects, startups,
              enterprises and technology partners to explore the future of
              software delivery.
            </p>
            <p className="text-[#031B2E]/55 leading-relaxed">
              Rooted in the global DevOpsDays tradition — open, community-led,
              practitioner-focused — this is not a vendor conference. It&apos;s
              a space where real teams share real stories.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-cream rounded-2xl p-6">
                <div className="text-3xl font-black text-[#0067B1] mb-1">{s.value}</div>
                <div className="text-[#031B2E]/60 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
