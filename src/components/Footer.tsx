import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#020e1c" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(0,207,228,0.35), transparent)"
      }}/>
      <div className="absolute inset-0 dot-grid-dark opacity-20"/>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden">
              <Image src="/logo.png" alt="DevOpsDays Miami" width={38} height={38} className="object-contain"/>
            </div>
            <div>
              <div>
                <span className="text-[#00cfe4] font-black text-base">DevOpsDays</span>
                <span className="text-[#f5c340] font-black text-base"> Miami</span>
              </div>
              <p className="text-slate-600 text-xs">Community-driven. Engineering-focused. Coming soon.</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-1">
            {[["About","#about"],["Topics","#topics"],["Miami","#miami"],["Sponsors","#sponsors"],["Waitlist","#waitlist"]].map(([l,h]) => (
              <a key={l} href={h} className="px-3 py-1.5 text-sm text-slate-500 hover:text-[#00cfe4] rounded-lg hover:bg-white/4 transition-all">
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">© {new Date().getFullYear()} DevOpsDays Miami.</p>
          <p className="text-slate-700 text-xs">DevOpsDays is a trademark of the DevOpsDays community.</p>
        </div>
      </div>
    </footer>
  );
}
