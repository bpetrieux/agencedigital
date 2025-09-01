import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
title: 'Erreur d’inscription — Infolettre Digitale',
  description: "Une erreur est survenue lors de votre inscription. Essayez à nouveau ou contactez-nous pour obtenir de l’aide.",
  alternates: { canonical: 'https://agencedigitale.ca/newsletter-error' },
}

export default function OptinSuccessPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Infolettre" title=" Une erreur est survenue lors de votre inscription. ">
        <p>
          Vérifiez votre adresse courriel et essayez à nouveau.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="#infolettre">Réessayer</Button>
          <Button href="/contact" invert>Nous contacter</Button>
        </div>
      </PageIntro>
    </RootLayout>
  )
}