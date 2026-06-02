"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerClient, type WaitlistSubmission } from "@/lib/supabase";

const SESSION_COOKIE = "admin_session";
const SESSION_VALUE  = "devopsdaysmiami_admin_ok"; // opaque token stored in the cookie

// ── Auth ──────────────────────────────────────────────────────────────────────

export async function login(formData: FormData) {
  const password = formData.get("password") as string;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) throw new Error("ADMIN_PASSWORD env var not set");

  if (password !== adminPassword) {
    redirect("/admin/waitlist?error=wrong_password");
  }

  (await cookies()).set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8, // 8 hours
    path: "/",
  });

  redirect("/admin/waitlist");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/waitlist");
}

// ── Guard — call at the top of any admin server component ─────────────────────

export async function requireAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return session?.value === SESSION_VALUE;
}

// ── Data ──────────────────────────────────────────────────────────────────────

export async function getWaitlistData() {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("waitlist_submissions")
    .select("id, name, company, email, interest, created_at, source")
    .order("created_at", { ascending: false });

  if (error) throw new Error(`Supabase query failed: ${error.message}`);

  return (data ?? []) as WaitlistSubmission[];
}
