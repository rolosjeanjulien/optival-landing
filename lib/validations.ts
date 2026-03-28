import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  need: z.enum(['autoreply', 'automation', 'website', 'unknown'], {
    error: 'Veuillez sélectionner un besoin',
  }),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
