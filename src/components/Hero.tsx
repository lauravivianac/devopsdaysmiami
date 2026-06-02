"use client";

import { useSponsorModal } from "@/context/SponsorModalContext";
import HeroBg from "./HeroBg";

const badges = [
  "Platform Engineering",
  "Cloud Native",
  "SRE",
  "AI for Engineering",
  "FinOps",
  "DevOps Culture",
  "Security",
];

export default function Hero() {
  const { openModal } = useSponsorModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBg />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-40">

        {/* Coming soon chip */}
        <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full"
          style={{ background: "rgba(0,213,232,0.12)", border: "1px solid rgba(0,213,232,0.35)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#00D5E8] animate-pulse" />
          <span className="text-[#00D5E8] text-sm font-semibold tracking-widest uppercase">
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] mb-5 drop-shadow-lg">
          <span className="text-white">DevOpsDays is </span>
          <br />
          <span className="gradient-text-miami">coming to Miami</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-4 leading-relaxed font-medium drop-shadow">
          Where DevOps, Platform Engineering, Cloud, AI and engineering
          leadership meet.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10 drop-shadow">
          A community-driven tech event is taking shape in Miami. Be the first
          to know about speakers, sponsorship opportunities, CFP and ticket launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#waitlist"
            className="gradient-btn-primary text-white font-bold text-base px-9 py-4 rounded-full w-full sm:w-auto shadow-xl"
          >
            Join the waitlist →
          </a>
          <button
            onClick={openModal}
            className="btn-outline-aqua font-semibold text-base px-9 py-4 rounded-full w-full sm:w-auto"
          >
            Become a sponsor
          </button>
        </div>

        {/* Topic badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="text-xs px-3 py-1.5 rounded-full font-semibold text-[#FFD18A]"
              style={{ background: "rgba(255,209,138,0.12)", border: "1px solid rgba(255,209,138,0.25)" }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
