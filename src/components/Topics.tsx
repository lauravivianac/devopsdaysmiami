const topics = [
  { label: "Platform Engineering",        icon: "🏗️", accent: "#00D5E8" },
  { label: "Cloud Native & Kubernetes",   icon: "☁️", accent: "#0067B1" },
  { label: "DevOps Culture",              icon: "🔄", accent: "#FF6F61" },
  { label: "SRE & Observability",         icon: "📊", accent: "#00D5E8" },
  { label: "AI for Software Delivery",    icon: "🤖", accent: "#FFD18A" },
  { label: "FinOps & Cloud Optimization", icon: "💡", accent: "#FF6F61" },
  { label: "Security & Governance",       icon: "🔐", accent: "#0067B1" },
  { label: "Developer Experience",        icon: "⚡", accent: "#00D5E8" },
];

export default function Topics() {
  return (
    <section id="topics" className="py-24 bg-[#FFF7EA] relative overflow-hidden">
      {/* Soft circuit dots */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#0067B1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#0067B1] text-sm font-bold tracking-widest uppercase mb-4 block">
            Topics
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#031B2E] leading-tight">
            The conversations{" "}
            <span className="gradient-text-aqua">that matter now</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((t) => (
            <div
              key={t.label}
              className="card-cream rounded-2xl p-5 group cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${t.accent}18`, border: `1px solid ${t.accent}40` }}
              >
                {t.icon}
              </div>
              <p className="text-[#031B2E] font-bold text-sm leading-snug">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
