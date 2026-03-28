import { Resend } from 'resend'

// Lazy init — ne s'exécute qu'à l'appel (pas au build)
export function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contact@optival.fr'
