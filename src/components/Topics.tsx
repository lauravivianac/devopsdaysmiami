const TOPICS = [
  { label: "Platform Engineering",        icon: "🏗️", accent: "#00c8e0" },
  { label: "Cloud Native & Kubernetes",   icon: "☁️", accent: "#0b8fcf" },
  { label: "DevOps Culture",              icon: "🔄", accent: "#f05c4a" },
  { label: "SRE & Observability",         icon: "📊", accent: "#00c8e0" },
  { label: "AI for Software Delivery",    icon: "🤖", accent: "#f5c842" },
  { label: "FinOps & Cloud Optimization", icon: "💡", accent: "#f4924a" },
  { label: "Security & Governance",       icon: "🔐", accent: "#f05c4a" },
  { label: "Developer Experience",        icon: "⚡", accent: "#00c8e0" },
];

export default function Topics() {
  return (
    <section id="topics" className="py-28 relative overflow-hidden" style={{ background: "#071828" }}>
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Sunset glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(240,92,74,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#f5c842] text-xs font-bold tracking-widest uppercase mb-4">
            Topics
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            The conversations{" "}
            <span className="text-gradient-aqua">that matter now</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map((t) => (
            <div key={t.label} className="card-premium rounded-2xl p-6 group cursor-default">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${t.accent}15`,
                  border: `1px solid ${t.accent}30`,
                }}
              >
                {t.icon}
              </div>
              <p
                className="text-sm font-semibold leading-snug"
                style={{ color: "#c8d8e8" }}
              >
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
