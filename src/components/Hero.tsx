"use client";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">

      {/* Circuit grid overlay */}
      <div className="absolute inset-0 grid-circuit opacity-60" />

      {/* Sun / glow orb */}
      <div className="absolute right-[8%] top-[14%] w-64 h-64 rounded-full sun-pulse pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FFD18A 0%, #FF6F61 40%, transparent 70%)",
          opacity: 0.35,
        }}
      />

      {/* Aqua ocean glow */}
      <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00D5E8 0%, transparent 65%)",
          opacity: 0.15,
        }}
      />

      {/* Abstract wave shapes */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full wave-float"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 80 C240 140 480 20 720 80 C960 140 1200 20 1440 80 L1440 160 L0 160 Z"
          fill="rgba(0,213,232,0.12)"
        />
        <path
          d="M0 100 C360 160 720 40 1080 100 C1260 130 1380 70 1440 100 L1440 160 L0 160 Z"
          fill="rgba(0,103,177,0.18)"
        />
        <path
          d="M0 130 C200 110 500 150 720 130 C940 110 1200 150 1440 130 L1440 160 L0 160 Z"
          fill="rgba(3,27,46,0.9)"
        />
      </svg>

      {/* Skyline silhouette */}
      <svg
        className="absolute bottom-28 left-0 right-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200 L0 140 L60 140 L60 100 L80 100 L80 80 L100 80 L100 60 L120 60 L120 80
             L160 80 L160 50 L180 50 L180 30 L200 30 L200 50 L220 50 L220 40 L240 40
             L240 20 L260 20 L260 40 L280 40 L280 60 L320 60 L320 90 L360 90 L360 70
             L380 70 L380 50 L400 50 L400 70 L440 70 L440 100 L500 100 L500 80 L520 80
             L520 60 L540 60 L540 40 L560 40 L560 60 L580 60 L580 80 L620 80 L620 100
             L700 100 L700 120 L800 120 L800 100 L820 100 L820 70 L840 70 L840 50
             L860 50 L860 30 L880 30 L880 50 L900 50 L900 70 L940 70 L940 90 L1000 90
             L1000 110 L1100 110 L1100 130 L1200 130 L1200 110 L1220 110 L1220 90
             L1240 90 L1240 70 L1260 70 L1260 90 L1300 90 L1300 110 L1380 110
             L1380 130 L1440 130 L1440 200 Z"
          fill="#00D5E8"
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          {/*
            LOGO: Place public/logo.png in the public/ folder.
            This renders the logo at 120×120px in the hero section.
          */}
          <div className="w-28 h-28 relative drop-shadow-2xl">
            <Image
              src="/logo.png"
              alt="DevOpsDays Miami"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Coming soon chip */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
          style={{ background: "rgba(0,213,232,0.12)", border: "1px solid rgba(0,213,232,0.35)" }}
        >
          <span className="w-2 h-2 rounded-full bg-[#00D5E8] animate-pulse" />
          <span className="text-[#00D5E8] text-sm font-semibold tracking-widest uppercase">
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] mb-5">
          <span className="text-white">DevOpsDays is </span>
          <br />
          <span className="gradient-text-miami">coming to Miami</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          Where DevOps, Platform Engineering, Cloud, AI and engineering
          leadership meet.
        </p>
        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10">
          A community-driven tech event is taking shape in Miami. Be the first
          to know about speakers, sponsorship opportunities, CFP and ticket
          launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#waitlist"
            className="gradient-btn-primary text-white font-bold text-base px-9 py-4 rounded-full w-full sm:w-auto shadow-lg"
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
        <div className="flex flex-wrap items-center justify-center gap-2 pb-32">
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
