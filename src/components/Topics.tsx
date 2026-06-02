const TOPICS = [
  { label: "Platform Engineering",        num: "01" },
  { label: "Cloud Native & Kubernetes",   num: "02" },
  { label: "DevOps Culture",              num: "03" },
  { label: "SRE & Observability",         num: "04" },
  { label: "AI for Software Delivery",    num: "05" },
  { label: "FinOps & Cloud Optimization", num: "06" },
  { label: "Security & Governance",       num: "07" },
  { label: "Developer Experience",        num: "08" },
];

export default function Topics() {
  return (
    <section id="topics" className="bg-[#f8f4ef] py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-[#e0dbd4]" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#8a9aaa]">Topics</span>
          <div className="h-px flex-1 bg-[#e0dbd4]" />
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#010e1e] leading-tight mb-6">
              The conversations<br />
              <span className="text-grad-aqua">that matter now.</span>
            </h2>
            <p className="text-[#6b8298] leading-relaxed">
              Sessions, ignites and open spaces driven by practitioners —
              for practitioners. No sales pitches.
            </p>
          </div>

          <div className="divide-y divide-[#e0dbd4]">
            {TOPICS.map(t => (
              <div key={t.label}
                className="flex items-center justify-between py-4 group cursor-default">
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold text-[#38d9f0] tabular-nums w-6 shrink-0">
                    {t.num}
                  </span>
                  <span className="text-[#1a2a38] font-semibold text-base group-hover:text-[#010e1e] transition-colors">
                    {t.label}
                  </span>
                </div>
                <svg className="w-4 h-4 text-[#c8d4dc] group-hover:text-[#38d9f0] group-hover:translate-x-1 transition-all"
                  fill="none" viewBox="0 0 16 16">
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
