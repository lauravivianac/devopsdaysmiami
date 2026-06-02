import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ─── SUPABASE CONFIGURATION ──────────────────────────────────────────────────
//
// 1. Create a Supabase project at https://supabase.com
// 2. Go to Project Settings → API to get your credentials
// 3. Add these environment variables to Vercel:
//    NEXT_PUBLIC_SUPABASE_URL      → e.g. https://xxxxx.supabase.co
//    SUPABASE_SERVICE_ROLE_KEY     → found in Project Settings → API → service_role
//
// 4. Run this SQL in Supabase → SQL Editor to create the table:
//
//   create table waitlist_submissions (
//     id           uuid primary key default gen_random_uuid(),
//     name         text not null,
//     company      text,
//     email        text not null,
//     interest     text not null,
//     created_at   timestamptz default now(),
//     source       text default 'landing_waitlist'
//   );
//
//   -- Unique constraint to prevent duplicate emails
//   create unique index waitlist_email_unique on waitlist_submissions (lower(email));
//
//   -- Enable Row Level Security (RLS) — API route uses service role, so it bypasses RLS
//   alter table waitlist_submissions enable row level security;
//
// ─────────────────────────────────────────────────────────────────────────────

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase env vars not configured (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)");
  }

  // Service role key is used server-side only — never exposed to the browser
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, interest } = body as {
      name: string;
      company?: string;
      email: string;
      interest: string;
    };

    // ── Validation ───────────────────────────────────────────────────────────
    if (!name?.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (!interest?.trim()) {
      return NextResponse.json({ error: "Interest is required" }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    const { error } = await supabase.from("waitlist_submissions").insert({
      name: name.trim(),
      company: company?.trim() || null,
      email: email.trim().toLowerCase(),
      interest: interest.trim(),
      source: "landing_waitlist",
    });

    if (error) {
      // Supabase unique violation code
      if (error.code === "23505") {
        return NextResponse.json({ error: "duplicate_email" }, { status: 409 });
      }
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "db_error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
