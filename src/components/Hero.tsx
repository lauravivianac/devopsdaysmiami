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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">

      {/* ── Layered sunset gradient background ──────────────────────────────── */}
      {/* Sky: deep navy → ocean blue at top */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(175deg, #051525 0%, #083566 30%, #0a4a8a 55%, #0d6ab0 72%, #1a8fcc 85%, #22a8d4 95%, #60c4e8 100%)"
      }} />
      {/* Horizon: warm sunset glow layered over the blue */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, transparent 40%, rgba(255,140,50,0.25) 65%, rgba(255,90,30,0.35) 80%, rgba(255,60,20,0.20) 90%, rgba(20,30,55,0.80) 100%)"
      }} />
      {/* Ocean floor — deep teal at bottom */}
      <div className="absolute bottom-0 inset-x-0" style={{
        height: "35%",
        background: "linear-gradient(to top, #040e1c 0%, #071e38 50%, transparent 100%)"
      }} />
      {/* Warm left edge glow — sunset from the side */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 70% at -5% 60%, rgba(255,130,40,0.22) 0%, transparent 70%)"
      }} />
      {/* Right edge — ocean depth */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 50% 60% at 105% 40%, rgba(0,80,160,0.25) 0%, transparent 70%)"
      }} />

      {/* ── Stylized horizon / ocean wave band ──────────────────────────────── */}
      <div className="absolute inset-x-0" style={{ bottom: "22%", height: 3, opacity: 0.30 }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,200,100,0.8) 30%, rgba(255,220,140,1) 50%, rgba(255,200,100,0.8) 70%, transparent)" }} />
      </div>
      {/* Subtle wave reflection on water surface */}
      <div className="absolute inset-x-0" style={{ bottom: "14%", height: 60 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full" aria-hidden>
          <path
            d="M0 40 Q180 20 360 38 Q540 55 720 35 Q900 15 1080 38 Q1260 58 1440 36 L1440 60 L0 60 Z"
            fill="rgba(10,70,130,0.18)"
          />
          <path
            d="M0 50 Q200 35 400 48 Q600 60 800 44 Q1000 30 1200 48 Q1350 58 1440 50 L1440 60 L0 60 Z"
            fill="rgba(5,40,90,0.22)"
          />
        </svg>
      </div>

      {/* ── Warm aurora glows ────────────────────────────────────────────────── */}
      <div className="aurora-sunset aurora-pulse"
        style={{ width:"70vw", height:"50vw", maxWidth:900, maxHeight:650, right:"-15%", bottom:"10%", animationDelay:"0s" }} />
      <div className="aurora-ocean aurora-pulse"
        style={{ width:"60vw", height:"60vw", maxWidth:800, maxHeight:800, left:"-12%", top:"-20%", animationDelay:"4s" }} />
      <div className="aurora-aqua"
        style={{ width:"45vw", height:"35vw", maxWidth:580, maxHeight:450, left:"30%", top:"10%" }} />

      {/* ── Particles ────────────────────────────────────────────────────────── */}
      <Particles count={40} />

      {/* ── Content ──────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-40 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="fade-up-1 mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 flex items-center justify-center overflow-hidden mx-auto"
            style={{ boxShadow: "0 0 50px rgba(255,140,50,0.35), 0 0 20px rgba(0,180,220,0.25)" }}>
            <Image src="/logo.png" alt="DevOpsDays Miami" width={80} height={80} className="object-contain p-1" priority />
          </div>
        </div>

        {/* Pill badge */}
        <div className="fade-up-1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full"
          style={{ background: "rgba(0,180,220,0.14)", border: "1px solid rgba(0,180,220,0.35)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#38d9f0" }} />
          <span className="label" style={{ color: "#38d9f0", letterSpacing: "0.2em" }}>
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-2 font-black tracking-tight leading-[0.95] mb-7"
          style={{ fontSize: "clamp(48px, 8vw, 96px)", textShadow: "0 4px 40px rgba(3,15,35,0.7)" }}>
          <span className="text-white block">DevOpsDays is</span>
          <span className="block mt-2" style={{
            background: "linear-gradient(110deg, #38d9f0 0%, #ff9050 58%, #ffd060 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            coming to Miami
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up-3 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4 font-medium"
          style={{ color: "rgba(220,238,255,0.92)", textShadow: "0 2px 24px rgba(3,15,40,0.85)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="fade-up-3 text-base max-w-xl leading-relaxed mb-12"
          style={{ color: "rgba(200,225,255,0.60)", textShadow: "0 2px 16px rgba(3,15,40,0.85)" }}>
          A practitioner-first, community-driven tech conference taking shape in Miami.
          Be among the first to know.
        </p>

        {/* CTAs */}
        <div className="fade-up-4 flex flex-col sm:flex-row items-center gap-3 mb-14">
          <a href="#waitlist" className="btn btn-primary w-full sm:w-auto" style={{ padding: "16px 36px", fontSize: 15 }}>
            Join the Waitlist →
          </a>
          <button onClick={openModal} className="btn btn-ghost w-full sm:w-auto" style={{ padding: "15px 32px", fontSize: 15 }}>
            Sponsorship Information
          </button>
        </div>

        {/* Topic tags */}
        <div className="fade-up-4 flex flex-wrap items-center justify-center gap-2">
          {TAGS.map(t => (
            <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(220,238,255,0.55)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080f1e)" }} />
    </section>
  );
}
