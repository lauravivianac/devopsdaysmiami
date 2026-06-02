"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TIERS = [
  { name: "Community Partner", color: "#00cfe4" },
  { name: "Startup",           color: "#0558a0" },
  { name: "Gold Sponsor",      color: "#f5c340" },
  { name: "Platinum Sponsor",  color: "#8ab8d4" },
  { name: "Diamond Sponsor",   color: "#f0513e" },
  { name: "Not Sure Yet",      color: "#64748b" },
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
    <section id="sponsors" className="py-28 relative overflow-hidden" style={{
      background: "linear-gradient(155deg, #020e1c 0%, #031525 45%, #041d30 100%)"
    }}>
      <div className="absolute inset-0 dot-grid-dark opacity-25"/>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,195,64,0.08) 0%, transparent 65%)" }}/>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#f5c340] bg-[#f5c340]/10 border border-[#f5c340]/20 px-3 py-1 rounded-full mb-5">
            Sponsorship
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Reach the people{" "}
            <span className="text-grad-warm">building the future</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Connect your brand with a highly technical, influential and fast-growing
            community of engineering and technology leaders across the Americas.
          </p>
        </div>

        {/* Tier pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {TIERS.map(t => (
            <button key={t.name} onClick={openModal}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: `${t.color}12`, border: `1px solid ${t.color}30`, color: t.color }}>
              {t.name} →
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ul className="space-y-4">
            {BENEFITS.map(b => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-[#f5c340] text-sm mt-0.5 shrink-0">✦</span>
                <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <button onClick={openModal} className="btn-cta text-base px-9 py-4 w-full">
              Request sponsorship info →
            </button>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.28)", color: "#25D366" }}>
              <span>💬</span> Chat with Sponsorship Team
            </a>
            <p className="text-slate-600 text-xs text-center">
              Or email{" "}
              <a href="mailto:hello@devopsdaysmiami.com" className="text-[#00cfe4] hover:underline">
                hello@devopsdaysmiami.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
