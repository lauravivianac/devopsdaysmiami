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

const inputCls = [
  "w-full bg-white border border-[#0558a0]/15 text-[#020e1c] placeholder-slate-300",
  "rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00cfe4]",
  "focus:ring-2 focus:ring-[#00cfe4]/20 transition-all shadow-sm",
].join(" ");

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
    <section id="waitlist" className="py-28 bg-[#fdf8f3] relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-light opacity-40"/>
      <div className="absolute top-0 inset-x-0 h-1" style={{
        background: "linear-gradient(90deg, transparent, #00cfe4 50%, transparent)"
      }}/>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,207,228,0.07) 0%, transparent 65%)" }}/>

      <div className="relative max-w-lg mx-auto px-5 sm:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#0558a0] bg-[#0558a0]/8 px-3 py-1 rounded-full mb-5">
            Waitlist
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#020e1c] mb-4 leading-tight">
            Be part of the{" "}
            <span className="text-grad-hero">first wave.</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Join the waitlist and we&apos;ll keep you informed as the event takes shape.
          </p>
        </div>

        {status === "success"
          ? <div className="bg-white rounded-3xl p-14 text-center shadow-xl border border-[#00cfe4]/20">
              <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold text-white btn-cta">
                ✓
              </div>
              <h3 className="text-[#020e1c] font-black text-xl mb-3">You&apos;re on the list!</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We&apos;ll keep you posted as DevOpsDays Miami takes shape.
              </p>
            </div>
          : <form onSubmit={submit} className="bg-white rounded-3xl p-8 sm:p-10 space-y-4 shadow-xl border border-[#0558a0]/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#020e1c] text-xs font-bold uppercase tracking-wide mb-2">
                    Name <span className="text-[#f0513e]">*</span>
                  </label>
                  <input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={inputCls}/>
                </div>
                <div>
                  <label className="block text-[#020e1c] text-xs font-bold uppercase tracking-wide mb-2">Company</label>
                  <input name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={inputCls}/>
                </div>
              </div>
              <div>
                <label className="block text-[#020e1c] text-xs font-bold uppercase tracking-wide mb-2">
                  Email <span className="text-[#f0513e]">*</span>
                </label>
                <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={inputCls}/>
              </div>
              <div>
                <label className="block text-[#020e1c] text-xs font-bold uppercase tracking-wide mb-2">
                  I&apos;m interested in <span className="text-[#f0513e]">*</span>
                </label>
                <select name="interest" value={form.interest} onChange={set} required className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="" disabled>Select an option</option>
                  {OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              {status === "duplicate" &&
                <p className="text-sm text-center font-medium rounded-xl py-3 px-4"
                  style={{ background: "rgba(0,207,228,0.08)", color:"#0558a0", border:"1px solid rgba(0,207,228,0.2)" }}>
                  This email is already on the waitlist. 🎉
                </p>}
              {status === "error" &&
                <p className="text-[#f0513e] text-sm text-center">
                  Something went wrong. Please try again or contact{" "}
                  <a href="mailto:hello@devopsdaysmiami.com" className="underline">hello@devopsdaysmiami.com</a>
                </p>}

              <button type="submit" disabled={status==="loading"}
                className="btn-cta w-full py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                {status==="loading" ? "Submitting…" : "Join the waitlist →"}
              </button>
            </form>
        }
      </div>
    </section>
  );
}
