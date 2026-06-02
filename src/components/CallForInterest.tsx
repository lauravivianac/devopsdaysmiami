const tracks = [
  {
    icon: "🎟️",
    title: "I want to attend",
    description:
      "Get early access to tickets, speaker lineup and session announcements.",
    cta: "Notify me",
    color: "from-[#00d4ff] to-[#0094b3]",
    href: "#waitlist",
    interest: "Attend",
  },
  {
    icon: "💼",
    title: "I want to sponsor",
    description:
      "Connect your brand with engineers and tech leaders across the Americas.",
    cta: "Request sponsor info",
    color: "from-[#7c3aed] to-[#5b21b6]",
    href: "#sponsors",
    interest: "Sponsor",
  },
  {
    icon: "🎤",
    title: "I want to speak",
    description:
      "Share your story, project or lessons learned with a practitioner audience.",
    cta: "Submit interest",
    color: "from-[#ff6b6b] to-[#dc2626]",
    href: "#waitlist",
    interest: "Speak",
  },
];

export default function CallForInterest() {
  return (
    <section className="py-24 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get involved
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            How do you want to{" "}
            <span className="gradient-text">show up?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="card-glass rounded-3xl p-8 flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center text-2xl mb-6`}
              >
                {track.icon}
              </div>
              <h3 className="text-white font-black text-xl mb-3">
                {track.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                {track.description}
              </p>
              <a
                href={track.href}
                className={`bg-gradient-to-r ${track.color} text-white font-bold text-sm px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity`}
              >
                {track.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
