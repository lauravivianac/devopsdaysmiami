import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, interest } = await req.json() as {
      name?: string;
      company?: string;
      email?: string;
      interest?: string;
    };

    // ── Validation ────────────────────────────────────────────────────────────
    if (!name?.trim())
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!email?.trim() || !EMAIL_RE.test(email))
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    if (!interest?.trim())
      return NextResponse.json({ error: "Interest is required" }, { status: 400 });

    const supabase = createServerClient();

    const { error } = await supabase.from("waitlist_submissions").insert({
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim().toLowerCase(),
      interest: interest.trim(),
      source: "landing_waitlist",
    });

    if (error) {
      // Postgres unique-violation code
      if (error.code === "23505") {
        return NextResponse.json({ error: "duplicate_email" }, { status: 409 });
      }
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json({ error: "db_error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
