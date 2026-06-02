"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const BENEFITS = [
  { title: "Brand visibility",      desc: "Logo and presence across all event channels, signage and digital assets." },
  { title: "Speaking slots",        desc: "Workshop and session opportunities to showcase your engineering culture." },
  { title: "Community access",      desc: "Direct engagement with senior DevOps, SRE and Platform Engineering teams." },
  { title: "Americas reach",        desc: "Exposure across North America, Latin America and the global tech community." },
];

const TIERS = ["Community Partner","Startup","Gold","Platinum","Diamond"];
const WA = `https://wa.me/573223507349?text=${encodeURIComponent("Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities.")}`;

export default function SponsorTeaser() {
  const { openModal } = useSponsorModal();
  return (
    <section id="sponsors" className="py-28" style={{ background: "#010e1e" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-white/35">Sponsorship</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-20 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Reach engineers who<br />
              <span className="text-grad-coral">actually ship things.</span>
            </h2>
            <p className="text-[#4a6880] text-lg leading-relaxed mb-12">
              Connect your brand with a highly technical, influential and fast-growing
              community of engineering and technology leaders across the Americas.
            </p>

            <div className="space-y-0 divide-y divide-white/6">
              {BENEFITS.map(b => (
                <div key={b.title} className="flex items-start gap-5 py-5">
                  <span className="text-[#38d9f0] text-xs font-bold mt-1 shrink-0">✦</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{b.title}</p>
                    <p className="text-[#4a6880] text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="card-navy rounded-xl p-8">
              <p className="text-[#38d9f0] text-xs font-bold tracking-widest uppercase mb-5">
                Sponsorship tiers
              </p>
              <div className="space-y-2 mb-8">
                {TIERS.map((t, i) => (
                  <button key={t} onClick={openModal}
                    className="w-full text-left px-4 py-3 rounded text-sm font-semibold transition-all hover:bg-white/6 hover:translate-x-1"
                    style={{ color: i === 4 ? "#38d9f0" : i === 3 ? "#a8c8e0" : i === 2 ? "#f5c136" : "#6b8298" }}>
                    {t} →
                  </button>
                ))}
              </div>

              <button onClick={openModal} className="btn-primary w-full text-sm py-3.5 mb-3">
                Request sponsorship info →
              </button>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded text-sm font-semibold transition-all hover:bg-white/5"
                style={{ border: "1px solid rgba(37,211,102,0.3)", color: "#25D366" }}>
                <span>💬</span> Chat on WhatsApp
              </a>
              <p className="text-[#2a4a60] text-xs text-center mt-4">
                or{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="text-[#38d9f0] hover:underline">
                  hello@devopsdaysmiami.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
