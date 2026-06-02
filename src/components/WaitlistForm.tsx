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
  { value: "Attend", label: "I want to attend" },
  { value: "Sponsor", label: "I want to sponsor" },
  { value: "Speak", label: "I want to speak" },
  { value: "Volunteer", label: "I want to volunteer" },
  { value: "Partner", label: "I want to partner" },
];

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    interest: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ---------------------------------------------------------------
      // INTEGRATION POINT
      // Connect this handler to your preferred backend:
      //
      // Option A — Google Sheets (via Google Apps Script web app):
      //   const res = await fetch("YOUR_APPS_SCRIPT_URL", {
      //     method: "POST",
      //     body: JSON.stringify(form),
      //   });
      //
      // Option B — Airtable REST API:
      //   const res = await fetch("https://api.airtable.com/v0/BASE_ID/TABLE_NAME", {
      //     method: "POST",
      //     headers: {
      //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ fields: form }),
      //   });
      //
      // Option C — Brevo (formerly Sendinblue) API:
      //   const res = await fetch("https://api.brevo.com/v3/contacts", {
      //     method: "POST",
      //     headers: {
      //       "api-key": process.env.NEXT_PUBLIC_BREVO_API_KEY!,
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: form.email,
      //       attributes: { FNAME: form.name, COMPANY: form.company, INTEREST: form.interest },
      //       listIds: [YOUR_LIST_ID],
      //     }),
      //   });
      //
      // Option D — Mailchimp via a Next.js API route (/api/subscribe):
      //   const res = await fetch("/api/subscribe", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(form),
      //   });
      // ---------------------------------------------------------------

      // Simulated delay for demo
      await new Promise((r) => setTimeout(r, 1200));

      setStatus("success");
      setForm({ name: "", company: "", email: "", interest: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00d4ff]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#00d4ff] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Waitlist
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Be part of the{" "}
            <span className="gradient-text">first wave.</span>
          </h2>
          <p className="text-slate-400">
            Join the waitlist and we&apos;ll keep you informed as the event
            takes shape.
          </p>
        </div>

        {status === "success" ? (
          <div className="card-glass rounded-3xl p-12 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-white font-black text-2xl mb-2">
              You&apos;re in the list!
            </h3>
            <p className="text-slate-400">
              We&apos;ll reach out as soon as we have news. Welcome to the
              community.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card-glass rounded-3xl p-8 sm:p-10 space-y-5"
          >
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Smith"
                className="w-full bg-[#0d1f3c] border border-[#1e3a5f] text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full bg-[#0d1f3c] border border-[#1e3a5f] text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="jane@acme.com"
                className="w-full bg-[#0d1f3c] border border-[#1e3a5f] text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                I&apos;m interested in
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
                className="w-full bg-[#0d1f3c] border border-[#1e3a5f] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00d4ff] transition-colors appearance-none"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {interestOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full text-white font-bold text-base py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting…" : "Join the waitlist →"}
            </button>

            {status === "error" && (
              <p className="text-[#ff6b6b] text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
