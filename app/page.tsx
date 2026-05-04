import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Automations } from '@/components/sections/Automations'
import { Process } from '@/components/sections/Process'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        {/* <Automations /> */}
        <Process />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
