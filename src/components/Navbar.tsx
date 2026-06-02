"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050d1a]/90 backdrop-blur-md border-b border-[#1e3a5f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-[#00d4ff] font-bold text-lg tracking-tight">
              DevOpsDays
            </span>
            <span className="text-white font-bold text-lg tracking-tight">
              Miami
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-slate-300 hover:text-[#00d4ff] transition-colors"
            >
              About
            </a>
            <a
              href="#topics"
              className="text-sm text-slate-300 hover:text-[#00d4ff] transition-colors"
            >
              Topics
            </a>
            <a
              href="#miami"
              className="text-sm text-slate-300 hover:text-[#00d4ff] transition-colors"
            >
              Miami
            </a>
            <a
              href="#sponsors"
              className="text-sm text-slate-300 hover:text-[#00d4ff] transition-colors"
            >
              Sponsors
            </a>
          </div>

          <a
            href="#waitlist"
            className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
