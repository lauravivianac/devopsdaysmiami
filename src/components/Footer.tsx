import Image from "next/image";

const LINKS = [
  { l:"About",    h:"#about"   },
  { l:"Topics",   h:"#topics"  },
  { l:"Miami",    h:"#miami"   },
  { l:"Sponsors", h:"#sponsors"},
  { l:"Waitlist", h:"#waitlist"},
];

export default function Footer() {
  return (
    <footer style={{ background:"#050d18", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-14">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="DevOpsDays Miami" width={30} height={30} className="object-contain"/>
            </div>
            <div>
              <p className="font-black text-sm" style={{color:"#00b8d4"}}>
                DevOpsDays <span style={{color:"#f5c342"}}>Miami</span>
              </p>
              <p className="text-xs mt-0.5" style={{color:"var(--text-4)"}}>
                Community-driven · Engineering-focused · Coming soon
              </p>
            </div>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-1">
            {LINKS.map(({l,h}) => (
              <a key={l} href={h}
                className="px-3.5 py-2 text-sm rounded-lg transition-colors hover:text-white/80"
                style={{color:"var(--text-3)"}}>
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{borderTop:"1px solid rgba(255,255,255,0.04)"}}>
          <p className="text-xs" style={{color:"var(--text-4)"}}>
            © {new Date().getFullYear()} DevOpsDays Miami.
          </p>
          <p className="text-xs" style={{color:"var(--text-4)"}}>
            DevOpsDays is a trademark of the DevOpsDays community.
          </p>
        </div>
      </div>
    </footer>
  );
}
