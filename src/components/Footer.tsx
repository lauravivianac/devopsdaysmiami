import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#031B2E] relative overflow-hidden">
      {/* Top wave */}
      <svg className="w-full" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none">
        <path d="M0 0 C480 50 960 0 1440 30 L1440 0 Z" fill="#FFF7EA" />
      </svg>

      {/* Circuit overlay */}
      <div className="absolute inset-0 grid-circuit opacity-30" />

      {/* Aqua line top */}
      <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D5E8]/30 to-transparent" />

      <div className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            {/*
              LOGO: Reads from public/logo.png
              Replace with your actual logo file at that path.
            */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="DevOpsDays Miami"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#00D5E8] font-black text-xl">DevOpsDays</span>
                  <span className="text-[#FFD18A] font-black text-xl">Miami</span>
                </div>
                <p className="text-slate-500 text-xs">Community-driven. Engineering-focused. Coming soon.</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-400">
            {[
              ["About",    "#about"],
              ["Topics",   "#topics"],
              ["Miami",    "#miami"],
              ["Sponsors", "#sponsors"],
              ["Waitlist", "#waitlist"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-[#00D5E8] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} DevOpsDays Miami.</span>
          <span>DevOpsDays is a trademark of the DevOpsDays community.</span>
        </div>
      </div>
    </footer>
  );
}
