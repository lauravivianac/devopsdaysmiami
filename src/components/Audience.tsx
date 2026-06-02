const AUDIENCE = [
  { icon: "⚙️", title: "Platform Engineers",   desc: "Internal developer platforms, golden paths, self-service infrastructure at scale." },
  { icon: "🔁", title: "DevOps & SRE Teams",   desc: "CI/CD pipelines, incident response, reliability engineering and on-call culture." },
  { icon: "☁️", title: "Cloud Architects",      desc: "Multi-cloud strategy, cost optimization and cloud-native architecture patterns." },
  { icon: "🧭", title: "Engineering Leaders",   desc: "CTOs, VPs, Directors — shaping culture, hiring, and technical strategy." },
  { icon: "🤖", title: "AI / Automation Teams", desc: "AI in software delivery, LLMOps, intelligent automation and observability." },
  { icon: "🤝", title: "Sponsors & Partners",   desc: "Brands that want direct access to a highly technical, engaged community." },
];

export default function Audience() {
  return (
    <section className="py-24" style={{ background: "#F0FBFE" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label">Who&apos;s coming</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-14" style={{ color: "#071A3A" }}>
          Built for the people{" "}
          <span className="grad-aqua-coral">who build things.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCE.map(item => (
            <div key={item.title} className="card-light p-7 group">
              <span className="text-2xl block mb-4">{item.icon}</span>
              <h3 className="font-bold text-base mb-2 transition-colors group-hover:text-[#25D0E6]" style={{ color: "#071A3A" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(7,26,58,0.55)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
