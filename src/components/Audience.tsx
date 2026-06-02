const AUDIENCE = [
  { icon: "⚙️", title: "Platform Engineers",   desc: "Building internal developer platforms, golden paths and enabling engineering at scale.", accent: "#00cfe4" },
  { icon: "🔁", title: "DevOps & SRE Teams",   desc: "Owning reliability, CI/CD pipelines, incident response and operational excellence.",    accent: "#f5c340" },
  { icon: "☁️", title: "Cloud Architects",      desc: "Designing scalable, cost-efficient multi-cloud and cloud-native infrastructures.",       accent: "#0558a0" },
  { icon: "🧭", title: "Engineering Leaders",   desc: "CTOs, VPs and Directors shaping engineering culture, strategy and delivery.",           accent: "#f0513e" },
  { icon: "🤖", title: "AI / Automation Teams", desc: "Applying AI to software delivery, ops automation and intelligent tooling.",             accent: "#00cfe4" },
  { icon: "🤝", title: "Sponsors & Partners",   desc: "Connecting brands with a highly technical, influential and growing community.",          accent: "#f5c340" },
];

export default function Audience() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#021428" }}>
      <div className="absolute inset-0 dot-grid-dark opacity-30"/>
      {/* Aqua glow top-left */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,207,228,0.12) 0%, transparent 65%)" }}/>
      {/* Coral glow bottom-right */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(240,81,62,0.1) 0%, transparent 65%)" }}/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f0513e] bg-[#f0513e]/10 px-3 py-1 rounded-full mb-5">
            Who&apos;s coming
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Built for the people{" "}
            <span className="text-grad-hero">who build things</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCE.map(item => (
            <div key={item.title} className="card-dark rounded-2xl p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: `${item.accent}14`, border: `1px solid ${item.accent}28` }}>
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
