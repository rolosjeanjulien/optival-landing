import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { getResend, CONTACT_EMAIL } from '@/lib/resend'

/* Échappe les entités HTML pour empêcher l'injection de balises
   dans l'email généré à partir des champs du formulaire. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/* Rate limiting en mémoire par IP : 5 requêtes / 10 min.
   Sur Vercel, la Map persiste tant que l'instance est chaude —
   protection de base contre le spam en rafale, complétée par le honeypot. */
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 10 * 60 * 1000
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (timestamps.length >= RATE_LIMIT) {
    requestLog.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  // Évite une croissance non bornée de la Map
  if (requestLog.size > 10_000) {
    requestLog.forEach((values, key) => {
      if (values.every((t) => now - t >= RATE_WINDOW_MS)) requestLog.delete(key)
    })
  }
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      req.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de demandes. Réessayez dans quelques minutes.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 })
    }

    const { firstName, email, phone, need, message, honeypot } = parsed.data

    // Anti-spam : honeypot
    if (honeypot) {
      return NextResponse.json({ ok: true })
    }

    const needLabel: Record<string, string> = {
      autoreply: 'Autoreply — Avis Google',
      automation: 'Automatisation IA',
      website: 'Création / refonte de site',
      unknown: 'Pas encore défini',
    }

    const safeFirstName = escapeHtml(firstName)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : 'Non renseigné'
    const safeMessage = message ? escapeHtml(message) : 'Aucun message'

    await getResend().emails.send({
      from: 'Optival Contact <contact@optival.fr>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Optival] Nouvelle demande de ${firstName} — ${needLabel[need]}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F172A;">Nouvelle demande de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Prénom</td><td style="padding: 8px;">${safeFirstName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Email</td><td style="padding: 8px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Téléphone</td><td style="padding: 8px;">${safePhone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Besoin</td><td style="padding: 8px;">${needLabel[need]}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Message</td><td style="padding: 8px;">${safeMessage}</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #E2E8F0;" />
          <p style="color: #64748B; font-size: 12px;">Envoyé depuis le formulaire de contact Optival</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[contact] Échec d\'envoi du formulaire:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
