import Link from "next/link";

const badges = [
  "Platform Engineering",
  "Cloud Native",
  "SRE",
  "AI for Engineering",
  "FinOps",
  "DevOps Culture",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7c3aed]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b6b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
          <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
          <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">
            Coming Soon · Miami, FL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
          <span className="text-white">DevOpsDays is </span>
          <br />
          <span className="gradient-text glow-cyan">coming to Miami</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
          Where DevOps, Platform Engineering, Cloud, AI and engineering
          leadership meet.
        </p>

        <p className="text-base text-slate-400 max-w-xl mx-auto mb-10">
          A new community-driven tech event is taking shape in Miami. Be the
          first to know about speakers, sponsorship opportunities, CFP and
          ticket launch.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#waitlist"
            className="btn-primary text-white font-bold text-base px-8 py-4 rounded-full w-full sm:w-auto"
          >
            Join the waitlist →
          </a>
          <a
            href="#sponsors"
            className="btn-outline font-semibold text-base px-8 py-4 rounded-full w-full sm:w-auto"
          >
            Become a sponsor
          </a>
        </div>

        {/* Topic badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-xs px-3 py-1.5 rounded-full border border-[#1e3a5f] bg-[#0d1f3c]/60 text-slate-300 font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1a] to-transparent pointer-events-none" />
    </section>
  );
}
