import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Confirmation réussie — Infolettre Digitale',
  description:
    "Merci d'avoir confirmé votre inscription. Vous recevrez désormais nos conseils web, SEO et marketing numérique directement dans votre boîte de réception.",
  openGraph: {
    title: 'Confirmation réussie — Infolettre Digitale',
    description:
      "Votre inscription à notre infolettre est confirmée. Découvrez nos derniers articles et conseils en attendant le prochain envoi.",
    type: 'website',
  },
  alternates: { canonical: 'newsletter-confirm' },
}

export default function OptinSuccessPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Infolettre" title="Merci pour votre inscription ❤️">
        <p>
          Merci d&apos;avoir confirmé votre abonnement à notre infolettre. <br />
          À partir de maintenant, vous recevrez nos conseils pratiques sur le web, <br />
          le SEO et le marketing numérique directement dans votre boîte de réception.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/blogue">Lire le blogue</Button>
          <Button href="/" invert>Retour à l’accueil</Button>
        </div>
      </PageIntro>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeIn>
          <div className="max-w-2xl text-base text-neutral-600">
            <h2 className="font-display text-xl font-semibold text-neutral-950">
              Continuez la découverte
            </h2>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>
                Découvrez notre approche&nbsp;: <Link href="/processus" className="underline">Processus</Link>
              </li>
              <li>
                Explorez nos services&nbsp;: <Link href="/concevoir" className="underline">Concevoir</Link>,{' '}
                <Link href="/referencer" className="underline">Référencer</Link>,{' '}
                <Link href="/convertir" className="underline">Convertir</Link>
              </li>
              <li>
                Un projet en tête&nbsp;? <Link href="/contact" className="underline">Contactez-nous</Link>
              </li>
            </ul>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}