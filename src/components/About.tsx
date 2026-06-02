const STATS = [
  { value: "2",      unit: "days",  label: "of talks, ignites & open spaces" },
  { value: "Open",   unit: "CFP",   label: "Practitioner-led sessions"        },
  { value: "LATAM",  unit: "+ US",  label: "Regional community reach"         },
  { value: "100%",   unit: "free",  label: "Community spirit"                 },
];

export default function About() {
  return (
    <section id="about" className="bg-[#f8f4ef] py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-[#e0dbd4]" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#8a9aaa]">About the event</span>
          <div className="h-px flex-1 bg-[#e0dbd4]" />
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#010e1e] leading-tight mb-7">
              Engineering community.<br />
              <span className="text-grad-aqua">Real conversations.</span>
            </h2>
            <p className="text-[#3a5068] text-lg leading-relaxed mb-5">
              DevOpsDays Miami will bring together engineers, platform teams, cloud leaders,
              SREs, DevOps practitioners, architects, startups, enterprises and technology
              partners to explore the future of software delivery.
            </p>
            <p className="text-[#6b8298] text-base leading-relaxed">
              Rooted in the global DevOpsDays tradition — open, community-led,
              practitioner-focused. Not a vendor conference. A space where real
              teams share real stories, real failures, and real breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STATS.map(s => (
              <div key={s.label} className="card-white rounded-xl p-6">
                <div className="text-2xl font-black text-[#010e1e] leading-none">
                  {s.value}<span className="text-[#38d9f0] ml-1 text-lg">{s.unit}</span>
                </div>
                <div className="text-[#6b8298] text-xs mt-2 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
