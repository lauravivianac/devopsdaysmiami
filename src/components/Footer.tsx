import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#010e1e" }} className="border-t border-white/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">

          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
              <Image src="/logo.png" alt="DevOpsDays Miami" width={34} height={34} className="object-contain"/>
            </div>
            <div>
              <div className="text-[#38d9f0] font-black text-sm tracking-tight">DevOpsDays
                <span className="text-[#f5c136]"> Miami</span>
              </div>
              <div className="text-[#2a4460] text-xs">Community-driven. Engineering-focused.</div>
            </div>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-1">
            {[["About","#about"],["Topics","#topics"],["Miami","#miami"],["Sponsors","#sponsors"],["Waitlist","#waitlist"]].map(([l,h]) => (
              <a key={l} href={h}
                className="px-3 py-2 text-sm text-[#2a4460] hover:text-[#38d9f0] transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#1a3050] text-xs">© {new Date().getFullYear()} DevOpsDays Miami.</p>
          <p className="text-[#1a3050] text-xs">DevOpsDays is a trademark of the DevOpsDays community.</p>
        </div>
      </div>
    </footer>
  );
}
