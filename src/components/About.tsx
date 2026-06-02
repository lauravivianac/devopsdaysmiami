const stats = [
  { value: "2-day", label: "Community Event" },
  { value: "Open", label: "Call for Papers" },
  { value: "Tech", label: "Community Driven" },
  { value: "Global", label: "Network" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About the event
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Engineering community.{" "}
              <span className="gradient-text">Real conversations.</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              DevOpsDays Miami will bring together engineers, platform teams,
              cloud leaders, SREs, DevOps practitioners, architects, startups,
              enterprises and technology partners to explore the future of
              software delivery.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Rooted in the global DevOpsDays tradition — open, community-led,
              practitioner-focused — this is not a vendor conference. It&apos;s
              a space where real teams share real stories.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-glass rounded-2xl p-6">
                <div className="text-3xl font-black text-[#00d4ff] mb-1">
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
