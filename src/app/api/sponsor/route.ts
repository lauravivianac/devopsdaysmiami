import { NextRequest, NextResponse } from "next/server";

const RECIPIENTS = ["hello@devopsdaysmiami.com", "miami@devopsdays.org"];
// Must be a verified sender in your Brevo account.
// Go to Brevo → Senders & IPs → Verify a domain or email address.
const FROM_EMAIL = "hello@devopsdaysmiami.com";
const FROM_NAME  = "DevOpsDays Miami Website";

type SponsorPayload = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
};

function buildHtml(d: SponsorPayload) {
  return `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#031B2E">
  <div style="background:linear-gradient(135deg,#031B2E,#0067B1);padding:32px;border-radius:12px 12px 0 0">
    <h1 style="color:#00D5E8;margin:0;font-size:22px">New Sponsorship Inquiry</h1>
    <p style="color:#FFD18A;margin:6px 0 0;font-size:14px">DevOpsDays Miami</p>
  </div>
  <div style="background:#f9f9f9;padding:28px;border-radius:0 0 12px 12px;border:1px solid #e0e0e0">
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:8px 0;color:#666;width:140px">Name</td>
          <td style="padding:8px 0;font-weight:bold">${d.firstName} ${d.lastName}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Company</td>
          <td style="padding:8px 0;font-weight:bold">${d.company}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Job Title</td>
          <td style="padding:8px 0">${d.jobTitle}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Email</td>
          <td style="padding:8px 0"><a href="mailto:${d.email}">${d.email}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666">Phone</td>
          <td style="padding:8px 0">${d.phone || "—"}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Interest</td>
          <td style="padding:8px 0;color:#FF6F61;font-weight:bold">${d.interest}</td></tr>
    </table>
    ${d.message ? `
    <div style="margin-top:16px;padding:16px;background:#fff;border-left:3px solid #00D5E8;border-radius:4px">
      <p style="margin:0 0 6px;color:#666;font-size:13px">Message</p>
      <p style="margin:0;font-size:14px">${d.message.replace(/\n/g, "<br>")}</p>
    </div>` : ""}
  </div>
</div>`;
}

async function sendViaBrevo(data: SponsorPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not set in environment variables");
  }

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: RECIPIENTS.map((email) => ({ email })),
      replyTo: { email: data.email, name: `${data.firstName} ${data.lastName}` },
      subject: `[Sponsorship] ${data.interest} — ${data.company}`,
      htmlContent: buildHtml(data),
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Brevo HTTP ${res.status}: ${body}`);
  }
}

export async function POST(req: NextRequest) {
  // Debug: env presence
  console.log("[sponsor] ENV — BREVO_API_KEY:", !!process.env.BREVO_API_KEY);

  try {
    const data = await req.json() as SponsorPayload;
    console.log("[sponsor] Received keys:", Object.keys(data));

    // Validate required fields
    const missing: string[] = [];
    if (!data.firstName?.trim()) missing.push("firstName");
    if (!data.lastName?.trim())  missing.push("lastName");
    if (!data.company?.trim())   missing.push("company");
    if (!data.jobTitle?.trim())  missing.push("jobTitle");
    if (!data.email?.trim())     missing.push("email");
    if (!data.interest?.trim())  missing.push("interest");

    if (missing.length > 0) {
      return NextResponse.json({ error: "Missing required fields", fields: missing }, { status: 400 });
    }

    if (!process.env.BREVO_API_KEY) {
      console.error("[sponsor] BREVO_API_KEY is not configured — cannot send email");
      return NextResponse.json(
        { error: "email_not_configured", message: "Email service is not configured. Please contact hello@devopsdaysmiami.com directly." },
        { status: 503 }
      );
    }

    await sendViaBrevo(data);
    console.log("[sponsor] Email sent OK to:", RECIPIENTS);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[sponsor] Error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
