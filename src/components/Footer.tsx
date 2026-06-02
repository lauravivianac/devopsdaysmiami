import Image from "next/image";

const LINKS = [
  { label: "About",    href: "#about"   },
  { label: "Topics",   href: "#topics"  },
  { label: "Miami",    href: "#miami"   },
  { label: "Sponsors", href: "#sponsors"},
  { label: "Waitlist", href: "#waitlist"},
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#040f1c" }}>
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Subtle bottom glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,200,224,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 relative rounded-full overflow-hidden"
              style={{ background: "#040f1c", border: "1px solid rgba(0,200,224,0.15)" }}
            >
              <Image
                src="/logo.png"
                alt="DevOpsDays Miami"
                fill
                className="object-contain scale-90"
                style={{ mixBlendMode: "multiply" }}
              />
              <div className="absolute inset-0 rounded-full" style={{ mixBlendMode: "multiply", background: "#040f1c" }} />
            </div>
            <div>
              <div>
                <span className="text-[#00c8e0] font-black text-base">DevOpsDays</span>
                <span className="text-[#f5c842] font-black text-base"> Miami</span>
              </div>
              <p className="text-slate-600 text-xs">Community-driven. Engineering-focused. Coming soon.</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-1">
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-3 py-1.5 text-sm text-slate-500 hover:text-[#00c8e0] rounded-lg hover:bg-white/5 transition-all"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} DevOpsDays Miami.
          </p>
          <p className="text-slate-700 text-xs">
            DevOpsDays is a trademark of the DevOpsDays community.
          </p>
        </div>
      </div>
    </footer>
  );
}
