import { Suspense } from 'react'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
//import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
//import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { ContactForm } from '@/components/ContactForm'  // <-- nouveau fichier
import { SendStatus } from '@/components/SendStatus'
function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
  Toujours accessible
</h2>
<p className="mt-6 text-base text-neutral-600">
  Basé en Estrie, nous privilégions une communication claire et rapide.  
  Vous pouvez me joindre facilement pour discuter de votre projet et assurer un suivi personnalisé.
</p>

     {/* <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />*/}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nous joindre
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Général', 'web@agencedigitale.ca'],
            ['Carrières', 'jobs@agencedigitale.ca'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

     {/* <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>*/}
    </FadeIn>
  )
}
export const metadata = {
  title: 'Contact',
  description: 'Parlons de votre projet.',
}

export default function ContactPage() {

  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Parlons de votre projet">
        <p>Nous sommes prêts à vous écouter.</p>
 <Suspense fallback={null}>
          <SendStatus />
        </Suspense>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />       {/* Client component */}
<ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}