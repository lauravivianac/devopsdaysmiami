export default function Footer() {
  return (
    <footer className="border-t border-[#1e3a5f] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#00d4ff] font-bold text-lg">
                DevOpsDays
              </span>
              <span className="text-white font-bold text-lg">Miami</span>
            </div>
            <p className="text-slate-500 text-sm">
              Community-driven. Engineering-focused. Coming soon.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a
              href="#about"
              className="hover:text-[#00d4ff] transition-colors"
            >
              About
            </a>
            <a
              href="#topics"
              className="hover:text-[#00d4ff] transition-colors"
            >
              Topics
            </a>
            <a
              href="#sponsors"
              className="hover:text-[#00d4ff] transition-colors"
            >
              Sponsors
            </a>
            <a
              href="#waitlist"
              className="hover:text-[#00d4ff] transition-colors"
            >
              Waitlist
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1e3a5f]/50 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} DevOpsDays Miami. DevOpsDays is a
          trademark of the DevOpsDays community.
        </div>
      </div>
    </footer>
  );
}
