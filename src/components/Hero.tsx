"use client";

import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";
import Particles from "./Particles";

// Miami Brickell skyline at dusk — water-level view, no cars
// Swap this URL with any high-res Miami skyline photo (aerial or waterfront)
const PHOTO_URL =
  "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=2400&q=88&crop=top";

const TAGS = [
  "Platform Engineering", "Cloud Native", "SRE",
  "AI Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050d18]">

      {/* ── Photography layer ─────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={PHOTO_URL}
          alt="Miami skyline at sunset"
          fill
          priority
          quality={85}
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Multi-layer overlays for depth and readability */}
        {/* Base dark */}
        <div className="absolute inset-0 bg-[#050d18]/72" />
        {/* Gradient: darker top and bottom */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(5,13,24,0.60) 0%, rgba(5,13,24,0.20) 38%, rgba(5,13,24,0.45) 70%, rgba(5,13,24,0.95) 100%)"
        }} />
        {/* Left edge darkening */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(90deg, rgba(5,13,24,0.50) 0%, transparent 50%)"
        }} />
      </div>

      {/* ── Stripe aurora gradient blobs ──────────────────────────────────── */}
      <div className="aurora-cyan aurora-pulse" style={{ width:"70vw", height:"70vw", maxWidth:900, maxHeight:900, right:"-15%", top:"-20%" }} />
      <div className="aurora-coral aurora-pulse" style={{ width:"55vw", height:"55vw", maxWidth:700, maxHeight:700, left:"-10%", bottom:"5%", animationDelay:"3s" }} />
      <div className="aurora-purple" style={{ width:"50vw", height:"50vw", maxWidth:640, maxHeight:640, left:"35%", top:"20%" }} />

      {/* ── Subtle particles ──────────────────────────────────────────────── */}
      <Particles count={50} />

      {/* ── Hero content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-40 flex flex-col items-center text-center">

        {/* Logo mark */}
        <div className="fade-up-1 mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 flex items-center justify-center shadow-[0_0_60px_rgba(0,184,212,0.25)] overflow-hidden mx-auto">
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
        <div className="fade-up-1 inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-[#00b8d4]/25 bg-[#00b8d4]/8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00b8d4] animate-pulse" />
          <span className="label" style={{ color:"#00b8d4", letterSpacing:"0.2em" }}>
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="fade-up-2 font-black tracking-tight leading-[0.95] mb-7"
          style={{ fontSize: "clamp(52px, 8vw, 96px)", textShadow:"0 4px 40px rgba(5,13,24,0.8)" }}>
          <span className="text-white block">DevOpsDays is</span>
          <span className="grad-cyan-coral block mt-1">coming to Miami</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up-3 text-lg sm:text-xl max-w-2xl leading-relaxed mb-4 font-medium"
          style={{ color:"rgba(237,242,247,0.88)", textShadow:"0 2px 20px rgba(5,13,24,0.9)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="fade-up-3 text-base max-w-xl leading-relaxed mb-12"
          style={{ color:"rgba(237,242,247,0.55)", textShadow:"0 2px 16px rgba(5,13,24,0.9)" }}>
          A practitioner-first, community-driven tech conference taking shape in Miami.
          Be among the first to know.
        </p>

        {/* CTAs — one primary, one secondary */}
        <div className="fade-up-4 flex flex-col sm:flex-row items-center gap-3 mb-14">
          <a href="#waitlist" className="btn btn-primary w-full sm:w-auto" style={{ padding:"16px 36px", fontSize:15 }}>
            Join the Waitlist →
          </a>
          <button onClick={openModal} className="btn btn-ghost w-full sm:w-auto" style={{ padding:"15px 32px", fontSize:15 }}>
            Sponsorship Information
          </button>
        </div>

        {/* Topic tags */}
        <div className="fade-up-4 flex flex-wrap items-center justify-center gap-2">
          {TAGS.map(t => (
            <span key={t}
              className="text-xs font-medium px-3 py-1.5 rounded-md"
              style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", color:"rgba(237,242,247,0.45)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background:"linear-gradient(to bottom, transparent, #050d18)" }} />
    </section>
  );
}
