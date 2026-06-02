"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";
import HeroBg from "./HeroBg";

const BADGES = [
  "Platform Engineering", "Cloud Native", "SRE & Reliability",
  "AI for Engineering", "FinOps", "DevOps Culture", "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBg />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center pt-24 pb-48">

        {/* Event chip */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest uppercase text-[#00c8e0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00c8e0] animate-pulse" />
          Coming Soon · Miami, FL
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.05] mb-6">
          <span className="text-white">DevOpsDays is</span>
          <br />
          <span className="text-gradient-hero">coming to Miami</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-3 leading-relaxed"
          style={{ textShadow: "0 2px 16px rgba(4,15,28,0.9)" }}
        >
          Where DevOps, Platform Engineering, Cloud, AI and engineering
          leadership meet.
        </p>
        <p
          className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(4,15,28,0.9)" }}
        >
          A community-driven tech event is taking shape in Miami. Be the first
          to know about speakers, CFP and ticket launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a href="#waitlist" className="btn-primary px-8 py-4 text-base w-full sm:w-auto">
            <span>Join the waitlist →</span>
          </a>
          <button onClick={openModal} className="btn-ghost px-8 py-4 text-base w-full sm:w-auto">
            Become a sponsor
          </button>
        </div>

        {/* Topic badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {BADGES.map((b) => (
            <span
              key={b}
              className="text-xs px-3 py-1.5 rounded-full font-medium text-slate-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
