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
    <footer style={{ background: "#040F22", borderTop: "1px solid rgba(37,208,230,0.10)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3.5">
            <div className="rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
              style={{ width: 38, height: 38, background: "rgba(255,255,255,0.92)", boxShadow: "0 0 16px rgba(37,208,230,0.20)" }}>
              <Image src="/logo.png" alt="DevOpsDays Miami" width={32} height={32} className="object-contain"/>
            </div>
            <div>
              <p className="font-black text-sm" style={{ color: "#25D0E6" }}>
                DevOpsDays <span style={{ color: "#FF8A6B" }}>Miami</span>
              </p>
              <p className="text-xs mt-0.5" style={{ color: "rgba(237,242,247,0.25)" }}>
                Community-driven · Engineering-focused · Coming soon
              </p>
            </div>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-1">
            {LINKS.map(({l,h}) => (
              <a key={l} href={h}
                className="px-3.5 py-2 text-sm rounded-lg transition-colors hover:text-white/80"
                style={{ color: "rgba(237,242,247,0.30)" }}>
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(237,242,247,0.20)" }}>
            © {new Date().getFullYear()} DevOpsDays Miami.
          </p>
          <p className="text-xs" style={{ color: "rgba(237,242,247,0.20)" }}>
            DevOpsDays is a trademark of the DevOpsDays community.
          </p>
        </div>
      </div>
    </footer>
  );
}
