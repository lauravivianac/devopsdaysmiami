"use client";

import { useEffect, useRef, useState } from "react";
import { useSponsorModal } from "@/context/SponsorModalContext";

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const INTERESTS = [
  "Community Partner",
  "Startup",
  "Gold Sponsor",
  "Platinum Sponsor",
  "Diamond Sponsor",
  "Not Sure Yet",
];

const EMPTY: FormData = {
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const WA_NUMBER = "573223507349";
const WA_MESSAGE = encodeURIComponent(
  "Hello DevOpsDays Miami team, I'm interested in sponsorship opportunities."
);

const fieldClass =
  "w-full bg-white border border-[#0067B1]/20 text-[#031B2E] placeholder-[#031B2E]/30 " +
  "rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00D5E8] " +
  "focus:ring-2 focus:ring-[#00D5E8]/20 transition-all";

export default function SponsorModal() {
  const { isOpen, closeModal } = useSponsorModal();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setForm(EMPTY); setStatus("idle"); }, 300);
    }
  }, [isOpen]);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(3,27,46,0.80)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === overlayRef.current && closeModal()}
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl"
        style={{ background: "#FFF7EA" }}
      >
        {/* Header gradient band */}
        <div
          className="sticky top-0 z-10 px-8 pt-8 pb-6 rounded-t-3xl"
          style={{ background: "linear-gradient(135deg,#031B2E 0%,#0067B1 100%)" }}
        >
          <button
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all text-xl font-light"
          >
            ✕
          </button>
          <p className="text-[#FFD18A] text-xs font-bold tracking-widest uppercase mb-2">
            Sponsorship
          </p>
          <h2 className="text-white font-black text-xl sm:text-2xl leading-tight mb-2">
            Interested in Sponsoring DevOpsDays Miami?
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Connect your brand with one of the fastest-growing engineering and
            cloud communities in the Americas.
          </p>
        </div>

        <div className="px-8 py-8">
          {status === "success" ? (
            <SuccessView onClose={closeModal} />
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      First Name <span className="text-[#FF6F61]">*</span>
                    </label>
                    <input name="firstName" value={form.firstName} onChange={set} required placeholder="Jane" className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Last Name <span className="text-[#FF6F61]">*</span>
                    </label>
                    <input name="lastName" value={form.lastName} onChange={set} required placeholder="Smith" className={fieldClass} />
                  </div>
                </div>

                {/* Company / Title row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Company <span className="text-[#FF6F61]">*</span>
                    </label>
                    <input name="company" value={form.company} onChange={set} required placeholder="Acme Corp" className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Job Title <span className="text-[#FF6F61]">*</span>
                    </label>
                    <input name="jobTitle" value={form.jobTitle} onChange={set} required placeholder="VP of Engineering" className={fieldClass} />
                  </div>
                </div>

                {/* Email / Phone row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Corporate Email <span className="text-[#FF6F61]">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={fieldClass} />
                  </div>
                  <div>
                    <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={set} placeholder="+1 305 000 0000" className={fieldClass} />
                  </div>
                </div>

                {/* Sponsorship interest */}
                <div>
                  <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                    Sponsorship Interest <span className="text-[#FF6F61]">*</span>
                  </label>
                  <select name="interest" value={form.interest} onChange={set} required className={fieldClass}>
                    <option value="" disabled>Select a tier</option>
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={set}
                    rows={3}
                    placeholder="Tell us about your company, goals or any questions…"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-[#FF6F61] text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full text-white font-bold text-base py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed shadow-md transition-all hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg,#00D5E8,#FF6F61)" }}
                >
                  {status === "loading" ? "Sending…" : "Contact Sponsorship Team →"}
                </button>
              </form>

              {/* Alternative contact */}
              <AlternativeContact />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-6">
      <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl"
        style={{ background: "linear-gradient(135deg,#00D5E8,#0067B1)" }}>
        ✓
      </div>
      <h3 className="text-[#031B2E] font-black text-2xl mb-3">Message sent!</h3>
      <p className="text-[#031B2E]/70 leading-relaxed max-w-sm mx-auto mb-8">
        Thank you for your interest in DevOpsDays Miami. Our sponsorship team
        will contact you shortly.
      </p>
      <button
        onClick={onClose}
        className="text-white font-bold px-8 py-3 rounded-full"
        style={{ background: "linear-gradient(135deg,#031B2E,#0067B1)" }}
      >
        Close
      </button>
    </div>
  );
}

function AlternativeContact() {
  return (
    <div className="mt-8 pt-8 border-t border-[#0067B1]/10">
      <h3 className="text-center text-[#031B2E] font-black text-base mb-5">
        Prefer to talk directly?
      </h3>
      <div className="grid sm:grid-cols-3 gap-3">
        {/* Email 1 */}
        <a
          href="mailto:hello@devopsdaysmiami.com"
          className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#00D5E8]/30 hover:border-[#00D5E8] hover:bg-[#00D5E8]/5 transition-all group text-center"
        >
          <span className="text-xl">✉️</span>
          <span className="text-[#031B2E] text-xs font-bold">hello@</span>
          <span className="text-[#0067B1] text-xs break-all">devopsdaysmiami.com</span>
        </a>

        {/* Email 2 */}
        <a
          href="mailto:miami@devopsdays.org"
          className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#00D5E8]/30 hover:border-[#00D5E8] hover:bg-[#00D5E8]/5 transition-all group text-center"
        >
          <span className="text-xl">✉️</span>
          <span className="text-[#031B2E] text-xs font-bold">miami@</span>
          <span className="text-[#0067B1] text-xs break-all">devopsdays.org</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 p-4 rounded-2xl border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group text-center"
        >
          <span className="text-xl">💬</span>
          <span className="text-[#031B2E] text-xs font-bold">WhatsApp</span>
          <span className="text-[#25D366] text-xs font-semibold">Chat with us</span>
        </a>
      </div>
    </div>
  );
}
