const AUDIENCE = [
  { icon: "⚙️", title: "Platform Engineers",    desc: "Building internal developer platforms, golden paths and enabling engineering at scale." },
  { icon: "🔁", title: "DevOps & SRE Teams",    desc: "Owning reliability, CI/CD pipelines, incident response and operational excellence." },
  { icon: "☁️", title: "Cloud Architects",       desc: "Designing scalable, cost-efficient multi-cloud and cloud-native infrastructures." },
  { icon: "🧭", title: "Engineering Leaders",    desc: "CTOs, VPs and Directors shaping engineering culture, strategy and delivery." },
  { icon: "🤖", title: "AI / Automation Teams",  desc: "Applying AI to software delivery, ops automation and intelligent tooling." },
  { icon: "🤝", title: "Sponsors & Partners",    desc: "Connecting brands with a highly technical, influential and growing community." },
];

export default function Audience() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#040f1c" }}>
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#f05c4a] text-xs font-bold tracking-widest uppercase mb-4">
            Who&apos;s coming
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Built for the people{" "}
            <span className="text-gradient-hero">who build things</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE.map((item) => (
            <div key={item.title} className="card-premium rounded-2xl p-7">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: "rgba(0,200,224,0.1)", border: "1px solid rgba(0,200,224,0.15)" }}
              >
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
