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

const field = [
  "w-full text-sm font-medium rounded-lg px-4 py-3.5 transition-all",
  "bg-white/[0.05] border text-white placeholder-white/25",
  "focus:outline-none focus:ring-0",
  "border-white/10 focus:border-[#00b8d4]/60 focus:bg-white/[0.07]",
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
      const res  = await fetch("/api/waitlist", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (res.status === 409 || data.error === "duplicate_email") { setStatus("duplicate"); return; }
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name:"", company:"", email:"", interest:"" });
    } catch { setStatus("error"); }
  };

  return (
    <section id="waitlist" className="py-32" style={{ background:"#080f1e" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="flex items-center gap-4 mb-6">
          <div className="section-rule" />
          <span className="label">Waitlist</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-20 items-start">

          {/* Left — editorial */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-7" style={{ color:"var(--text-1)" }}>
              Be part of the<br />
              <span className="grad-cyan-coral">first wave.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color:"var(--text-2)" }}>
              Join the waitlist and be first to know as DevOpsDays Miami
              takes shape — tickets, speakers, CFP and more.
            </p>
            <ul className="space-y-3.5">
              {[
                "Early access to ticket launch",
                "Speaker and CFP announcements",
                "Sponsorship opportunities",
                "Community updates",
              ].map(l => (
                <li key={l} className="flex items-center gap-3 text-sm" style={{ color:"var(--text-3)" }}>
                  <span style={{ color:"#00b8d4", fontSize:10 }}>✦</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div>
            {status === "success"
              ? <div className="card p-12 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-lg"
                    style={{ background:"linear-gradient(135deg,#00b8d4,#ff6b4a)" }}>✓</div>
                  <h3 className="font-black text-xl mb-2" style={{ color:"var(--text-1)" }}>You&apos;re on the list!</h3>
                  <p className="text-sm" style={{ color:"var(--text-3)" }}>
                    We&apos;ll keep you posted as DevOpsDays Miami takes shape. Welcome to the community.
                  </p>
                </div>
              : <form onSubmit={submit} className="card p-8 space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="label block mb-2">Name <span style={{color:"#ff6b4a"}}>*</span></label>
                      <input name="name" value={form.name} onChange={set} required placeholder="Jane Smith" className={field}/>
                    </div>
                    <div>
                      <label className="label block mb-2">Company</label>
                      <input name="company" value={form.company} onChange={set} placeholder="Acme Corp" className={field}/>
                    </div>
                  </div>
                  <div>
                    <label className="label block mb-2">Email <span style={{color:"#ff6b4a"}}>*</span></label>
                    <input type="email" name="email" value={form.email} onChange={set} required placeholder="jane@acme.com" className={field}/>
                  </div>
                  <div>
                    <label className="label block mb-2">I&apos;m interested in <span style={{color:"#ff6b4a"}}>*</span></label>
                    <select name="interest" value={form.interest} onChange={set} required
                      className={`${field} cursor-pointer`}
                      style={{ background:"rgba(255,255,255,0.05)" }}>
                      <option value="" disabled style={{background:"#0d1a2e"}}>Select an option</option>
                      {OPTIONS.map(o => (
                        <option key={o.value} value={o.value} style={{background:"#0d1a2e"}}>{o.label}</option>
                      ))}
                    </select>
                  </div>

                  {status === "duplicate" &&
                    <p className="text-xs text-center py-2.5 px-4 rounded-lg"
                      style={{background:"rgba(0,184,212,0.08)",color:"#00b8d4",border:"1px solid rgba(0,184,212,0.2)"}}>
                      This email is already on the waitlist.
                    </p>}
                  {status === "error" &&
                    <p className="text-xs text-center" style={{color:"#ff6b4a"}}>
                      Something went wrong. Please try again or contact{" "}
                      <a href="mailto:hello@devopsdaysmiami.com" className="underline">hello@devopsdaysmiami.com</a>
                    </p>}

                  <button type="submit" disabled={status==="loading"}
                    className="btn btn-primary w-full mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{justifyContent:"center", padding:"15px"}}>
                    {status==="loading" ? "Submitting…" : "Join the waitlist →"}
                  </button>
                  <p className="text-center text-xs" style={{color:"var(--text-4)"}}>
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
