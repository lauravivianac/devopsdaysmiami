"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

const LINKS = [
  { label: "About",   href: "#about"   },
  { label: "Topics",  href: "#topics"  },
  { label: "Miami",   href: "#miami"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useSponsorModal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-lg flex-shrink-0">
            <Image src="/logo.png" alt="DevOpsDays Miami" width={28} height={28} className="object-contain" />
          </div>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[11px] font-black tracking-[0.12em] uppercase text-[#00b8d4]">DevOpsDays</span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f5c342]">Miami</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-sm text-white/55 hover:text-white/90 rounded-lg transition-colors hover:bg-white/5">
              {l.label}
            </a>
          ))}
          <button onClick={openModal}
            className="px-4 py-2 text-sm text-[#f5c342]/60 hover:text-[#f5c342] rounded-lg transition-colors hover:bg-white/5">
            Sponsors
          </button>
        </div>

        {/* CTA */}
        <a href="#waitlist" className="btn btn-primary btn-sm">
          Join the waitlist
        </a>
      </nav>
    </header>
  );
}
