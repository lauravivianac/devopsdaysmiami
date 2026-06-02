const TOPICS = [
  { n: "01", title: "Platform Engineering",        sub: "IDPs, golden paths, developer portals" },
  { n: "02", title: "Cloud Native & Kubernetes",   sub: "K8s, service mesh, CNCF ecosystem"     },
  { n: "03", title: "DevOps Culture",              sub: "Team topologies, psychological safety"  },
  { n: "04", title: "SRE & Observability",         sub: "SLOs, tracing, incident management"    },
  { n: "05", title: "AI for Software Delivery",    sub: "LLMOps, AI-assisted engineering"       },
  { n: "06", title: "FinOps & Cloud Cost",         sub: "Cost optimization, resource governance" },
  { n: "07", title: "Security & Governance",       sub: "Shift-left security, supply chain"     },
  { n: "08", title: "Developer Experience",        sub: "DX metrics, inner dev loop, DORA"      },
];

export default function Topics() {
  return (
    <section id="topics" className="py-32" style={{ background:"#080f1e" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-[340px_1fr] gap-20 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-4 mb-6">
              <div className="section-rule" />
              <span className="label">Topics</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color:"var(--text-1)" }}>
              The conversations<br />
              <span className="grad-cyan">that matter.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color:"var(--text-3)" }}>
              Sessions, ignites and open spaces driven by practitioners —
              for practitioners. Zero sales pitches.
            </p>
          </div>

          {/* Right — numbered list */}
          <div className="divide-y" style={{ borderColor:"var(--border)" }}>
            {TOPICS.map((t, i) => (
              <div key={t.n}
                className="flex items-center justify-between py-5 group cursor-default transition-colors hover:bg-white/[0.02] -mx-4 px-4 rounded-lg">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs w-6 shrink-0" style={{ color:"var(--text-4)" }}>
                    {t.n}
                  </span>
                  <div>
                    <p className="font-semibold text-base group-hover:text-[#00b8d4] transition-colors" style={{ color:"var(--text-1)" }}>
                      {t.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color:"var(--text-3)" }}>{t.sub}</p>
                  </div>
                </div>
                <svg className="w-4 h-4 shrink-0 ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  style={{ color:"#00b8d4" }} fill="none" viewBox="0 0 16 16">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
