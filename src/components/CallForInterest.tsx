"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TRACKS = [
  { icon: "🎟️", title: "I want to attend",  desc: "Get early access to tickets, speaker lineup and session announcements.", cta: "Notify me",       accent: "#00cfe4", action: "waitlist" as const },
  { icon: "💼", title: "I want to sponsor",  desc: "Connect your brand with engineers and tech leaders across the Americas.", cta: "Request info",    accent: "#f5c340", action: "sponsor"  as const },
  { icon: "🎤", title: "I want to speak",    desc: "Share your story, project or lessons learned with a practitioner audience.", cta: "Submit interest", accent: "#f0513e", action: "waitlist" as const },
];

export default function CallForInterest() {
  const { openModal } = useSponsorModal();

  return (
    <section className="py-28 bg-[#fdf8f3] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-light opacity-40"/>
      <div className="absolute top-0 inset-x-0 h-1" style={{
        background: "linear-gradient(90deg, transparent, #f0513e 35%, #f5c340 65%, transparent)"
      }}/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0558a0] bg-[#0558a0]/8 px-3 py-1 rounded-full mb-5">
            Get involved
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#020e1c] leading-tight">
            How do you want to{" "}
            <span className="text-grad-hero">show up?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TRACKS.map(t => (
            <div key={t.title} className="card-light rounded-3xl p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: `${t.accent}12`, border: `1px solid ${t.accent}28` }}>
                {t.icon}
              </div>
              <h3 className="text-[#020e1c] font-black text-xl mb-3">{t.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{t.desc}</p>
              {t.action === "sponsor"
                ? <button onClick={openModal}
                    className="text-sm font-bold px-6 py-3 rounded-full text-center transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.accent}12`, border: `1.5px solid ${t.accent}35`, color: t.accent }}>
                    {t.cta} →
                  </button>
                : <a href="#waitlist"
                    className="text-sm font-bold px-6 py-3 rounded-full text-center transition-all hover:-translate-y-0.5"
                    style={{ background: `${t.accent}12`, border: `1.5px solid ${t.accent}35`, color: t.accent }}>
                    {t.cta} →
                  </a>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
