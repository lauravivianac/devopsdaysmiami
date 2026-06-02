"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const BENEFITS = [
  { title: "Brand visibility",   desc: "Logo and presence across all event channels, digital and physical." },
  { title: "Speaking slots",     desc: "Workshop and session access to showcase your engineering culture." },
  { title: "Community access",   desc: "Direct engagement with senior DevOps, SRE and Platform teams." },
  { title: "Americas reach",     desc: "Exposure across North America and Latin America's tech ecosystem." },
];

const TIERS = [
  { name: "Diamond",          color: "#25D0E6" },
  { name: "Platinum",         color: "#94a3b8" },
  { name: "Gold",             color: "#FFA84D" },
  { name: "Startup",          color: "#FF8A6B" },
  { name: "Community Partner",color: "#64748b" },
];

const WA = `https://wa.me/573223507349?text=${encodeURIComponent("Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities.")}`;

export default function SponsorTeaser() {
  const { openModal } = useSponsorModal();

  return (
    <section id="sponsors" className="py-24" style={{ background: "#F0FBFE" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule-coral" />
          <span className="label" style={{ color: "#FF8A6B" }}>Sponsorship</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color: "#071A3A" }}>
              Reach engineers who<br />
              <span className="grad-coral">actually ship things.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: "rgba(7,26,58,0.65)" }}>
              Connect your brand with a highly technical, influential and fast-growing
              community of engineering leaders across the Americas.
            </p>

            <div style={{ borderTop: "1.5px solid rgba(37,208,230,0.20)" }}>
              {BENEFITS.map(b => (
                <div key={b.title} className="flex items-start gap-5 py-5"
                  style={{ borderBottom: "1.5px solid rgba(37,208,230,0.12)" }}>
                  <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: "#FF8A6B", boxShadow: "0 0 8px rgba(255,138,107,0.60)" }} />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "#071A3A" }}>{b.title}</p>
                    <p className="text-sm" style={{ color: "rgba(7,26,58,0.50)" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar card */}
          <div className="lg:sticky lg:top-24">
            <div className="card-light p-7">
              <p className="label mb-5" style={{ color: "#FF8A6B" }}>Select a tier</p>

              <div className="space-y-1 mb-7">
                {TIERS.map(t => (
                  <button key={t.name} onClick={openModal}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all group flex items-center justify-between"
                    style={{ color: t.color }}
                    onMouseEnter={e => { (e.currentTarget).style.background = `${t.color}10`; }}
                    onMouseLeave={e => { (e.currentTarget).style.background = "transparent"; }}>
                    <span>{t.name}</span>
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      fill="none" viewBox="0 0 14 14">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>

              <button onClick={openModal} className="btn btn-primary w-full mb-3" style={{ justifyContent: "center" }}>
                Request sponsorship info →
              </button>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all"
                style={{ background: "rgba(37,211,102,0.08)", border: "1.5px solid rgba(37,211,102,0.25)", color: "#1DA851" }}
                onMouseEnter={e => { (e.currentTarget).style.background = "rgba(37,211,102,0.14)"; }}
                onMouseLeave={e => { (e.currentTarget).style.background = "rgba(37,211,102,0.08)"; }}>
                <span>💬</span> Chat on WhatsApp
              </a>
              <p className="text-center text-xs mt-4" style={{ color: "rgba(7,26,58,0.40)" }}>
                or{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="hover:underline" style={{ color: "#25D0E6" }}>
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
