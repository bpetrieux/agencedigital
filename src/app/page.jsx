import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { PageIntro } from '@/components/PageIntro'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { StylizedImage } from '@/components/StylizedImage'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Ils nous font confiance
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
      </div>
    </Container>
  )
}

function Concevoir() {
  return (
      <Section id="concevoir" title="Concevoir" image={{ src: imageLaptop, shape: 1 }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Nous concevons des sites qui servent vos objectifs : clairs, rapides et simples à mettre à jour. 
      Chaque page est pensée pour guider vos visiteurs et transformer l’intérêt en demandes concrètes.
    </p>
    <p>
      Après la mise en ligne, on reste à vos côtés : suivi, mises à jour et sécurité pour un site fiable au quotidien, 
      sans tracas techniques.
    </p>
  </div>
  <List className="mt-8">
    <ListItem title="Un site qui vous ressemble">
      Design soigné, contenus alignés à votre offre, expérience fluide sur mobile et ordinateur.
    </ListItem>
    <ListItem title="Prêt à évoluer">
      Pages et modules réutilisables pour faire grandir votre site au rythme de votre entreprise.
    </ListItem>
    <ListItem title="Serein après le lancement">
      Surveillance, sauvegardes et entretien régulier pour des performances stables et une sécurité renforcée.
    </ListItem>
  </List>
    <div className="mt-8">
         <Button href="/concevoir" >Je veux un site internet</Button>
</div>
</Section>
  )
}

function Referencer() {
  return (
   <Section id="referencer" title="Référencer" image={{ src: imageWhiteboard }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Être visible en ligne ne se limite plus à Google. Aujourd’hui, vos clients 
      recherchent aussi dans les nouveaux moteurs conversationnels comme 
      <strong className="font-semibold text-neutral-950"> ChatGPT</strong> et 
      <strong className="font-semibold text-neutral-950"> Gemini</strong>. 
      Nous optimisons votre présence pour que votre marque soit trouvée là où 
      vos prospects posent leurs questions.
    </p>
    <p>
      Notre approche combine le référencement naturel (SEO) classique, 
      optimisation technique, stratégie de contenu et SEO local, avec les 
      meilleures pratiques pour émerger dans ces nouveaux environnements 
      conversationnels.
    </p>
  </div>
  <List className="mt-8">
    <ListItem title="SEO naturel & technique">
      Des fondations solides pour être compris par Google et les autres moteurs.
    </ListItem>
    <ListItem title="SEO local">
      Maximiser votre présence dans les recherches locales et Google Maps.
    </ListItem>
    <ListItem title="Visibilité conversationnelle">
      Préparer vos contenus pour qu’ils soient repris dans les réponses de 
      ChatGPT, Gemini et les moteurs de demain.
    </ListItem>
  </List>
  <div className="mt-8">
         <Button href="/referencer" >Je veux être trouvé sur Google</Button>
</div>
</Section>
  )
}

function Convertir() {
  return (
    <Section id="convertir" title="Convertir" image={{ src: imageMeeting, shape: 2 }}>
  <div className="space-y-6 text-base text-neutral-600">
    <p>
      Attirer du trafic, c’est bien. Le transformer en clients, c’est mieux.  
      Nous créons des campagnes et des pages claires qui donnent envie d’agir : demander un devis, acheter, réserver.
    </p>
    <p>
      Chaque action est mesurée et optimisée. Vous savez ce qui marche, ce qui rapporte et où ajuster pour maximiser vos résultats.
    </p>
  </div>
  <List className="mt-8">
    <ListItem title="Campagnes efficaces">
      Google Ads et publicités Meta conçues pour toucher vos clients idéaux.
    </ListItem>
    <ListItem title="Pages qui convertissent">
      Landing pages simples, convaincantes et testées pour réduire les frictions.
    </ListItem>
    <ListItem title="Mesure et optimisation">
      Tableaux de bord clairs et ajustements continus pour améliorer vos performances.
    </ListItem>
  </List>
 <div className="mt-8">
         <Button href="/referencer" >Je veux plus de clients</Button>
</div>
</Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Pourquoi Digitale ?"
        title="Des sites qui allient performance et résultats"
      >
        <p>
          Des sites rapides, accessibles et mesurables. Nous alignons design,
          technologie et acquisition pour générer du trafic qualifié et des
          conversions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem
            title="Performance"
            link={{ href: '/concevoir', label: '' }}
          >
            Optimisations Core Web Vitals et rapidité d’affichage.
          </GridListItem>

          <GridListItem
            title="SEO"
            link={{ href: '/referencer', label: '' }}
          >
            Visibilité durable sur Google et trafic qualifié.
          </GridListItem>

          <GridListItem
            title="Marketing"
            link={{ href: '/convertir', label: '' }}
          >
            Campagnes pilotées par la donnée et ROI.
          </GridListItem>

          <GridListItem
            title="Sécurité"
            link={{ href: '/concevoir', label: '' }}
          >
            Durcissement, WAF, sauvegardes et monitoring.
          </GridListItem>

          <GridListItem
            title="Accessibilité"
            link={{ href: '/concevoir', label: '' }}
          >
            Conformité WCAG et sémantique propre.
          </GridListItem>

          <GridListItem
            title="Analytics"
            link={{ href: '/convertir', label: '' }}
          >
            GA4, Consent Mode v2 et tableaux de bord.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  metadataBase: new URL('https://agencedigitale.ca'),
  title: 'Agence Web Digitale — Développement de sites sur mesure au Québec',
  description:
    "Digitale conçoit des sites web modernes, rapides et optimisés SEO. Agence web indépendante alliant design, développement et stratégie pour accroître votre visibilité et vos conversions.",
  alternates: {
    canonical: 'https://agencedigitale.ca/',
    languages: { 'fr-CA': 'https://agencedigitale.ca/' },
  },
  openGraph: {
    type: 'website',
    url: 'https://agencedigitale.ca/',
    title: 'Agence Web Digitale — Développement de sites sur mesure au Québec',
    description:
      'Sites web performants, SEO, WordPress, e-commerce et applications web. Des solutions sur mesure orientées résultats.',
    images: [{ url: 'https://agencedigitale.ca/og.png', width: 1200, height: 630, alt: 'Agence Digitale — Sites web performants au Québec' }],
    locale: 'fr_CA',
    siteName: 'Agence Digitale',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence Web Digitale — Développement de sites sur mesure au Québec',
    description:
      'Sites web performants, SEO, WordPress, e-commerce et applications web. Des solutions sur mesure orientées résultats.',
    images: ['https://agencedigitale.ca/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
}




export default function Home() {
  return (
    <RootLayout>
      {/* JSON-LD dans l’arbre retourné */}
      <Script id="ld-org" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Agence Digitale',
          url: 'https://agencedigitale.ca/',
          logo: 'https://agencedigitale.ca/og.png',
          sameAs: ['https://www.linkedin.com/company/agence-digitale/'],
        })}
      </Script>

      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Agence Digitale',
          url: 'https://agencedigitale.ca/',
          inLanguage: 'fr-CA',
        })}
      </Script>

      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://agencedigitale.ca/' }],
        })}
      </Script>

      <PageIntro eyebrow="Agence Web" title={<><span>Concevoir</span> <br /> <span>Référencer</span> <br /> <span>Convertir</span></>}>
        <p>
          Nous créons des sites web modernes, rapides et optimisés pour le SEO.<br />
          Digitale allie design, technologie et marketing pour propulser<br /> votre visibilité et votre croissance.
        </p>
      </PageIntro>

      <Concevoir />
      <Referencer />
      <Convertir />
      <Values />

  {/*    <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Sophie L.', role: 'Directrice marketing', logo: logoPhobiaDark }}
      >
        « Grâce à Digitale, notre nouveau site WordPress est deux fois plus rapide et nos campagnes SEO/Ads génèrent enfin des prospects qualifiés. Leur accompagnement est structuré et mesurable, un vrai partenaire de croissance. »
      </Testimonial>*/}

      <ContactSection />
    </RootLayout>
  )
}
