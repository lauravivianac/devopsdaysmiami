"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useSponsorModal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#010e1e]/92 backdrop-blur-md border-b border-white/8"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-md flex-shrink-0">
              <Image
                src="/logo.png"
                alt="DevOpsDays Miami"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="text-[#38d9f0] font-black text-sm tracking-tight">DevOpsDays</span>
              <span className="text-[#f5c136] font-black text-xs tracking-widest uppercase">Miami</span>
            </div>
          </a>

          <div className="hidden md:flex items-center">
            {[["About","#about"],["Topics","#topics"],["Miami","#miami"]].map(([l,h])=>(
              <a key={l} href={h}
                className="px-4 py-2 text-sm text-white/65 hover:text-white rounded transition-colors">
                {l}
              </a>
            ))}
            <button onClick={openModal}
              className="px-4 py-2 text-sm text-[#f5c136]/75 hover:text-[#f5c136] rounded transition-colors">
              Sponsors
            </button>
          </div>

          <a href="#waitlist" className="btn-primary text-sm px-5 py-2.5">
            Join the waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
