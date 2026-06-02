const ICONS = [
  {
    label: "Community",
    sub: "Practitioner-driven and community-led",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="12" cy="10" r="4" stroke="#25D0E6" strokeWidth="2"/>
        <circle cx="22" cy="10" r="4" stroke="#25D0E6" strokeWidth="2"/>
        <path d="M4 26c0-4.418 3.582-8 8-8h8c4.418 0 8 3.582 8 8" stroke="#25D0E6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Talks",
    sub: "Real-world talks that inspire action",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="11" r="5" stroke="#25D0E6" strokeWidth="2"/>
        <path d="M16 16v4M13 26h6" stroke="#25D0E6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#25D0E6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Tech",
    sub: "DevOps, Cloud, Platform, AI & more",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M6 20c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#25D0E6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 26c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#25D0E6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="26" r="1.5" fill="#25D0E6"/>
      </svg>
    ),
  },
  {
    label: "Connections",
    sub: "Build relationships that matter",
    svg: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M8 16l4 4 12-12" stroke="#25D0E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="12" stroke="#25D0E6" strokeWidth="2" opacity="0.30"/>
      </svg>
    ),
  },
];

const STATS = [
  { value: "1",     suffix: " day",  sub: "talks · ignites · open spaces" },
  { value: "Open",  suffix: " CFP",  sub: "practitioner-led sessions"      },
  { value: "LATAM", suffix: " + US", sub: "cross-regional community"       },
  { value: "100%",  suffix: "",       sub: "community-driven, zero fluff"  },
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="section-rule" />
          <span className="label">About the event</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-20 items-start mb-16">

          {/* Copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-tight mb-7" style={{ color: "#071A3A" }}>
              Engineering community.{" "}
              <span className="grad-aqua-coral">Real conversations.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "rgba(7,26,58,0.70)" }}>
              DevOpsDays Miami will bring together engineers, platform teams, cloud leaders,
              SREs, DevOps practitioners, architects, startups, enterprises and technology
              partners to explore the future of software delivery.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(7,26,58,0.50)" }}>
              Rooted in the global DevOpsDays tradition — open, community-led, practitioner-focused.
              No vendor pitches. No fluff. Just real teams sharing real stories.
            </p>
          </div>

          {/* 4 icon pillars */}
          <div className="grid grid-cols-2 gap-4">
            {ICONS.map(item => (
              <div key={item.label} className="card-light p-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(37,208,230,0.08)" }}>
                  {item.svg}
                </div>
                <p className="font-black text-sm" style={{ color: "#071A3A" }}>{item.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(7,26,58,0.50)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10"
          style={{ borderTop: "1.5px solid rgba(37,208,230,0.15)" }}>
          {STATS.map(s => (
            <div key={s.sub} className="text-center py-4">
              <div className="font-black mb-1" style={{ fontSize: 30, color: "#071A3A", lineHeight: 1 }}>
                {s.value}
                <span className="grad-aqua" style={{ fontSize: 18 }}>{s.suffix}</span>
              </div>
              <p className="text-xs" style={{ color: "rgba(7,26,58,0.45)" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
