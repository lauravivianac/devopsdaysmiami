"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";

const TIERS = [
  { name: "Community Partner", color: "#00c8e0" },
  { name: "Startup",           color: "#0b8fcf" },
  { name: "Gold Sponsor",      color: "#f5c842" },
  { name: "Platinum Sponsor",  color: "#b8d4e8" },
  { name: "Diamond Sponsor",   color: "#f05c4a" },
  { name: "Not Sure Yet",      color: "#6b8fa8" },
];

const BENEFITS = [
  "Brand visibility among senior engineers and tech leaders",
  "Speaking and workshop opportunities",
  "Direct access to the DevOps & Platform Engineering community",
  "Regional reach across North America and Latin America",
];

const WA = `https://wa.me/573223507349?text=${encodeURIComponent("Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities.")}`;

export default function SponsorTeaser() {
  const { openModal } = useSponsorModal();

  return (
    <section id="sponsors" className="py-28 relative overflow-hidden" style={{ background: "#040f1c" }}>
      <div className="dot-grid absolute inset-0 opacity-25" />

      {/* Gold glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,200,66,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f5c842] text-xs font-bold tracking-widest uppercase mb-4">
            Sponsorship
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Reach the people{" "}
            <span style={{ color: "#f5c842" }}>building the future</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Connect your brand with a highly technical, influential and
            fast-growing community of engineering and technology leaders
            across the Americas.
          </p>
        </div>

        {/* Tier pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TIERS.map((t) => (
            <button
              key={t.name}
              onClick={openModal}
              className="group px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{
                background: `${t.color}12`,
                border: `1px solid ${t.color}30`,
                color: t.color,
              }}
            >
              {t.name} →
            </button>
          ))}
        </div>

        {/* Benefits + CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ul className="space-y-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span style={{ color: "#f5c842" }} className="mt-0.5 text-sm shrink-0">✦</span>
                <span className="text-slate-400 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 lg:items-start">
            <button
              onClick={openModal}
              className="btn-primary text-base px-9 py-4 w-full lg:w-auto text-center"
            >
              <span>Request sponsorship info →</span>
            </button>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 w-full lg:w-auto"
              style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#25D366" }}
            >
              <span>💬</span>
              <span>Chat with Sponsorship Team</span>
            </a>
            <p className="text-slate-600 text-xs text-center lg:text-left">
              Or email{" "}
              <a href="mailto:hello@devopsdaysmiami.com" className="text-[#00c8e0] hover:underline">
                hello@devopsdaysmiami.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
