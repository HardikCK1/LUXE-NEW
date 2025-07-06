"use server"

import { Resend } from "resend"

export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

type EmailSuccess = { success: true; data: unknown }
type EmailError = { success: false; error: string }

/**
 * Lazily create a Resend client only when an API key is present.
 * This prevents build-time / preview crashes if the key hasn’t been
 * configured yet.
 */
function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY
  return key ? new Resend(key) : null
}

/**
 * Send a notification email to the studio *and* a confirmation email
 * to the client.
 * Returns `{ success: true }` on success or an error object otherwise.
 */
export async function sendContactEmail(data: ContactFormData): Promise<EmailSuccess | EmailError> {
  const resend = getResendClient()

  // If the key isn’t configured, fail gracefully with a helpful message
  if (!resend) {
    console.error("❌ RESEND_API_KEY is missing – add it in your Vercel project settings")
    return {
      success: false,
      error: "Email service not configured. Please contact the site owner directly.",
    }
  }

  try {
    const { error, data: internalEmail } = await resend.emails.send({
      from: "Luxe Digital Studio <contact@luxedigital.studio>",
      to: ["admin@luxedigital.studio"],
      subject: `New Inquiry: ${data.service} – ${data.name}`,
      html: renderInternalEmail(data),
    })

    if (error) throw error

    await resend.emails.send({
      from: "Luxe Digital Studio <contact@luxedigital.studio>",
      to: [data.email],
      subject: "Thank you for your inquiry – Luxe Digital Studio",
      html: renderClientEmail(data),
    })

    return { success: true, data: internalEmail }
  } catch (err) {
    console.error("❌ Email sending failed:", err)
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error while sending email",
    }
  }
}

/* ---------- email templates ---------- */

function renderInternalEmail(d: ContactFormData): string {
  return `
  <div style="font-family: Georgia, serif; max-width:600px;margin:0 auto;background:#0f0f0f;color:#f5f3ef;padding:40px">
    <header style="text-align:center;margin-bottom:40px">
      <h1 style="color:#d2b48c;font-size:32px;margin:0">LUXE</h1>
      <p style="color:#d2b48c;font-size:12px;letter-spacing:3px;margin:8px 0 0">DIGITAL STUDIO</p>
    </header>
    <section style="border:1px solid #d2b48c;padding:30px;margin-bottom:30px">
      <h2 style="color:#d2b48c;margin-top:0">New Client Inquiry</h2>
      ${infoRow("Name", d.name)}
      ${infoRow("Email", d.email)}
      ${infoRow("Service Interest", d.service)}
      ${infoRow("Message", d.message)}
    </section>
    <footer style="text-align:center;color:#f5f3ef;opacity:.6;font-size:12px">
      This inquiry was submitted through the Luxe Digital Studio website.
    </footer>
  </div>`
}

function renderClientEmail(d: ContactFormData): string {
  return `
  <div style="font-family: Georgia, serif; max-width:600px;margin:0 auto;background:#0f0f0f;color:#f5f3ef;padding:40px">
    <header style="text-align:center;margin-bottom:40px">
      <h1 style="color:#d2b48c;font-size:32px;margin:0">LUXE</h1>
      <p style="color:#d2b48c;font-size:12px;letter-spacing:3px;margin:8px 0 0">DIGITAL STUDIO</p>
    </header>
    <section style="border:1px solid #d2b48c;padding:30px">
      <h2 style="color:#d2b48c;margin-top:0">Thank You, ${d.name}</h2>
      <p style="line-height:1.6;margin-bottom:20px">
        We have received your inquiry for our <strong style="color:#d2b48c">${d.service}</strong> service.
        Our team will review your requirements and respond within 48&nbsp;hours.
      </p>
      <p style="line-height:1.6;margin-bottom:20px">
        Meanwhile, feel free to explore our portfolio and discover our luxury approach to digital design.
      </p>
      <div style="text-align:center;margin:30px 0">
        <a href="https://luxedigital.studio/portfolio" style="background:#d2b48c;color:#0f0f0f;padding:12px 24px;text-decoration:none;font-weight:bold;letter-spacing:1px">
          VIEW PORTFOLIO
        </a>
      </div>
      <p style="line-height:1.6;color:#f5f3ef;opacity:.8">
        Best regards,<br/>
        <em style="color:#d2b48c">Camille Laurent</em><br/>
        Founder &amp; Creative Director
      </p>
    </section>
  </div>`
}

function infoRow(label: string, value: string): string {
  return `
    <div style="margin-bottom:20px">
      <strong style="color:#d2b48c">${label}:</strong>
      <p style="margin:5px 0 0">${value}</p>
    </div>`
}
