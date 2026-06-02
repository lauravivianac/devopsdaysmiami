"use client";

import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";
import Particles from "./Particles";

// Miami Beach waterfront / Biscayne Bay at golden hour — no cars, no roads.
// Swap PHOTO_URL if you find a better shot. Good Unsplash keywords: "miami beach sunset skyline"
const PHOTO_URL =
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2400&q=88&crop=entropy";

const TAGS = [
  "Platform Engineering", "Cloud Native", "SRE",
  "AI Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#031626" }}>

      {/* ── Photography layer ──────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={PHOTO_URL}
          alt="Miami Beach skyline at golden hour"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Base overlay — lighter than before so beach shows through */}
        <div className="absolute inset-0" style={{ background: "rgba(3,22,38,0.52)" }} />
        {/* Warm sunset tint — coral/orange wash from bottom-right */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(200deg, rgba(255,140,60,0.12) 0%, transparent 50%, rgba(0,100,180,0.18) 100%)"
        }} />
        {/* Vertical gradient: darker top/bottom, bright center */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(3,22,38,0.65) 0%, rgba(3,22,38,0.10) 35%, rgba(3,22,38,0.30) 65%, rgba(3,22,38,0.92) 100%)"
        }} />
        {/* Left edge fade for text legibility */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(90deg, rgba(3,22,38,0.55) 0%, transparent 55%)"
        }} />
      </div>

      {/* ── Aurora blobs — warm Miami palette ─────────────────────────────────── */}
      {/* Sunset coral — bottom right */}
      <div className="aurora-sunset aurora-pulse"
        style={{ width:"65vw", height:"65vw", maxWidth:800, maxHeight:800, right:"-10%", bottom:"-10%", animationDelay:"0s" }} />
      {/* Ocean blue — top left */}
      <div className="aurora-ocean aurora-pulse"
        style={{ width:"55vw", height:"55vw", maxWidth:700, maxHeight:700, left:"-8%", top:"-15%", animationDelay:"4s" }} />
      {/* Aqua accent — center */}
      <div className="aurora-aqua"
        style={{ width:"40vw", height:"40vw", maxWidth:520, maxHeight:520, left:"40%", top:"25%" }} />

      {/* ── Particles (warm coastal tones) ────────────────────────────────────── */}
      <Particles count={45} />

      {/* ── Hero content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-40 flex flex-col items-center text-center">

        {/* Logo mark */}
        <div className="fade-up-1 mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 flex items-center justify-center overflow-hidden mx-auto"
            style={{ boxShadow: "0 0 50px rgba(255,140,60,0.30), 0 0 20px rgba(0,180,220,0.20)" }}>
            <Image
              src="/logo.png"
              alt="DevOpsDays Miami"
              width={80}
              height={80}
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        {/* Status pill */}
        <div className="fade-up-1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full"
          style={{ background: "rgba(0,180,220,0.12)", border: "1px solid rgba(0,180,220,0.30)" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#38d9f0" }} />
          <span className="label" style={{ color: "#38d9f0", letterSpacing: "0.2em" }}>
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-2 font-black tracking-tight leading-[0.95] mb-7"
          style={{ fontSize: "clamp(48px, 8vw, 96px)", textShadow: "0 4px 40px rgba(3,22,38,0.7)" }}>
          <span className="text-white block">DevOpsDays is</span>
          <span className="block mt-1" style={{
            background: "linear-gradient(110deg, #38d9f0 0%, #ff8c5a 55%, #ffd060 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            coming to Miami
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up-3 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4 font-medium"
          style={{ color: "rgba(237,245,255,0.90)", textShadow: "0 2px 20px rgba(3,22,38,0.8)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="fade-up-3 text-base max-w-xl leading-relaxed mb-12"
          style={{ color: "rgba(237,245,255,0.58)", textShadow: "0 2px 16px rgba(3,22,38,0.8)" }}>
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
            <span key={t}
              className="text-xs font-medium px-3 py-1.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(237,245,255,0.50)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-36 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050d18)" }} />
    </section>
  );
}
