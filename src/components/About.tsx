const STATS = [
  { value: "2-day",  label: "Community Event",  color: "#00cfe4" },
  { value: "Open",   label: "Call for Papers",   color: "#f0513e" },
  { value: "Global", label: "Network",            color: "#0558a0" },
  { value: "Free",   label: "Community Spirit",  color: "#f5c340" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#fdf8f3] relative overflow-hidden">
      {/* Decorative dot grid */}
      <div className="absolute inset-0 dot-grid-light opacity-60"/>
      {/* Top warm gradient edge */}
      <div className="absolute top-0 inset-x-0 h-1" style={{
        background: "linear-gradient(90deg, transparent, #00cfe4 40%, #f0513e 70%, transparent)"
      }}/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0558a0] bg-[#0558a0]/8 px-3 py-1 rounded-full mb-5">
              About the event
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#020e1c] mb-6 leading-tight">
              Engineering community.{" "}
              <span className="text-grad-aqua">Real conversations.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              DevOpsDays Miami will bring together engineers, platform teams,
              cloud leaders, SREs, DevOps practitioners, architects, startups,
              enterprises and technology partners to explore the future of
              software delivery.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Rooted in the global DevOpsDays tradition — open, community-led,
              practitioner-focused. Not a vendor conference. A space where real
              teams share real stories.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map(s => (
              <div key={s.label} className="card-light rounded-2xl p-7">
                <div className="text-3xl font-black mb-1.5" style={{ color: s.color }}>{s.value}</div>
                <div className="text-slate-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
