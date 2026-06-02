"use client";

import { useState } from "react";

type FormData = {
  name: string;
  company: string;
  email: string;
  interest: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const interestOptions = [
  { value: "Attend",    label: "I want to attend" },
  { value: "Sponsor",   label: "I want to sponsor" },
  { value: "Speak",     label: "I want to speak" },
  { value: "Volunteer", label: "I want to volunteer" },
  { value: "Partner",   label: "I want to partner" },
];

const inputClass =
  "w-full bg-white border border-[#0067B1]/20 text-[#031B2E] placeholder-[#031B2E]/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00D5E8] focus:ring-2 focus:ring-[#00D5E8]/20 transition-all";

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>({ name: "", company: "", email: "", interest: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // ---------------------------------------------------------------
      // INTEGRATION POINT — connect to your preferred backend:
      //
      // Option A — Google Sheets (Apps Script web app):
      //   await fetch("YOUR_APPS_SCRIPT_URL", { method:"POST", body: JSON.stringify(form) });
      //
      // Option B — Airtable:
      //   await fetch("https://api.airtable.com/v0/BASE_ID/TABLE", {
      //     method:"POST", headers:{ Authorization:`Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`, "Content-Type":"application/json" },
      //     body: JSON.stringify({ fields: form }),
      //   });
      //
      // Option C — Brevo:
      //   await fetch("https://api.brevo.com/v3/contacts", {
      //     method:"POST", headers:{ "api-key": process.env.NEXT_PUBLIC_BREVO_KEY!, "Content-Type":"application/json" },
      //     body: JSON.stringify({ email: form.email, attributes:{ FNAME:form.name, COMPANY:form.company, INTEREST:form.interest }, listIds:[YOUR_LIST_ID] }),
      //   });
      //
      // Option D — Mailchimp via /api/subscribe route:
      //   await fetch("/api/subscribe", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
      // ---------------------------------------------------------------
      await new Promise((r) => setTimeout(r, 1200)); // remove this line when integrated
      setStatus("success");
      setForm({ name: "", company: "", email: "", interest: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-[#FFF7EA] relative overflow-hidden">
      {/* Aqua glow */}
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
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-[#031B2E] font-black text-2xl mb-2">You&apos;re in!</h3>
            <p className="text-[#031B2E]/60">We&apos;ll reach out as soon as we have news. Welcome to the community.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 space-y-5 shadow-xl border border-[#0067B1]/10">
            <div>
              <label className="block text-[#031B2E] text-sm font-semibold mb-2">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-sm font-semibold mb-2">Company</label>
              <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-sm font-semibold mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@acme.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-[#031B2E] text-sm font-semibold mb-2">I&apos;m interested in</label>
              <select name="interest" value={form.interest} onChange={handleChange} required className={inputClass}>
                <option value="" disabled>Select an option</option>
                {interestOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-btn-primary w-full text-white font-bold text-base py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            >
              {status === "loading" ? "Submitting…" : "Join the waitlist →"}
            </button>

            {status === "error" && (
              <p className="text-[#FF6F61] text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
