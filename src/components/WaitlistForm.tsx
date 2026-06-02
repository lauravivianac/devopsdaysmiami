"use client";

import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  interest: string;
};

type FormStatus = "idle" | "loading" | "success" | "duplicate" | "error";

// Sponsorship is intentionally excluded — it has its own dedicated modal flow
const INTEREST_OPTIONS = [
  { value: "Attend",      label: "I want to attend" },
  { value: "Speak",       label: "I want to speak" },
  { value: "Volunteer",   label: "I want to volunteer" },
  { value: "Partner",     label: "I want to partner" },
  { value: "Keep me updated", label: "Keep me updated" },
];

const inputClass =
  "w-full bg-white border border-[#0067B1]/20 text-[#031B2E] placeholder-[#031B2E]/30 " +
  "rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00D5E8] " +
  "focus:ring-2 focus:ring-[#00D5E8]/20 transition-all";

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>({ name: "", company: "", email: "", interest: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 409 || data.error === "duplicate_email") {
        setStatus("duplicate");
        return;
      }
      if (!res.ok) throw new Error("server error");

      setStatus("success");
      setForm({ name: "", company: "", email: "", interest: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-[#FFF7EA] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,213,232,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#0067B1] text-sm font-bold tracking-widest uppercase mb-4 block">
            Waitlist
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#031B2E] mb-4 leading-tight">
            Be part of the{" "}
            <span className="gradient-text-miami">first wave.</span>
          </h2>
          <p className="text-[#031B2E]/60">
            Join the waitlist and we&apos;ll keep you informed as the event takes shape.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-[#00D5E8]/20">
            <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-bold text-white"
              style={{ background: "linear-gradient(135deg,#00D5E8,#0067B1)" }}>
              ✓
            </div>
            <h3 className="text-[#031B2E] font-black text-2xl mb-3">You&apos;re on the list!</h3>
            <p className="text-[#031B2E]/65 leading-relaxed">
              We&apos;ll keep you posted as DevOpsDays Miami takes shape.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl border border-[#0067B1]/10">
            <div>
              <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                Name <span className="text-[#FF6F61]">*</span>
              </label>
              <input type="text" name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                Company
              </label>
              <input type="text" name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                Email <span className="text-[#FF6F61]">*</span>
              </label>
              <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-xs font-bold mb-1.5 uppercase tracking-wide">
                I&apos;m interested in <span className="text-[#FF6F61]">*</span>
              </label>
              <select name="interest" value={form.interest} onChange={set} required className={inputClass}>
                <option value="" disabled>Select an option</option>
                {INTEREST_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Status messages */}
            {status === "duplicate" && (
              <p className="text-[#0067B1] text-sm text-center font-medium bg-[#00D5E8]/10 rounded-xl py-3 px-4">
                This email is already on the waitlist. 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-[#FF6F61] text-sm text-center">
                Something went wrong. Please try again or contact{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="underline">
                  hello@devopsdaysmiami.com
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-btn-primary w-full text-white font-bold text-base py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            >
              {status === "loading" ? "Submitting…" : "Join the waitlist →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
