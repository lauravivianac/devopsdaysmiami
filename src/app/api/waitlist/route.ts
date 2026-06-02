import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Inline the Supabase client creation to remove any indirection.
// Uses the service role key (server-side only, never exposed to the browser).
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  console.log("[waitlist] ENV — SUPABASE_URL present:", !!url, "| SERVICE_ROLE_KEY present:", !!key);
  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(req: NextRequest) {
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

    let supabase;
    try {
      supabase = getSupabase();
    } catch (envErr) {
      const msg = envErr instanceof Error ? envErr.message : String(envErr);
      console.error("[waitlist] Supabase init failed:", msg);
      return NextResponse.json({ error: "config_error", detail: msg }, { status: 500 });
    }

    const payload = {
      name:     name.trim(),
      company:  company?.trim() || null,
      email:    email.trim().toLowerCase(),
      interest: interest.trim(),
      source:   "landing_waitlist",
    };

    console.log("[waitlist] Inserting into waitlist_submissions, fields:", Object.keys(payload));

    const { error } = await supabase.from("waitlist_submissions").insert(payload);

    if (error) {
      console.error("[waitlist] Supabase error — code:", error.code, "| message:", error.message, "| hint:", error.hint);
      if (error.code === "23505") {
        return NextResponse.json({ error: "duplicate_email" }, { status: 409 });
      }
      return NextResponse.json({ error: "db_error", detail: error.message, code: error.code }, { status: 500 });
    }

    console.log("[waitlist] Insert OK");
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[waitlist] Unexpected error:", msg);
    return NextResponse.json({ error: "server_error", detail: msg }, { status: 500 });
  }
}
