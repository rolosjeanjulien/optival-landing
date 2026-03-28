import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
      <h1 className="font-display text-3xl font-bold text-[#0F172A] mb-8">Mentions légales</h1>

      <div className="prose prose-slate max-w-none space-y-8 text-[#64748B]">
        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Éditeur du site</h2>
          <p>
            Optival — Jean-Julien Rols<br />
            Email : contact@optival.fr<br />
            Directeur de la publication : Jean-Julien Rols
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br />
            <a href="https://vercel.com" className="text-indigo-600 hover:underline">vercel.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, code, design) est protégé par le droit
            d'auteur. Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-[#0F172A] font-semibold text-xl mb-3">Responsabilité</h2>
          <p>
            Optival s'efforce de maintenir les informations de ce site à jour et exactes. Cependant,
            aucune garantie ne peut être donnée quant à l'exactitude ou l'exhaustivité des
            informations publiées.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <a href="/" className="text-indigo-600 hover:underline text-sm">← Retour à l'accueil</a>
      </div>
    </main>
  )
}
