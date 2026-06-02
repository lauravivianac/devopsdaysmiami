"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TRACKS = [
  {
    num: "01", title: "Attend",
    head: "Get early access.",
    desc: "Be first to know about ticket launch, speaker lineup, agenda and schedule.",
    cta: "Join the waitlist →",
    color: "#25D0E6",
    action: "waitlist" as const,
  },
  {
    num: "02", title: "Sponsor",
    head: "Connect your brand.",
    desc: "Reach senior engineers, platform teams and tech leaders across the Americas.",
    cta: "Request sponsor info →",
    color: "#FF8A6B",
    action: "sponsor" as const,
  },
  {
    num: "03", title: "Speak",
    head: "Share your story.",
    desc: "Submit a talk, ignite or open space to a practitioner-first audience.",
    cta: "Submit interest →",
    color: "#FFA84D",
    action: "waitlist" as const,
  },
];

export default function CallForInterest() {
  const { openModal } = useSponsorModal();

  return (
    <section className="py-24" style={{ background: "#071A3A" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label-dark">Get involved</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-14" style={{ color: "#fff" }}>
          How do you want to{" "}
          <span className="grad-aqua-coral">show up?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {TRACKS.map(t => (
            <div key={t.num} className="flex flex-col p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1.5px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-mono text-xs" style={{ color: "rgba(237,242,247,0.30)" }}>{t.num}</span>
                <span className="text-xs font-black tracking-widest uppercase" style={{ color: t.color }}>
                  {t.title}
                </span>
              </div>
              <h3 className="font-black text-2xl mb-3" style={{ color: "#fff" }}>{t.head}</h3>
              <p className="text-sm leading-relaxed mb-10 flex-1" style={{ color: "rgba(237,242,247,0.55)" }}>{t.desc}</p>

              {t.action === "sponsor"
                ? <button onClick={openModal}
                    className="self-start text-xs font-bold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.color}18`, border: `1.5px solid ${t.color}40`, color: t.color }}>
                    {t.cta}
                  </button>
                : <a href="#waitlist"
                    className="self-start text-xs font-bold px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.color}18`, border: `1.5px solid ${t.color}40`, color: t.color }}>
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
