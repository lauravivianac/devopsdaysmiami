"use client";

import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

const TAGS = [
  "Platform Engineering", "Cloud Native", "SRE",
  "AI Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Miami beach photograph — bright, vibrant, warm ───────────────────── */}
      <div className="absolute inset-0" style={{ filter: "brightness(1.18) saturate(1.15)" }}>
        <Image
          src="/miami-hero.png"
          alt="Miami Beach at sunset — turquoise ocean, white sand and Miami skyline"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Very light white tint — no dark overlays ─────────────────────────── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)"
      }} />

      {/* ── Large radial white glow — center — brightens behind logo + text ───── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 50% 48%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.45) 25%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0) 70%)"
      }} />

      {/* ── Bottom fade into the next section ─────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }} />

      {/* ── Hero content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 pt-28 pb-44 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="fade-up-1 mb-8">
          <div className="mx-auto flex items-center justify-center rounded-full overflow-hidden"
            style={{
              width: 180, height: 180,
              background: "#ffffff",
              boxShadow: "0 0 60px rgba(255,255,255,0.45)",
            }}>
            <Image
              src="/logo.png"
              alt="DevOpsDays Miami"
              width={168}
              height={168}
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        {/* Location pill */}
        <div className="fade-up-1 inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1.5px solid rgba(37,208,230,0.45)",
            backdropFilter: "blur(8px)",
          }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <circle cx="6" cy="5" r="2.5" fill="#25D0E6"/>
            <path d="M6 0C3.79 0 2 1.79 2 4c0 2.96 4 8 4 8s4-5.04 4-8c0-2.21-1.79-4-4-4z" fill="#25D0E6" opacity="0.35"/>
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#071A3A" }}>
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-2 font-black tracking-tight leading-[0.95] mb-6"
          style={{ fontSize: "clamp(44px, 7.5vw, 88px)" }}>
          <span style={{ color: "#082B5C", display: "block", textShadow: "0 0 30px rgba(255,255,255,0.45)" }}>DevOpsDays is</span>
          <span className="grad-hero block mt-1">coming to Miami</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up-3 text-lg sm:text-xl max-w-2xl leading-relaxed mb-3 font-semibold"
          style={{ color: "#071A3A", textShadow: "0 1px 10px rgba(255,255,255,0.60)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="fade-up-3 text-base max-w-xl leading-relaxed mb-11"
          style={{ color: "rgba(7,26,58,0.70)", textShadow: "0 1px 8px rgba(255,255,255,0.55)" }}>
          A practitioner-first, community-driven tech conference taking shape in Miami.
          Be among the first to know.
        </p>

        {/* CTAs */}
        <div className="fade-up-4 flex flex-col sm:flex-row items-center gap-3 mb-12">
          <a href="#waitlist" className="btn btn-primary w-full sm:w-auto" style={{ padding: "16px 38px", fontSize: 15 }}>
            Join the Waitlist →
          </a>
          <button onClick={openModal}
            className="btn w-full sm:w-auto"
            style={{
              padding: "15px 30px", fontSize: 15, fontWeight: 700,
              background: "rgba(255,255,255,0.78)",
              border: "2px solid rgba(7,26,58,0.20)",
              color: "#071A3A",
              backdropFilter: "blur(8px)",
              borderRadius: 10,
            }}>
            Sponsorship Information →
          </button>
        </div>

        {/* Topic tags */}
        <div className="fade-up-4 flex flex-wrap items-center justify-center gap-2">
          {TAGS.map(t => (
            <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.70)",
                border: "1px solid rgba(37,208,230,0.35)",
                color: "#071A3A",
                backdropFilter: "blur(4px)",
              }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
