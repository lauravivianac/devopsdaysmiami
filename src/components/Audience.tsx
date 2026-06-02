const audience = [
  {
    icon: "⚙️",
    title: "Platform Engineers",
    description: "Building internal developer platforms, golden paths and enabling engineering at scale.",
  },
  {
    icon: "🔁",
    title: "DevOps & SRE Teams",
    description: "Owning reliability, CI/CD pipelines, incident response and operational excellence.",
  },
  {
    icon: "☁️",
    title: "Cloud Architects",
    description: "Designing scalable, cost-efficient multi-cloud and cloud-native infrastructures.",
  },
  {
    icon: "🧭",
    title: "Engineering Leaders",
    description: "CTOs, VPs and Directors shaping engineering culture, strategy and delivery.",
  },
  {
    icon: "🤖",
    title: "AI / Automation Teams",
    description: "Applying AI to software delivery, ops automation and intelligent tooling.",
  },
  {
    icon: "🤝",
    title: "Sponsors & Tech Partners",
    description: "Connecting brands with a highly technical, influential and growing community.",
  },
];

export default function Audience() {
  return (
    <section className="py-24 bg-[#031B2E] relative overflow-hidden">
      <div className="absolute inset-0 grid-circuit opacity-50" />

      {/* Top wave */}
      <svg className="absolute top-0 left-0 right-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 0 C360 60 1080 0 1440 40 L1440 0 Z" fill="#FFF7EA" />
      </svg>
      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 60 C360 0 1080 60 1440 20 L1440 60 Z" fill="#FFF7EA" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#FF6F61] text-sm font-bold tracking-widest uppercase mb-4 block">
            Who&apos;s coming
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Built for the people{" "}
            <span className="gradient-text-miami">who build things</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audience.map((item) => (
            <div key={item.title} className="card-navy rounded-2xl p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
