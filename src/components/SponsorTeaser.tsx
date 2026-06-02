const benefits = [
  "Brand visibility among senior engineers and tech leaders",
  "Speaking and workshop opportunities",
  "Direct access to the DevOps & Platform Engineering community",
  "Regional reach across North America and Latin America",
];

export default function SponsorTeaser() {
  return (
    <section id="sponsors" className="bg-[#031B2E] relative overflow-hidden">
      {/* Top wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 0 C360 60 1080 0 1440 40 L1440 0 Z" fill="#FFF7EA" />
      </svg>

      <div className="py-20 relative">
        <div className="absolute inset-0 grid-circuit opacity-40" />
        {/* Coral glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(255,111,97,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FFD18A] text-sm font-bold tracking-widest uppercase mb-4 block">
            Sponsorship
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Reach the people{" "}
            <span className="text-[#FFD18A]">building the future</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect your brand with a highly technical, influential and
            fast-growing community of engineering and technology leaders.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <span className="text-[#FFD18A] mt-0.5 shrink-0 font-bold">✦</span>
                <span className="text-slate-300 text-sm">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#waitlist"
            className="inline-block text-[#031B2E] font-bold text-base px-10 py-4 rounded-full hover:opacity-90 hover:-translate-y-1 transition-all duration-300 shadow-lg"
            style={{ background: "linear-gradient(135deg,#FFD18A,#FF6F61)" }}
          >
            Request sponsorship info →
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 60 C360 0 1080 60 1440 20 L1440 60 Z" fill="#FFF7EA" />
      </svg>
    </section>
  );
}
