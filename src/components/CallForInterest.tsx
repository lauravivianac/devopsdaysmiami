"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TRACKS = [
  {
    num: "01", title: "Attend",
    head: "Get early access.",
    desc: "Be first to know about ticket launch, speaker lineup, agenda and schedule.",
    cta: "Join the waitlist →",
    color: "#00b8d4",
    action: "waitlist" as const,
  },
  {
    num: "02", title: "Sponsor",
    head: "Connect your brand.",
    desc: "Reach senior engineers, platform teams and tech leaders across the Americas.",
    cta: "Request sponsor info →",
    color: "#f5c342",
    action: "sponsor" as const,
  },
  {
    num: "03", title: "Speak",
    head: "Share your story.",
    desc: "Submit a talk, ignite or open space to a practitioner-first audience.",
    cta: "Submit interest →",
    color: "#ff6b4a",
    action: "waitlist" as const,
  },
];

export default function CallForInterest() {
  const { openModal } = useSponsorModal();

  return (
    <section className="py-32" style={{ background:"#080f1e" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label">Get involved</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-16" style={{ color:"var(--text-1)" }}>
          How do you want to{" "}
          <span className="grad-cyan-coral">show up?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {TRACKS.map(t => (
            <div key={t.num} className="card p-8 flex flex-col">
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-mono text-xs" style={{ color:"var(--text-4)" }}>{t.num}</span>
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: t.color }}>
                  {t.title}
                </span>
              </div>
              <h3 className="font-black text-2xl mb-3" style={{ color:"var(--text-1)" }}>{t.head}</h3>
              <p className="text-sm leading-relaxed mb-10 flex-1" style={{ color:"var(--text-3)" }}>{t.desc}</p>

              {t.action === "sponsor"
                ? <button onClick={openModal}
                    className="btn self-start text-xs font-bold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                    style={{ background:`${t.color}14`, border:`1px solid ${t.color}35`, color:t.color }}>
                    {t.cta}
                  </button>
                : <a href="#waitlist"
                    className="btn self-start text-xs font-bold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                    style={{ background:`${t.color}14`, border:`1px solid ${t.color}35`, color:t.color }}>
                    {t.cta}
                  </a>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
