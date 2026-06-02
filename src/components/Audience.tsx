const ROWS = [
  { icon: "⚙️", title: "Platform Engineers",   desc: "Building internal developer platforms, golden paths and enabling engineering at scale." },
  { icon: "🔁", title: "DevOps & SRE Teams",   desc: "Owning reliability, CI/CD pipelines, incident response and operational excellence." },
  { icon: "☁️", title: "Cloud Architects",      desc: "Designing scalable, cost-efficient multi-cloud and cloud-native infrastructures." },
  { icon: "🧭", title: "Engineering Leaders",   desc: "CTOs, VPs and Directors shaping engineering culture, strategy and delivery." },
  { icon: "🤖", title: "AI / Automation Teams", desc: "Applying AI to software delivery, ops automation and intelligent tooling." },
  { icon: "🤝", title: "Sponsors & Partners",   desc: "Connecting brands with a highly technical, influential and growing community." },
];

export default function Audience() {
  return (
    <section className="py-28" style={{ background: "#010e1e" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/35">Who&apos;s coming</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Built for the people <span className="text-grad-hero">who build things.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-xl overflow-hidden">
          {ROWS.map(item => (
            <div key={item.title}
              className="bg-[#010e1e] p-7 hover:bg-[#031d36] transition-colors group">
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#38d9f0] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#4a6880] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
