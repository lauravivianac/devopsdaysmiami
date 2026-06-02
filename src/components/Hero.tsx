"use client";

import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";
import Particles from "./Particles";

const TAGS = [
  "Platform Engineering", "Cloud Native", "SRE",
  "AI Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Bright Miami beach / sunset sky gradient ───────────────────────────── */}
      {/* Sky layer: warm peach → golden → coral → turquoise horizon */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #FFE0A0 0%, #FFB868 14%, #FF9858 26%, #FFC878 34%, #70D4F0 46%, #28B8DA 57%, #18A0CC 68%, #1090C0 78%, #0C84B8 86%, #E8C898 93%, #D4A870 100%)"
      }} />

      {/* Sun glow — warm orb lower-left (the 'sunset sun') */}
      <div className="absolute" style={{
        width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
        left: "-5%", bottom: "12%",
        background: "radial-gradient(ellipse, rgba(255,210,80,0.65) 0%, rgba(255,160,50,0.35) 30%, rgba(255,120,40,0.12) 55%, transparent 72%)",
        borderRadius: "50%",
        filter: "blur(3px)",
        pointerEvents: "none",
      }} />

      {/* Sky atmospheric haze — upper right (peach clouds) */}
      <div className="absolute" style={{
        width: "60vw", height: "45vw", maxWidth: 800, maxHeight: 600,
        right: "-8%", top: "-5%",
        background: "radial-gradient(ellipse, rgba(255,220,160,0.50) 0%, rgba(255,180,120,0.25) 40%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(2px)",
        pointerEvents: "none",
      }} />

      {/* Aqua ocean shimmer — center-right */}
      <div className="absolute" style={{
        width: "50vw", height: "40vw", maxWidth: 650, maxHeight: 500,
        right: "5%", top: "40%",
        background: "radial-gradient(ellipse, rgba(37,208,230,0.20) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      {/* ── Stylized Miami skyline silhouette at horizon ───────────────────────── */}
      <div className="absolute inset-x-0" style={{ bottom: "28%", zIndex: 1 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full" style={{ height: 90 }} aria-hidden>
          <defs>
            <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#071A3A" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#071A3A" stopOpacity="0.30"/>
            </linearGradient>
          </defs>
          {/* Building cluster — right side (Brickell / downtown) */}
          <rect x="820"  y="30"  width="18" height="90" fill="url(#skylineGrad)"/>
          <rect x="842"  y="10"  width="22" height="110" fill="url(#skylineGrad)"/>
          <rect x="868"  y="20"  width="16" height="100" fill="url(#skylineGrad)"/>
          <rect x="888"  y="5"   width="20" height="115" fill="url(#skylineGrad)"/>
          <rect x="912"  y="18"  width="24" height="102" fill="url(#skylineGrad)"/>
          <rect x="940"  y="35"  width="15" height="85"  fill="url(#skylineGrad)"/>
          <rect x="960"  y="12"  width="18" height="108" fill="url(#skylineGrad)"/>
          <rect x="982"  y="25"  width="20" height="95"  fill="url(#skylineGrad)"/>
          <rect x="1006" y="40"  width="14" height="80"  fill="url(#skylineGrad)"/>
          <rect x="1024" y="15"  width="22" height="105" fill="url(#skylineGrad)"/>
          <rect x="1050" y="28"  width="16" height="92"  fill="url(#skylineGrad)"/>
          <rect x="1070" y="45"  width="20" height="75"  fill="url(#skylineGrad)"/>
          <rect x="1094" y="20"  width="18" height="100" fill="url(#skylineGrad)"/>
          <rect x="1116" y="38"  width="15" height="82"  fill="url(#skylineGrad)"/>
          <rect x="1134" y="55"  width="22" height="65"  fill="url(#skylineGrad)"/>
          <rect x="1160" y="42"  width="16" height="78"  fill="url(#skylineGrad)"/>
          {/* Mid buildings — center */}
          <rect x="620"  y="55"  width="12" height="65"  fill="url(#skylineGrad)"/>
          <rect x="636"  y="45"  width="15" height="75"  fill="url(#skylineGrad)"/>
          <rect x="655"  y="60"  width="10" height="60"  fill="url(#skylineGrad)"/>
          <rect x="668"  y="50"  width="14" height="70"  fill="url(#skylineGrad)"/>
          <rect x="686"  y="40"  width="16" height="80"  fill="url(#skylineGrad)"/>
          <rect x="706"  y="55"  width="12" height="65"  fill="url(#skylineGrad)"/>
          <rect x="722"  y="44"  width="18" height="76"  fill="url(#skylineGrad)"/>
          <rect x="744"  y="58"  width="14" height="62"  fill="url(#skylineGrad)"/>
          <rect x="762"  y="48"  width="16" height="72"  fill="url(#skylineGrad)"/>
          <rect x="782"  y="62"  width="12" height="58"  fill="url(#skylineGrad)"/>
          <rect x="798"  y="38"  width="18" height="82"  fill="url(#skylineGrad)"/>
        </svg>
      </div>

      {/* ── Ocean wave band ────────────────────────────────────────────────────── */}
      <div className="absolute inset-x-0" style={{ bottom: "14%", zIndex: 2 }}>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full" style={{ height: 42 }} aria-hidden>
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
              <stop offset="100%" stopColor="rgba(200,240,255,0.20)"/>
            </linearGradient>
          </defs>
          <path d="M0 28 Q180 10 360 26 Q540 42 720 22 Q900 4 1080 26 Q1260 44 1440 24 L1440 50 L0 50 Z"
            fill="url(#waveGrad)" />
          <path d="M0 36 Q200 22 400 34 Q600 46 800 28 Q1000 12 1200 34 Q1360 46 1440 38 L1440 50 L0 50 Z"
            fill="rgba(180,235,255,0.25)" />
        </svg>
      </div>

      {/* ── Palm silhouettes — left edge ──────────────────────────────────────── */}
      <div className="absolute left-0 bottom-0" style={{ zIndex: 2, width: 200, height: "65%" }}>
        <svg viewBox="0 0 200 400" preserveAspectRatio="xMinYMax meet" className="w-full h-full" aria-hidden>
          <defs>
            <linearGradient id="palmGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A4A20" stopOpacity="0.75"/>
              <stop offset="100%" stopColor="#0D3015" stopOpacity="0.90"/>
            </linearGradient>
          </defs>
          {/* Trunk 1 */}
          <path d="M60 400 Q65 320 72 240 Q78 180 85 140" stroke="#1A4A20" strokeWidth="8" fill="none" strokeOpacity="0.80" strokeLinecap="round"/>
          {/* Fronds 1 */}
          <path d="M85 140 Q40 100 10 80" stroke="#1A5020" strokeWidth="5" fill="none" strokeOpacity="0.75" strokeLinecap="round"/>
          <path d="M85 140 Q55 90 60 55" stroke="#1A5020" strokeWidth="5" fill="none" strokeOpacity="0.75" strokeLinecap="round"/>
          <path d="M85 140 Q100 85 130 65" stroke="#1A5020" strokeWidth="5" fill="none" strokeOpacity="0.75" strokeLinecap="round"/>
          <path d="M85 140 Q115 110 150 105" stroke="#1A5020" strokeWidth="4" fill="none" strokeOpacity="0.65" strokeLinecap="round"/>
          <path d="M85 140 Q70 120 30 118" stroke="#1A5020" strokeWidth="4" fill="none" strokeOpacity="0.65" strokeLinecap="round"/>
          {/* Trunk 2 (background, smaller) */}
          <path d="M20 400 Q28 340 38 280 Q44 230 48 200" stroke="#1A4A20" strokeWidth="5" fill="none" strokeOpacity="0.55" strokeLinecap="round"/>
          <path d="M48 200 Q15 165 -5 145" stroke="#1A5020" strokeWidth="4" fill="none" strokeOpacity="0.50" strokeLinecap="round"/>
          <path d="M48 200 Q30 155 28 120" stroke="#1A5020" strokeWidth="4" fill="none" strokeOpacity="0.50" strokeLinecap="round"/>
          <path d="M48 200 Q72 160 95 145" stroke="#1A5020" strokeWidth="4" fill="none" strokeOpacity="0.50" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Sandy beach strip at bottom ────────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0" style={{
        height: "15%",
        background: "linear-gradient(to top, #D4A060 0%, #E8BC78 60%, transparent 100%)",
        zIndex: 2,
      }} />

      {/* ── Subtle text-readability overlay (very light) ───────────────────────── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(255,240,210,0.18) 0%, rgba(255,255,255,0.10) 40%, rgba(255,255,255,0.06) 70%, rgba(180,220,240,0.08) 100%)",
        zIndex: 3,
      }} />

      {/* ── Particles ─────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0" style={{ zIndex: 4 }}>
        <Particles count={30} />
      </div>

      {/* ── Hero content ──────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-4xl mx-auto px-6 sm:px-10 pt-28 pb-44 flex flex-col items-center text-center" style={{ zIndex: 5 }}>

        {/* Logo — large, prominent brand mark */}
        <div className="fade-up-1 mb-8">
          <div className="mx-auto flex items-center justify-center rounded-full overflow-hidden"
            style={{
              width: 180, height: 180,
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 0 0 6px rgba(255,255,255,0.50), 0 8px 40px rgba(255,138,107,0.35), 0 0 60px rgba(37,208,230,0.20)",
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
            border: "1.5px solid rgba(37,208,230,0.40)",
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
          style={{ fontSize: "clamp(44px, 7.5vw, 88px)", textShadow: "0 2px 16px rgba(255,255,255,0.60)" }}>
          <span style={{ color: "#071A3A", display: "block" }}>DevOpsDays is</span>
          <span className="grad-hero block mt-1">coming to Miami</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up-3 text-lg sm:text-xl max-w-2xl leading-relaxed mb-3 font-semibold"
          style={{ color: "#071A3A", textShadow: "0 1px 8px rgba(255,255,255,0.70)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="fade-up-3 text-base max-w-xl leading-relaxed mb-11"
          style={{ color: "rgba(7,26,58,0.65)", textShadow: "0 1px 8px rgba(255,255,255,0.60)" }}>
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
              background: "rgba(255,255,255,0.72)",
              border: "2px solid rgba(7,26,58,0.25)",
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
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(37,208,230,0.35)",
                color: "#071A3A",
                backdropFilter: "blur(4px)",
              }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into about section */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{ height: 80, zIndex: 6,
        background: "linear-gradient(to bottom, transparent, #ffffff)" }} />
    </section>
  );
}
