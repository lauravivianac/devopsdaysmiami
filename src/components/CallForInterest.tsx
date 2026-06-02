"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TRACKS = [
  {
    label: "01 — Attend",
    headline: "Get early access",
    desc: "Be first to know about the ticket launch, speaker lineup and schedule.",
    cta: "Join waitlist →",
    action: "waitlist" as const,
    color: "#38d9f0",
  },
  {
    label: "02 — Sponsor",
    headline: "Connect your brand",
    desc: "Reach senior engineers, platform teams and tech leaders from across the Americas.",
    cta: "Request sponsor info →",
    action: "sponsor" as const,
    color: "#f5c136",
  },
  {
    label: "03 — Speak",
    headline: "Share your experience",
    desc: "Submit a talk, ignite or open space proposal to a practitioner audience.",
    cta: "Submit interest →",
    action: "waitlist" as const,
    color: "#f97044",
  },
];

export default function CallForInterest() {
  const { openModal } = useSponsorModal();

  return (
    <section className="bg-[#f8f4ef] py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-[#e0dbd4]" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#8a9aaa]">Get involved</span>
          <div className="h-px flex-1 bg-[#e0dbd4]" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-[#010e1e] leading-tight mb-14">
          How do you want to<br />
          <span className="text-grad-hero">show up in Miami?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TRACKS.map(t => (
            <div key={t.label} className="card-white rounded-xl p-8 flex flex-col">
              <span className="text-xs font-bold tracking-[0.15em] uppercase mb-4"
                style={{ color: t.color }}>
                {t.label}
              </span>
              <h3 className="text-[#010e1e] font-black text-2xl mb-3">{t.headline}</h3>
              <p className="text-[#6b8298] text-sm leading-relaxed mb-8 flex-1">{t.desc}</p>

              {t.action === "sponsor"
                ? <button onClick={openModal}
                    className="text-sm font-bold self-start px-5 py-2.5 rounded transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.color}14`, border: `1.5px solid ${t.color}35`, color: t.color }}>
                    {t.cta}
                  </button>
                : <a href="#waitlist"
                    className="text-sm font-bold self-start px-5 py-2.5 rounded transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.color}14`, border: `1.5px solid ${t.color}35`, color: t.color }}>
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
