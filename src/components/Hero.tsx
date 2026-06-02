"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";
import HeroBg from "./HeroBg";

const BADGES = [
  "Platform Engineering","Cloud Native","SRE & Reliability",
  "AI for Engineering","FinOps","DevOps Culture","Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBg />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20 pb-44">

        {/* Coming soon chip */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#00cfe4] animate-pulse"/>
          <span className="text-[#00cfe4] text-xs font-bold tracking-widest uppercase">
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight leading-[1.04] mb-6"
          style={{ textShadow: "0 2px 24px rgba(1,8,20,0.7)" }}>
          <span className="text-white">DevOpsDays is</span>
          <br/>
          <span className="text-grad-hero">coming to Miami</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-3 leading-relaxed font-medium"
          style={{ textShadow: "0 2px 16px rgba(1,8,20,0.8)" }}>
          Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet.
        </p>
        <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto mb-11 leading-relaxed"
          style={{ textShadow: "0 2px 12px rgba(1,8,20,0.9)" }}>
          A community-driven tech event is taking shape in Miami. Be the first to know
          about speakers, CFP and ticket launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a href="#waitlist" className="btn-cta px-9 py-4 text-base w-full sm:w-auto">
            Join the waitlist →
          </a>
          <button onClick={openModal} className="btn-outline-white px-9 py-4 text-base w-full sm:w-auto">
            Become a sponsor
          </button>
        </div>

        {/* Topic pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {BADGES.map(b => (
            <span key={b}
              className="text-xs px-3.5 py-1.5 rounded-full font-medium text-white/70 border border-white/15 bg-white/5 backdrop-blur-sm">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
