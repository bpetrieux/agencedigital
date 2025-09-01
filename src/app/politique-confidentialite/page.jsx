import Link from 'next/link'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import Head from 'next/head'


export const metadata = {
  title: 'Politique de confidentialité — Digitale',
  description:
    "Découvrez comment l’agence Digitale collecte, utilise et protège vos renseignements personnels, en conformité avec la Loi 25 et le RGPD.",
  alternates: {
    canonical: 'https://agencedigitale.ca/politique-confidentialite',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              "name": "Politique de confidentialité",
              "description":
                "Découvrez comment l’agence Digitale collecte, utilise et protège vos renseignements personnels, en conformité avec la Loi 25 et le RGPD.",
              "url": "https://agencedigitale.ca/politique-confidentialite/",
              "publisher": {
                "@type": "Organization",
                "name": "Digitale",
                "url": "https://agencedigitale.ca",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://agencedigitale.ca/logo.png"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "contact@agencedigitale.ca",
                  "areaServed": "CA",
                  "availableLanguage": ["fr", "en"]
                }
              },
              "dateModified": "2025-09-01",
            }),
          }}
        />
      </Head>

      {
 <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
        <PageIntro eyebrow="Politique de confidentialité" title="Comment nous protégeons vos données">
  <p>
    Chez <strong>Digitale</strong>, nous accordons une grande importance à la confidentialité de vos données.  
    Nous collectons uniquement les informations nécessaires (formulaires, infolettre, statistiques anonymisées) et 
    nous ne les vendons jamais.  
    Conformément à la <strong>Loi 25</strong> et au <strong>RGPD</strong>, vous pouvez accéder, rectifier ou supprimer vos données 
    à tout moment en nous contactant.
  </p>
  <p className="mt-6">
    Notre site utilise des cookies pour améliorer l’expérience et mesurer l’audience.  
    Ils sont désactivés par défaut tant que vous n’avez pas donné votre consentement.  
    Vous pouvez gérer vos préférences en tout temps.
  </p>
  <p className="mt-6">
    Responsable des renseignements personnels : <br />
    <strong>AD</strong> – 
    <a href="mailto:contact@agencedigitale.ca" className="underline"> contact@agencedigitale.ca</a>
  </p>
  <p className="mt-6 text-sm text-neutral-600">
    Dernière mise à jour : septembre 2025
  </p>

</PageIntro>
</FadeIn>
     </Container>
</RootLayout>

}
    </>
  )
}