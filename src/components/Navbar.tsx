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
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-light" : ""}`}>
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
            style={{
              width: 38, height: 38,
              background: "rgba(255,255,255,0.90)",
              boxShadow: "0 2px 12px rgba(255,138,107,0.25)",
            }}>
            <Image src="/logo.png" alt="DevOpsDays Miami" width={34} height={34} className="object-contain" />
          </div>
          <span className="hidden sm:flex flex-col leading-none gap-0.5">
            <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: scrolled ? "#25D0E6" : "#071A3A" }}>
              DevOpsDays
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.20em", textTransform: "uppercase", color: scrolled ? "#FF8A6B" : "#FF8A6B" }}>
              Miami
            </span>
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
              style={{ color: scrolled ? "#071A3A" : "#071A3A", opacity: scrolled ? 1 : 0.75 }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "#25D0E6"; (e.target as HTMLElement).style.opacity = "1"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "#071A3A"; (e.target as HTMLElement).style.opacity = scrolled ? "1" : "0.75"; }}>
              {l.label}
            </a>
          ))}
          <button onClick={openModal}
            className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
            style={{ color: scrolled ? "#FF8A6B" : "#FF8A6B", opacity: 0.85 }}
            onMouseEnter={e => { (e.currentTarget).style.opacity = "1"; }}
            onMouseLeave={e => { (e.currentTarget).style.opacity = "0.85"; }}>
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
