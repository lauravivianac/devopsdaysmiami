const topics = [
  {
    label: "Platform Engineering",
    color: "from-[#00d4ff] to-[#0094b3]",
    icon: "🏗️",
  },
  {
    label: "Cloud Native & Kubernetes",
    color: "from-[#7c3aed] to-[#5b21b6]",
    icon: "☁️",
  },
  {
    label: "DevOps Culture",
    color: "from-[#ff6b6b] to-[#dc2626]",
    icon: "🔄",
  },
  {
    label: "SRE & Observability",
    color: "from-[#00d4ff] to-[#7c3aed]",
    icon: "📊",
  },
  {
    label: "AI for Software Delivery",
    color: "from-[#a78bfa] to-[#7c3aed]",
    icon: "🤖",
  },
  {
    label: "FinOps & Cloud Optimization",
    color: "from-[#ff6b6b] to-[#7c3aed]",
    icon: "💡",
  },
  {
    label: "Security & Governance",
    color: "from-[#00d4ff] to-[#ff6b6b]",
    icon: "🔐",
  },
  {
    label: "Developer Experience",
    color: "from-[#7c3aed] to-[#ff6b6b]",
    icon: "⚡",
  },
];

export default function Topics() {
  return (
    <section id="topics" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-[#ff6b6b]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#a78bfa] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Topics
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            The conversations{" "}
            <span className="gradient-text">that matter now</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.label}
              className="card-glass rounded-2xl p-5 group hover:-translate-y-1 transition-all duration-300 hover:border-white/10"
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {topic.icon}
              </div>
              <p className="text-white font-semibold text-sm leading-snug">
                {topic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
