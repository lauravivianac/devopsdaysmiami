"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";

const tiers = [
  { name: "Community Partner", color: "#00D5E8", desc: "Visibility + community alignment" },
  { name: "Gold Sponsor",      color: "#FFD18A", desc: "Prominent brand presence" },
  { name: "Platinum Sponsor",  color: "#a8c0d6", desc: "Premium access & speaking slot" },
  { name: "Diamond Sponsor",   color: "#FF6F61", desc: "Maximum exposure & exclusivity" },
];

const benefits = [
  "Brand visibility among senior engineers and tech leaders",
  "Speaking and workshop opportunities",
  "Direct access to the DevOps & Platform Engineering community",
  "Regional reach across North America and Latin America",
];

const WA_NUMBER = "573223507349";
const WA_MESSAGE = encodeURIComponent(
  "Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities."
);

export default function SponsorTeaser() {
  const { openModal } = useSponsorModal();

  return (
    <section id="sponsors" className="bg-[#031B2E] relative overflow-hidden">
      {/* Top wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 0 C360 60 1080 0 1440 40 L1440 0 Z" fill="#FFF7EA" />
      </svg>

      <div className="py-20 relative">
        <div className="absolute inset-0 grid-circuit opacity-40" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,111,97,0.1) 0%, transparent 65%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[#FFD18A] text-sm font-bold tracking-widest uppercase mb-4 block">
              Sponsorship
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Reach the people{" "}
              <span className="text-[#FFD18A]">building the future</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Connect your brand with a highly technical, influential and
              fast-growing community of engineering and technology leaders
              across the Americas.
            </p>
          </div>

          {/* Tier cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {tiers.map((t) => (
              <button
                key={t.name}
                onClick={openModal}
                className="group text-left p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${t.color}30`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mb-4 group-hover:scale-125 transition-transform"
                  style={{ background: t.color, boxShadow: `0 0 12px ${t.color}80` }}
                />
                <p className="text-white font-bold text-sm mb-1">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.desc}</p>
              </button>
            ))}
          </div>

          {/* Benefits + CTA */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="text-[#FFD18A] shrink-0 font-bold mt-0.5">✦</span>
                  <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 items-start lg:items-center">
              <button
                onClick={openModal}
                className="text-[#031B2E] font-black text-base px-10 py-4 rounded-full hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg w-full sm:w-auto text-center"
                style={{ background: "linear-gradient(135deg,#FFD18A,#FF6F61)" }}
              >
                Request sponsorship info →
              </button>

              {/* WhatsApp quick contact */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3 rounded-full border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <span className="text-xl">💬</span>
                <span className="text-[#25D366] font-semibold text-sm">Chat with Sponsorship Team</span>
              </a>

              <div className="text-center text-xs text-slate-500 mt-1">
                Or email us at{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="text-[#00D5E8] hover:underline">
                  hello@devopsdaysmiami.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 60 C360 0 1080 60 1440 20 L1440 60 Z" fill="#FFF7EA" />
      </svg>
    </section>
  );
}
