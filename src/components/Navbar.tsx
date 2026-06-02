"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useSponsorModal();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#021428]/90 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/30"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo — white pill so logo renders cleanly */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-[#00cfe4]/40 transition-shadow overflow-hidden">
              <Image
                src="/logo.png"
                alt="DevOpsDays Miami logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-[#00cfe4] font-black text-[15px] tracking-tight">DevOpsDays</span>
              <span className="text-[#f5c340] font-black text-[13px] tracking-widest uppercase">Miami</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center">
            {[["About","#about"],["Topics","#topics"],["Miami","#miami"]].map(([l,h])=>(
              <a key={l} href={h}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/8 transition-all">
                {l}
              </a>
            ))}
            <button onClick={openModal}
              className="px-4 py-2 text-sm text-[#f5c340]/80 hover:text-[#f5c340] rounded-lg hover:bg-white/8 transition-all">
              Sponsors
            </button>
          </div>

          {/* CTA */}
          <a href="#waitlist" className="btn-cta text-sm px-5 py-2.5">
            Join the waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
