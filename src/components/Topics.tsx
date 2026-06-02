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
    <section id="topics" className="py-24" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-[320px_1fr] gap-20 items-start">

          {/* Left — sticky */}
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="section-rule" />
              <span className="label">Topics</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: "#071A3A" }}>
              The conversations<br />
              <span className="grad-aqua">that matter.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(7,26,58,0.55)" }}>
              Sessions, ignites and open spaces driven by practitioners —
              for practitioners. Zero sales pitches.
            </p>
          </div>

          {/* Right — topic list */}
          <div style={{ borderTop: "1.5px solid rgba(37,208,230,0.20)" }}>
            {TOPICS.map(t => (
              <div key={t.n}
                className="flex items-center justify-between py-5 -mx-4 px-4 rounded-xl transition-all cursor-default group hover:bg-[rgba(37,208,230,0.05)]"
                style={{ borderBottom: "1.5px solid rgba(37,208,230,0.12)" }}>
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs w-6 shrink-0" style={{ color: "rgba(7,26,58,0.30)" }}>
                    {t.n}
                  </span>
                  <div>
                    <p className="font-semibold text-base transition-colors group-hover:text-[#25D0E6]" style={{ color: "#071A3A" }}>
                      {t.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(7,26,58,0.45)" }}>{t.sub}</p>
                  </div>
                </div>
                <svg className="w-4 h-4 shrink-0 ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  style={{ color: "#25D0E6" }} fill="none" viewBox="0 0 16 16">
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
