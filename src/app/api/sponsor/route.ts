import { NextRequest, NextResponse } from "next/server";

// ─── EMAIL PROVIDER CONFIGURATION ───────────────────────────────────────────
//
// This route supports three providers. Uncomment the one you want to use
// and add the corresponding environment variable to your Vercel project:
//
//   Provider       Env var needed
//   ──────────────────────────────────────────────────────────────────────────
//   Resend         RESEND_API_KEY       → https://resend.com/api-keys
//   SendGrid       SENDGRID_API_KEY     → https://app.sendgrid.com/settings/api_keys
//   Brevo          BREVO_API_KEY        → https://app.brevo.com/settings/keys/api
//
// Set the variable in Vercel → Project Settings → Environment Variables.
// The FROM address must be a verified domain on your chosen provider.
//
// RECIPIENTS — emails go to:
const RECIPIENTS = ["hello@devopsdaysmiami.com", "miami@devopsdays.org"];
const FROM_EMAIL = "noreply@devopsdaysmiami.com"; // change to your verified sender
const FROM_NAME  = "DevOpsDays Miami Website";

// ────────────────────────────────────────────────────────────────────────────

type SponsorPayload = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
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

async function sendViaResend(data: SponsorPayload) {
  // npm install resend  →  add to package.json
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // return resend.emails.send({ from: `${FROM_NAME} <${FROM_EMAIL}>`, to: RECIPIENTS, ... });
  throw new Error("Resend not configured — see comments in route.ts");
}

async function sendViaSendGrid(data: SponsorPayload) {
  // npm install @sendgrid/mail
  // import sgMail from "@sendgrid/mail";
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  // return sgMail.sendMultiple({ to: RECIPIENTS, from: { email: FROM_EMAIL, name: FROM_NAME }, ... });
  throw new Error("SendGrid not configured — see comments in route.ts");
}

async function sendViaBrevo(data: SponsorPayload) {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
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
  if (!res.ok) throw new Error(`Brevo error: ${res.status}`);
}

export async function POST(req: NextRequest) {
  try {
    const data: SponsorPayload = await req.json();

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.company || !data.interest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── SELECT YOUR PROVIDER ────────────────────────────────────────────────
    // Uncomment ONE of the lines below to activate that provider:
    //
    // await sendViaResend(data);
    // await sendViaSendGrid(data);
    await sendViaBrevo(data);   // ← default: uses BREVO_API_KEY env var
    // ───────────────────────────────────────────────────────────────────────

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Sponsor email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
