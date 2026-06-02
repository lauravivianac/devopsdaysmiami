import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // Debug: env presence (never log the values)
  console.log("[waitlist] ENV — SUPABASE_URL:", !!process.env.NEXT_PUBLIC_SUPABASE_URL, "| SERVICE_KEY:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

  try {
    const body = await req.json() as {
      name?: string;
      company?: string;
      email?: string;
      interest?: string;
    };

    console.log("[waitlist] Received keys:", Object.keys(body));

    const { name, company, email, interest } = body;

    if (!name?.trim())
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!email?.trim() || !EMAIL_RE.test(email))
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    if (!interest?.trim())
      return NextResponse.json({ error: "Interest is required" }, { status: 400 });

    const supabase = createServerClient();

    const payload = {
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim().toLowerCase(),
      interest: interest.trim(),
      source: "landing_waitlist",
    };

    console.log("[waitlist] Inserting payload keys:", Object.keys(payload));

    const { error } = await supabase.from("waitlist_submissions").insert(payload);

    if (error) {
      console.error("[waitlist] Supabase error — code:", error.code, "| message:", error.message, "| details:", error.details);

      if (error.code === "23505") {
        return NextResponse.json({ error: "duplicate_email" }, { status: 409 });
      }
      return NextResponse.json({ error: "db_error", detail: error.message }, { status: 500 });
    }

    console.log("[waitlist] Insert OK");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Unexpected error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
