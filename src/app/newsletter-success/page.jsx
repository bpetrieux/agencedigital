import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Inscription envoyée — Confirmez votre adresse | Digitale',
  description:
    "Merci ! Nous venons d'envoyer un courriel de confirmation. Ouvrez-le et cliquez sur « Confirmer mon inscription » pour finaliser.",
  alternates: { canonical: 'newsletter-succes' },
}

export default function OptinSuccessPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Infolettre" title="Demande d’inscription envoyée">
        <p>
          Merci ! Nous venons de vous envoyer un courriel de confirmation. <br />
          Ouvrez-le et cliquez sur <strong>« Confirmer mon inscription »</strong> pour finaliser.
        </p>
        <p className="mt-6 text-base text-neutral-600">
          Rien reçu après quelques minutes ?<br />Vérifiez vos courriers indésirables
          et ajoutez <strong>web@agencedigitale.ca</strong> à vos contacts.
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
              En attendant votre confirmation
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