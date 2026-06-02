"use client";

import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

// Miami skyline at sunset — Unsplash (free to use, no attribution required for products)
// Photo: Roberto Nickson — Miami Beach golden hour skyline
const PHOTO = "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=2400&q=85";

const TAGS = [
  "Platform Engineering", "Cloud Native", "SRE",
  "AI for Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Photography background ──────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={PHOTO}
          alt="Miami Beach skyline at sunset"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Layered overlays — depth, not mud ──────────────────────────── */}
      {/* Base navy tint for readability */}
      <div className="absolute inset-0 bg-[#010c18]/65" />
      {/* Gradient: darker at top and bottom, lighter at horizon */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(1,12,24,0.55) 0%, rgba(1,12,24,0.15) 40%, rgba(1,12,24,0.30) 65%, rgba(1,12,24,0.88) 100%)"
      }} />
      {/* Subtle warm sunset tint (right side) */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 55% 65% at 75% 45%, rgba(249,112,68,0.18) 0%, transparent 65%)"
      }} />
      {/* Aqua tint (left) */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 45% 60% at 15% 55%, rgba(56,217,240,0.10) 0%, transparent 65%)"
      }} />

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 pb-36 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-2xl overflow-hidden flex items-center justify-center ring-4 ring-white/20">
            <Image
              src="/logo.png"
              alt="DevOpsDays Miami"
              width={96}
              height={96}
              className="object-contain p-1"
              priority
            />
          </div>
        </div>

        {/* Event signal */}
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full"
          style={{ background: "rgba(56,217,240,0.12)", border: "1px solid rgba(56,217,240,0.3)" }}>
          <span className="w-2 h-2 rounded-full bg-[#38d9f0] pulse-glow" />
          <span className="text-[#38d9f0] text-xs font-bold tracking-[0.2em] uppercase">
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[56px] sm:text-[72px] lg:text-[88px] font-black tracking-tight leading-[0.96] mb-7"
          style={{ textShadow: "0 4px 32px rgba(1,12,24,0.7)" }}
        >
          <span className="text-white block">DevOpsDays is</span>
          <span className="text-grad-hero block mt-1">coming to Miami</span>
        </h1>

        {/* Emotional subheadline */}
        <p
          className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-4 leading-snug font-semibold"
          style={{ textShadow: "0 2px 20px rgba(1,12,24,0.8)" }}
        >
          Where DevOps, Platform Engineering, Cloud, AI<br className="hidden sm:block" /> and engineering leadership meet.
        </p>
        <p
          className="text-base text-white/60 max-w-xl mx-auto mb-11 leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(1,12,24,0.9)" }}
        >
          A community-driven tech event taking shape in Miami. Be the first to know
          about speakers, the CFP, and ticket launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a href="#waitlist" className="btn-primary text-base px-10 py-4 w-full sm:w-auto">
            Join the waitlist →
          </a>
          <button onClick={openModal} className="btn-secondary text-base px-10 py-4 w-full sm:w-auto">
            Become a sponsor
          </button>
        </div>

        {/* Topic tags */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {TAGS.map(t => (
            <span key={t}
              className="text-xs font-medium px-3.5 py-1.5 rounded-full text-white/65"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#f8f4ef] to-transparent pointer-events-none" />
    </section>
  );
}
