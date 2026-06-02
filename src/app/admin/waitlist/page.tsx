import { requireAdmin, getWaitlistData, login, logout } from "./actions";
import type { WaitlistSubmission } from "@/lib/supabase";

// ── Helpers ───────────────────────────────────────────────────────────────────

function count(rows: WaitlistSubmission[], interest: string) {
  return rows.filter((r) => r.interest.toLowerCase() === interest.toLowerCase()).length;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

const INTEREST_COLORS: Record<string, string> = {
  Attend:           "bg-blue-100 text-blue-800",
  Speak:            "bg-purple-100 text-purple-800",
  Volunteer:        "bg-green-100 text-green-800",
  Partner:          "bg-orange-100 text-orange-800",
  "Keep me updated":"bg-slate-100 text-slate-700",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function AdminWaitlistPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const isAuthed = await requireAdmin();
  const { error } = await searchParams;

  if (!isAuthed) {
    return <LoginPage wrongPassword={error === "wrong_password"} />;
  }

  const rows = await getWaitlistData();

  const stats = [
    { label: "Total submissions", value: rows.length,                            color: "border-[#00D5E8]" },
    { label: "Attendees",         value: count(rows, "Attend"),                  color: "border-[#0067B1]" },
    { label: "Speakers",          value: count(rows, "Speak"),                   color: "border-purple-500" },
    { label: "Volunteers",        value: count(rows, "Volunteer"),               color: "border-green-500" },
    { label: "Partners",          value: count(rows, "Partner"),                 color: "border-orange-400" },
    { label: "Keep me updated",   value: count(rows, "Keep me updated"),         color: "border-slate-400" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* ── Header ── */}
      <header className="bg-[#031B2E] px-6 py-4 flex items-center justify-between shadow-lg">
        <div>
          <span className="text-[#00D5E8] font-black text-lg">DevOpsDays</span>
          <span className="text-[#FFD18A] font-black text-lg"> Miami</span>
          <span className="text-slate-400 text-sm ml-3">/ Admin / Waitlist</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            ← Back to site
          </a>
          <form action={logout}>
            <button
              type="submit"
              className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-colors"
            >
              Log out
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl font-black text-[#031B2E] mb-8">Waitlist Dashboard</h1>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`bg-white rounded-2xl p-5 shadow-sm border-t-4 ${s.color}`}
            >
              <div className="text-3xl font-black text-[#031B2E] mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 font-medium leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Table ── */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-bold text-[#031B2E]">All Submissions</h2>
            <span className="text-sm text-slate-400">{rows.length} records · newest first</span>
          </div>

          {rows.length === 0 ? (
            <div className="px-6 py-16 text-center text-slate-400">
              No submissions yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-left">
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">Name</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">Email</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">Company</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">Interest</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wide">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {rows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-4 py-3 font-medium text-[#031B2E] whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                        <a href={`mailto:${row.email}`} className="hover:text-[#0067B1] transition-colors">
                          {row.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                        {row.company || <span className="text-slate-300">—</span>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${INTEREST_COLORS[row.interest] ?? "bg-slate-100 text-slate-700"}`}>
                          {row.interest}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400 whitespace-nowrap text-xs">
                        {fmt(row.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ── Login screen ──────────────────────────────────────────────────────────────

function LoginPage({ wrongPassword }: { wrongPassword: boolean }) {
  return (
    <div className="min-h-screen bg-[#031B2E] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="text-[#00D5E8] font-black text-2xl">DevOpsDays</div>
          <div className="text-[#FFD18A] font-black text-2xl">Miami</div>
          <p className="text-slate-400 text-sm mt-2">Admin access</p>
        </div>

        <form action={login} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
          <div>
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wide mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="w-full bg-white/10 border border-white/15 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00D5E8] transition-colors"
              placeholder="Enter admin password"
            />
          </div>

          {wrongPassword && (
            <p className="text-[#FF6F61] text-sm text-center">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg,#00D5E8,#0067B1)" }}
          >
            Access Dashboard →
          </button>
        </form>

        <p className="text-center text-slate-600 text-xs mt-6">
          Set <code className="text-slate-400">ADMIN_PASSWORD</code> in Vercel env vars.
        </p>
      </div>
    </div>
  );
}
