"use client";

import { useState } from "react";

type FormData = { name: string; company: string; email: string; interest: string };
type Status   = "idle" | "loading" | "success" | "duplicate" | "error";

const OPTIONS = [
  { value: "Attend",           label: "I want to attend"       },
  { value: "Speak",            label: "I want to speak"        },
  { value: "Volunteer",        label: "I want to volunteer"    },
  { value: "Partner",          label: "I want to partner"      },
  { value: "Keep me updated",  label: "Keep me updated"        },
];

const field =
  "w-full bg-white/5 border border-white/10 text-white placeholder-slate-500 " +
  "rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c8e0] " +
  "focus:ring-1 focus:ring-[#00c8e0]/30 transition-all";

export default function WaitlistForm() {
  const [form, setForm]     = useState<FormData>({ name: "", company: "", email: "", interest: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res  = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status === 409 || data.error === "duplicate_email") { setStatus("duplicate"); return; }
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", company: "", email: "", interest: "" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="waitlist" className="py-28 relative overflow-hidden" style={{ background: "#071828" }}>
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Aqua glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,200,224,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-lg mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <p className="text-[#00c8e0] text-xs font-bold tracking-widest uppercase mb-4">
            Waitlist
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Be part of the{" "}
            <span className="text-gradient-hero">first wave.</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Join the waitlist and we&apos;ll keep you informed as the event takes shape.
          </p>
        </div>

        {status === "success" ? (
          <div className="glass rounded-2xl p-14 text-center">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold text-[#040f1c]"
              style={{ background: "linear-gradient(135deg,#00c8e0,#0b8fcf)" }}
            >
              ✓
            </div>
            <h3 className="text-white font-black text-xl mb-3">You&apos;re on the list!</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We&apos;ll keep you posted as DevOpsDays Miami takes shape.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  Name <span className="text-[#f05c4a]">*</span>
                </label>
                <input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={field} />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                  Company
                </label>
                <input name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={field} />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                Email <span className="text-[#f05c4a]">*</span>
              </label>
              <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={field} />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
                I&apos;m interested in <span className="text-[#f05c4a]">*</span>
              </label>
              <select name="interest" value={form.interest} onChange={set} required className={`${field} appearance-none`}>
                <option value="" disabled className="bg-[#071828]">Select an option</option>
                {OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[#071828]">{o.label}</option>
                ))}
              </select>
            </div>

            {status === "duplicate" && (
              <p className="text-sm text-center font-medium rounded-xl py-3 px-4"
                style={{ background: "rgba(0,200,224,0.1)", color: "#00c8e0", border: "1px solid rgba(0,200,224,0.2)" }}>
                This email is already on the waitlist. 🎉
              </p>
            )}
            {status === "error" && (
              <p className="text-[#f05c4a] text-sm text-center">
                Something went wrong. Please try again or contact{" "}
                <a href="mailto:hello@devopsdaysmiami.com" className="underline">hello@devopsdaysmiami.com</a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{status === "loading" ? "Submitting…" : "Join the waitlist →"}</span>
            </button>
          </form>
        )}
      </div>

      <div className="section-divider absolute bottom-0 inset-x-0" />
    </section>
  );
}
