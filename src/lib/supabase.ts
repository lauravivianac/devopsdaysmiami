import { createClient } from "@supabase/supabase-js";

export type WaitlistSubmission = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  interest: string;
  created_at: string;
  source: string;
};

/** Server-side client using the service role key — never import in client components */
export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing Supabase env vars");
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
