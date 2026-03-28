import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Services } from '@/components/sections/Services'
import { AutoreplyDemo } from '@/components/sections/AutoreplyDemo'
import { Expertise } from '@/components/sections/Expertise'
import { SocialProof } from '@/components/sections/SocialProof'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <AutoreplyDemo />
        <Expertise />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
