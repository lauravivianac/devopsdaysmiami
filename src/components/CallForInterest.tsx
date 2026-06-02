"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";

const TRACKS = [
  {
    icon: "🎟️",
    title: "I want to attend",
    desc: "Get early access to tickets, speaker lineup and session announcements.",
    cta: "Notify me",
    accent: "#00c8e0",
    action: "waitlist" as const,
  },
  {
    icon: "💼",
    title: "I want to sponsor",
    desc: "Connect your brand with engineers and tech leaders across the Americas.",
    cta: "Request info",
    accent: "#f5c842",
    action: "sponsor" as const,
  },
  {
    icon: "🎤",
    title: "I want to speak",
    desc: "Share your story, project or lessons learned with a practitioner audience.",
    cta: "Submit interest",
    accent: "#f05c4a",
    action: "waitlist" as const,
  },
];

export default function CallForInterest() {
  const { openModal } = useSponsorModal();

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "#071828" }}>
      <div className="section-divider absolute top-0 inset-x-0" />
      <div className="dot-grid absolute inset-0 opacity-20" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[#00c8e0] text-xs font-bold tracking-widest uppercase mb-4">
            Get involved
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            How do you want to{" "}
            <span className="text-gradient-hero">show up?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TRACKS.map((t) => (
            <div key={t.title} className="card-premium rounded-2xl p-8 flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background: `${t.accent}12`,
                  border: `1px solid ${t.accent}25`,
                }}
              >
                {t.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{t.desc}</p>

              {t.action === "sponsor" ? (
                <button
                  onClick={openModal}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 text-center"
                  style={{
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}40`,
                    color: t.accent,
                  }}
                >
                  {t.cta} →
                </button>
              ) : (
                <a
                  href="#waitlist"
                  className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 text-center"
                  style={{
                    background: `${t.accent}18`,
                    border: `1px solid ${t.accent}40`,
                    color: t.accent,
                  }}
                >
                  {t.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
