import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false, follow: false },
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-[#0F172A] mb-8">
        Politique de confidentialité
      </h1>

      <div className="prose prose-slate max-w-none space-y-8 text-[#64748B]">
        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Données collectées</h2>
          <p>
            Lors de l'utilisation du formulaire de contact, nous collectons : prénom, email,
            téléphone (optionnel), besoin principal et message. Ces données sont utilisées
            uniquement pour répondre à votre demande.
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Analytics</h2>
          <p>
            Ce site utilise Plausible Analytics, un outil RGPD-natif qui ne dépose aucun cookie
            et ne collecte aucune donnée personnelle identifiable. Aucun consentement n'est
            nécessaire.
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Conservation des données</h2>
          <p>
            Les données du formulaire de contact sont conservées le temps nécessaire au traitement
            de votre demande, au maximum 12 mois.
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données. Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:contact@optival.fr" className="text-indigo-600 hover:underline">
              contact@optival.fr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Contact DPO</h2>
          <p>
            Responsable du traitement : Jean-Julien Rols — contact@optival.fr
          </p>
        </section>
      </div>

      <div className="mt-12">
        <a href="/" className="text-indigo-600 hover:underline text-sm">← Retour à l'accueil</a>
      </div>
    </main>
  )
}
