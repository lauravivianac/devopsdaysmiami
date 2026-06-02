"use client";
import { useSponsorModal } from "@/context/SponsorModalContext";

const BENEFITS = [
  { title: "Brand visibility",   desc: "Logo and presence across all event channels, digital and physical." },
  { title: "Speaking slots",     desc: "Workshop and session access to showcase your engineering culture." },
  { title: "Community access",   desc: "Direct engagement with senior DevOps, SRE and Platform teams." },
  { title: "Americas reach",     desc: "Exposure across North America and Latin America's tech ecosystem." },
];

const TIERS = [
  { name: "Diamond", color: "#00b8d4" },
  { name: "Platinum", color: "#94a3b8" },
  { name: "Gold", color: "#f5c342" },
  { name: "Startup", color: "#ff6b4a" },
  { name: "Community Partner", color: "#64748b" },
];

const WA = `https://wa.me/573223507349?text=${encodeURIComponent("Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities.")}`;

export default function SponsorTeaser() {
  const { openModal } = useSponsorModal();

  return (
    <section id="sponsors" className="py-32" style={{ background:"#050d18" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" style={{ background:"linear-gradient(90deg, #f5c342, transparent)" }} />
          <span className="label">Sponsorship</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-6" style={{ color:"var(--text-1)" }}>
              Reach engineers who<br />
              <span className="grad-coral">actually ship things.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-14" style={{ color:"var(--text-2)" }}>
              Connect your brand with a highly technical, influential and fast-growing
              community of engineering leaders across the Americas.
            </p>

            {/* Benefits */}
            <div style={{ borderTop:"1px solid var(--border)" }}>
              {BENEFITS.map(b => (
                <div key={b.title} className="flex items-start gap-5 py-5"
                  style={{ borderBottom:"1px solid var(--border)" }}>
                  <div className="w-1 h-1 rounded-full mt-2.5 shrink-0" style={{ background:"#f5c342", boxShadow:"0 0 8px #f5c342" }} />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color:"var(--text-1)" }}>{b.title}</p>
                    <p className="text-sm" style={{ color:"var(--text-3)" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:sticky lg:top-24">
            <div className="card p-7">
              <p className="label mb-6" style={{ color:"#f5c342" }}>Select a tier</p>

              <div className="space-y-1 mb-7">
                {TIERS.map(t => (
                  <button key={t.name} onClick={openModal}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all hover:bg-white/5 hover:translate-x-1 flex items-center justify-between group"
                    style={{ color: t.color }}>
                    <span>{t.name}</span>
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none" viewBox="0 0 14 14">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>

              <button onClick={openModal} className="btn btn-primary w-full mb-3" style={{ justifyContent:"center" }}>
                Request sponsorship info →
              </button>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost w-full text-sm" style={{ justifyContent:"center", color:"#25D366", borderColor:"rgba(37,211,102,0.25)" }}>
                <span>💬</span> Chat on WhatsApp
              </a>
              <p className="text-center text-xs mt-4" style={{ color:"var(--text-4)" }}>
                or{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="hover:underline" style={{ color:"var(--cyan)" }}>
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
