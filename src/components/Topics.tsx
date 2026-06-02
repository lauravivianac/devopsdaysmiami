const TOPICS = [
  { label: "Platform Engineering",        icon: "🏗️", accent: "#00cfe4" },
  { label: "Cloud Native & Kubernetes",   icon: "☁️", accent: "#0558a0" },
  { label: "DevOps Culture",              icon: "🔄", accent: "#f0513e" },
  { label: "SRE & Observability",         icon: "📊", accent: "#00cfe4" },
  { label: "AI for Software Delivery",    icon: "🤖", accent: "#f5c340" },
  { label: "FinOps & Cloud Optimization", icon: "💡", accent: "#f4884a" },
  { label: "Security & Governance",       icon: "🔐", accent: "#f0513e" },
  { label: "Developer Experience",        icon: "⚡", accent: "#00cfe4" },
];

export default function Topics() {
  return (
    <section id="topics" className="py-28 bg-[#fdf8f3] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-light opacity-50"/>
      {/* Aqua tint top */}
      <div className="absolute top-0 inset-x-0 h-1" style={{
        background: "linear-gradient(90deg, transparent, #00cfe4 50%, transparent)"
      }}/>
      {/* Subtle warm glow */}
      <div className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(245,195,64,0.12) 0%, transparent 65%)" }}/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f5c340] bg-[#f5c340]/10 border border-[#f5c340]/20 px-3 py-1 rounded-full mb-5">
            Topics
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#020e1c] leading-tight">
            The conversations{" "}
            <span className="text-grad-aqua">that matter now</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map(t => (
            <div key={t.label} className="card-light rounded-2xl p-6 group cursor-default">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${t.accent}12`, border: `1px solid ${t.accent}25` }}>
                {t.icon}
              </div>
              <p className="text-[#1a2a38] font-semibold text-sm leading-snug">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
