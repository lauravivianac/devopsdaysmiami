"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSponsorModal } from "@/context/SponsorModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useSponsorModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#031B2E]/92 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            {/*
              LOGO: Place the DevOpsDays Miami logo file at public/logo.png
              Recommended size: 180×180px PNG with transparent background.
              The <Image> below will render it at 40×40px in the navbar.
              If you prefer SVG, change the src to "/logo.svg" and remove width/height.
            */}
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="DevOpsDays Miami"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="text-[#00D5E8] font-black text-base tracking-tight">DevOpsDays</span>
              <span className="text-[#FFD18A] font-black text-base tracking-tight"> Miami</span>
            </div>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-7">
            {[
              ["About", "#about"],
              ["Topics", "#topics"],
              ["Miami", "#miami"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-300 hover:text-[#00D5E8] transition-colors font-medium"
              >
                {label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="text-sm text-[#FFD18A] hover:text-white transition-colors font-medium"
            >
              Sponsors
            </button>
          </div>

          <a
            href="#waitlist"
            className="gradient-btn-primary text-white text-sm font-bold px-5 py-2.5 rounded-full"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
