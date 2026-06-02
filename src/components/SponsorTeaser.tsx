const benefits = [
  "Brand visibility among senior engineers and tech leaders",
  "Speaking and workshop opportunities",
  "Direct access to the DevOps & Platform Engineering community",
  "Regional reach across North America and Latin America",
];

export default function SponsorTeaser() {
  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c] to-[#050d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#a78bfa] text-sm font-semibold tracking-widest uppercase mb-4 block">
          Sponsorship
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
          Reach the people{" "}
          <span className="text-[#a78bfa]">building the future</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect your brand with a highly technical, influential and
          fast-growing community of engineering and technology leaders.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span className="text-[#a78bfa] mt-0.5 shrink-0">✦</span>
              <span className="text-slate-300 text-sm">{b}</span>
            </div>
          ))}
        </div>

        <a
          href="#waitlist"
          className="inline-block bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white font-bold text-base px-10 py-4 rounded-full hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
        >
          Request sponsorship info →
        </a>
      </div>
    </section>
  );
}
