"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

const NAV_LINKS = [
  { label: "About",   href: "#about"   },
  { label: "Topics",  href: "#topics"  },
  { label: "Miami",   href: "#miami"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useSponsorModal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logotype */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-9 h-9 relative rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-[#00c8e0]/40 transition-all"
              style={{ background: "#040f1c" }}
            >
              <Image
                src="/logo.png"
                alt="DevOpsDays Miami"
                fill
                className="object-contain scale-90"
                style={{ mixBlendMode: "multiply" }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{ mixBlendMode: "multiply", background: "#040f1c" }}
              />
            </div>
            <span className="hidden sm:block">
              <span className="text-[#00c8e0] font-black text-[15px] tracking-tight">DevOpsDays</span>
              <span className="text-[#f5c842] font-black text-[15px] tracking-tight"> Miami</span>
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="px-4 py-2 text-sm text-[#f5c842]/80 hover:text-[#f5c842] rounded-lg hover:bg-white/5 transition-all"
            >
              Sponsors
            </button>
          </div>

          {/* CTA */}
          <a
            href="#waitlist"
            className="btn-primary text-sm px-5 py-2.5"
          >
            <span>Join the waitlist</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
