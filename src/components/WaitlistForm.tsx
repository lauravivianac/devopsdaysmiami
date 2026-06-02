"use client";
import { useState } from "react";

type FormData = { name: string; company: string; email: string; interest: string };
type Status   = "idle" | "loading" | "success" | "duplicate" | "error";

const OPTIONS = [
  { value: "Attend",          label: "I want to attend"    },
  { value: "Speak",           label: "I want to speak"     },
  { value: "Volunteer",       label: "I want to volunteer" },
  { value: "Partner",         label: "I want to partner"   },
  { value: "Keep me updated", label: "Keep me updated"     },
];

const BENEFITS = [
  "Early access to ticket launch",
  "Speaker and CFP announcements",
  "Community updates",
];

const field =
  "w-full text-sm font-semibold rounded-xl px-4 py-3.5 transition-all " +
  "bg-white border-2 placeholder-[rgba(7,26,58,0.30)] text-[#071A3A] " +
  "focus:outline-none focus:ring-0 border-[rgba(37,208,230,0.25)] focus:border-[#25D0E6]";

export default function WaitlistForm() {
  const [form, setForm]           = useState<FormData>({ name:"", company:"", email:"", interest:"" });
  const [status, setStatus]       = useState<Status>("idle");
  const [errDetail, setErrDetail] = useState<string>("");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  // ── DO NOT MODIFY: Supabase insert logic ──────────────────────────────────
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrDetail("");

    let data: Record<string, unknown> = {};
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.name,
          company:  form.company,
          email:    form.email,
          interest: form.interest,
        }),
      });

      data = await res.json();
      console.log("[waitlist] API response:", res.status, data);

      if (res.status === 409 || data.error === "duplicate_email") {
        setStatus("duplicate");
        return;
      }
      if (!res.ok) {
        const detail = typeof data.detail === "string" ? data.detail : (typeof data.error === "string" ? data.error : "unknown");
        setErrDetail(detail);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name:"", company:"", email:"", interest:"" });
    } catch (err) {
      console.error("[waitlist] Fetch error:", err);
      setErrDetail("Network error — check your connection.");
      setStatus("error");
    }
  };
  // ── END: do not modify above ──────────────────────────────────────────────

  return (
    <section id="waitlist" className="py-24" style={{ background: "#071A3A" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label-dark">Waitlist</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_500px] gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-7" style={{ color: "#fff" }}>
              Be part of the<br />
              <span className="grad-aqua-coral">first wave.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(237,242,247,0.65)" }}>
              Join the waitlist and be first to know as DevOpsDays Miami
              takes shape — tickets, speakers, CFP and more.
            </p>
            <ul className="space-y-4">
              {BENEFITS.map(l => (
                <li key={l} className="flex items-center gap-3 text-sm" style={{ color: "rgba(237,242,247,0.55)" }}>
                  <span style={{ color: "#25D0E6", fontSize: 10 }}>✦</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Form — glassmorphism card */}
          <div>
            {status === "success"
              ? <div className="rounded-2xl p-12 text-center"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(37,208,230,0.25)", backdropFilter: "blur(16px)" }}>
                  <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl"
                    style={{ background: "linear-gradient(135deg,#25D0E6,#FF8A6B)" }}>✓</div>
                  <h3 className="font-black text-2xl mb-3" style={{ color: "#fff" }}>You&apos;re on the list!</h3>
                  <p className="text-sm" style={{ color: "rgba(237,242,247,0.60)" }}>
                    We&apos;ll keep you posted as DevOpsDays Miami takes shape. Welcome to the community.
                  </p>
                </div>

              : <form onSubmit={submit} className="rounded-2xl p-8 space-y-4"
                  style={{ background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(37,208,230,0.20)", backdropFilter: "blur(16px)" }}>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "rgba(237,242,247,0.50)" }}>
                        Name <span style={{ color: "#FF8A6B" }}>*</span>
                      </label>
                      <input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={field}/>
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "rgba(237,242,247,0.50)" }}>
                        Company
                      </label>
                      <input name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={field}/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "rgba(237,242,247,0.50)" }}>
                      Email <span style={{ color: "#FF8A6B" }}>*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={field}/>
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "rgba(237,242,247,0.50)" }}>
                      I&apos;m interested in <span style={{ color: "#FF8A6B" }}>*</span>
                    </label>
                    <select name="interest" value={form.interest} onChange={set} required className={`${field} cursor-pointer`}>
                      <option value="" disabled>Select an option</option>
                      {OPTIONS.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  {status === "duplicate" &&
                    <p className="text-xs text-center py-3 px-4 rounded-xl font-medium"
                      style={{ background: "rgba(37,208,230,0.12)", color: "#25D0E6", border: "1px solid rgba(37,208,230,0.25)" }}>
                      This email is already on the waitlist.
                    </p>}

                  {status === "error" &&
                    <div className="text-xs text-center space-y-1">
                      <p style={{ color: "#FF8A6B" }}>
                        Something went wrong. Please try again or contact{" "}
                        <a href="mailto:hello@devopsdaysmiami.com" className="underline">hello@devopsdaysmiami.com</a>
                      </p>
                      {errDetail &&
                        <p className="font-mono px-3 py-1.5 rounded-lg" style={{ background: "rgba(255,138,107,0.10)", color: "rgba(255,138,107,0.80)" }}>
                          {errDetail}
                        </p>}
                    </div>}

                  <button type="submit" disabled={status === "loading"}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ justifyContent: "center", padding: "15px" }}>
                    {status === "loading" ? "Submitting…" : "Join the waitlist →"}
                  </button>

                  <p className="text-center text-xs" style={{ color: "rgba(237,242,247,0.30)" }}>
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
