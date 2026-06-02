const tracks = [
  {
    icon: "🎟️",
    title: "I want to attend",
    description: "Get early access to tickets, speaker lineup and session announcements.",
    cta: "Notify me",
    bg: "linear-gradient(135deg,#00D5E8,#0067B1)",
    href: "#waitlist",
  },
  {
    icon: "💼",
    title: "I want to sponsor",
    description: "Connect your brand with engineers and tech leaders across the Americas.",
    cta: "Request sponsor info",
    bg: "linear-gradient(135deg,#FF6F61,#c0392b)",
    href: "#sponsors",
  },
  {
    icon: "🎤",
    title: "I want to speak",
    description: "Share your story, project or lessons learned with a practitioner audience.",
    cta: "Submit interest",
    bg: "linear-gradient(135deg,#FFD18A,#FF6F61)",
    href: "#waitlist",
  },
];

export default function CallForInterest() {
  return (
    <section className="py-24 bg-[#FFF7EA] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#031B2E 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#0067B1] text-sm font-bold tracking-widest uppercase mb-4 block">
            Get involved
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#031B2E] leading-tight">
            How do you want to{" "}
            <span className="gradient-text-miami">show up?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <div key={t.title} className="card-cream rounded-3xl p-8 flex flex-col">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: t.bg }}
              >
                {t.icon}
              </div>
              <h3 className="text-[#031B2E] font-black text-xl mb-3">{t.title}</h3>
              <p className="text-[#031B2E]/60 text-sm leading-relaxed mb-8 flex-1">{t.description}</p>
              <a
                href={t.href}
                className="text-white font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-all hover:-translate-y-0.5"
                style={{ background: t.bg }}
              >
                {t.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
