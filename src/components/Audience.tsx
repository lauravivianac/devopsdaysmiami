const audience = [
  {
    icon: "⚙️",
    title: "Platform Engineers",
    description:
      "Building internal developer platforms, golden paths and enabling engineering at scale.",
  },
  {
    icon: "🔁",
    title: "DevOps & SRE Teams",
    description:
      "Owning reliability, CI/CD pipelines, incident response and operational excellence.",
  },
  {
    icon: "☁️",
    title: "Cloud Architects",
    description:
      "Designing scalable, cost-efficient multi-cloud and cloud-native infrastructures.",
  },
  {
    icon: "🧭",
    title: "Engineering Leaders",
    description:
      "CTOs, VPs and Directors shaping engineering culture, strategy and delivery.",
  },
  {
    icon: "🤖",
    title: "AI / Automation Teams",
    description:
      "Applying AI to software delivery, ops automation and intelligent tooling.",
  },
  {
    icon: "🤝",
    title: "Sponsors & Tech Partners",
    description:
      "Connecting brands with a highly technical, influential and growing community.",
  },
];

export default function Audience() {
  return (
    <section className="py-24 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00d4ff]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#ff6b6b] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Who's coming
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Built for the people{" "}
            <span className="gradient-text">who build things</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((item) => (
            <div
              key={item.title}
              className="card-glass rounded-2xl p-6 group hover:border-[#00d4ff]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
