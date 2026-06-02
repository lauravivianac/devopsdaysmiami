const STATS = [
  { value: "2-day",  label: "Community Event"  },
  { value: "Open",   label: "Call for Papers"   },
  { value: "Global", label: "Network"           },
  { value: "Free",   label: "Community Spirit"  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "#071828" }}>
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Soft aqua glow */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,200,224,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-[#00c8e0] text-xs font-bold tracking-widest uppercase mb-4">
              About the event
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Engineering community.{" "}
              <span className="text-gradient-aqua">Real conversations.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              DevOpsDays Miami will bring together engineers, platform teams,
              cloud leaders, SREs, DevOps practitioners, architects, startups,
              enterprises and technology partners to explore the future of
              software delivery.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              Rooted in the global DevOpsDays tradition — open, community-led,
              practitioner-focused — this is not a vendor conference. It&apos;s
              a space where real teams share real stories.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="card-premium rounded-2xl p-7">
                <div className="text-3xl font-black text-[#00c8e0] mb-1.5">{s.value}</div>
                <div className="text-slate-400 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
