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

const inp = "w-full bg-white border border-[#dde5ec] text-[#010e1e] placeholder-[#9aaab8] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#38d9f0] focus:ring-2 focus:ring-[#38d9f0]/15 transition-all";

export default function WaitlistForm() {
  const [form, setForm] = useState<FormData>({ name:"", company:"", email:"", interest:"" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res  = await fetch("/api/waitlist", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.status === 409 || data.error === "duplicate_email") { setStatus("duplicate"); return; }
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name:"", company:"", email:"", interest:"" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="waitlist" className="bg-[#f8f4ef] py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px flex-1 bg-[#e0dbd4]" />
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#8a9aaa]">Waitlist</span>
          <div className="h-px flex-1 bg-[#e0dbd4]" />
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">

          {/* Left copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#010e1e] leading-tight mb-6">
              Be part of the<br />
              <span className="text-grad-hero">first wave.</span>
            </h2>
            <p className="text-[#6b8298] text-lg leading-relaxed mb-8">
              Join the waitlist and we&apos;ll keep you posted as DevOpsDays Miami
              takes shape — speakers, agenda, tickets and more.
            </p>
            <div className="space-y-3 text-sm text-[#6b8298]">
              {["Early access to ticket launch","Speaker and CFP announcements","Sponsorship opportunities","Community updates"].map(l => (
                <div key={l} className="flex items-center gap-3">
                  <span className="text-[#38d9f0]">✓</span> {l}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "success"
              ? <div className="card-white rounded-xl p-12 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-lg btn-primary">✓</div>
                  <h3 className="text-[#010e1e] font-black text-xl mb-2">You&apos;re on the list!</h3>
                  <p className="text-[#6b8298] text-sm">We&apos;ll keep you posted as DevOpsDays Miami takes shape.</p>
                </div>
              : <form onSubmit={submit} className="card-white rounded-xl p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#010e1e] text-xs font-bold uppercase tracking-wide mb-2">
                        Name <span className="text-[#f97044]">*</span>
                      </label>
                      <input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={inp}/>
                    </div>
                    <div>
                      <label className="block text-[#010e1e] text-xs font-bold uppercase tracking-wide mb-2">Company</label>
                      <input name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={inp}/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#010e1e] text-xs font-bold uppercase tracking-wide mb-2">
                      Email <span className="text-[#f97044]">*</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={inp}/>
                  </div>
                  <div>
                    <label className="block text-[#010e1e] text-xs font-bold uppercase tracking-wide mb-2">
                      I&apos;m interested in <span className="text-[#f97044]">*</span>
                    </label>
                    <select name="interest" value={form.interest} onChange={set} required className={`${inp} cursor-pointer`}>
                      <option value="" disabled>Select an option</option>
                      {OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  {status === "duplicate" &&
                    <p className="text-xs text-center py-3 px-4 rounded" style={{ background:"rgba(56,217,240,0.08)", color:"#0081a0", border:"1px solid rgba(56,217,240,0.2)" }}>
                      This email is already on the waitlist. 🎉
                    </p>}
                  {status === "error" &&
                    <p className="text-[#f97044] text-xs text-center">
                      Something went wrong. Please try again or email{" "}
                      <a href="mailto:hello@devopsdaysmiami.com" className="underline">hello@devopsdaysmiami.com</a>
                    </p>}

                  <button type="submit" disabled={status==="loading"}
                    className="btn-primary w-full py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                    {status==="loading" ? "Submitting…" : "Join the waitlist →"}
                  </button>
                  <p className="text-[#9aaab8] text-xs text-center">No spam. You can unsubscribe at any time.</p>
                </form>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
