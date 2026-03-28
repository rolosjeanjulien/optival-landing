import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { getResend, CONTACT_EMAIL } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
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

    await getResend().emails.send({
      from: 'Optival Contact <contact@optival.fr>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Optival] Nouvelle demande de ${firstName} — ${needLabel[need]}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F172A;">Nouvelle demande de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Prénom</td><td style="padding: 8px;">${firstName}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Téléphone</td><td style="padding: 8px;">${phone || 'Non renseigné'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Besoin</td><td style="padding: 8px;">${needLabel[need]}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #64748B;">Message</td><td style="padding: 8px;">${message || 'Aucun message'}</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #E2E8F0;" />
          <p style="color: #64748B; font-size: 12px;">Envoyé depuis le formulaire de contact Optival</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
