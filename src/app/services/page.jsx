import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
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
    </Container>
  )
}

// Pilier 1 — Concevoir
function Concevoir() {
  return (
    <Section title="Concevoir" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Développement WordPress sur mesure : thèmes légers, blocs réutilisables
          (Gutenberg/ACF) et WooCommerce. Intégrations utiles (paiement, CRM, ERP),
          accessibilité (WCAG) et performance intégrées dès la conception.
        </p>
        <p>
          Maintenance & sécurité : mises à jour, sauvegardes, durcissement WP,
          WAF et surveillance de l’uptime pour un site fiable et pérenne.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="WordPress & WooCommerce">Thèmes sur mesure, boutique en ligne, UX claire.</ListItem>
        <ListItem title="Intégrations">Paiement, CRM, ERP, services tiers.</ListItem>
        <ListItem title="Accessibilité & qualité">Bonnes pratiques WCAG et AQ à la mise en ligne.</ListItem>
      </List>
    </Section>
  )
}

// Pilier 2 — Référencer
function Referencer() {
  return (
    <Section title="Référencer" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          SEO naturel & local : audit technique, Schema.org/JSON‑LD, maillage interne,
          optimisation on‑page et stratégie de contenu. Google Business Profile,
          pages locales et citations pour capter une demande qualifiée.
        </p>
        <p>
          Netlinking et plan éditorial pour améliorer durablement la visibilité
          et la part de trafic organique.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="SEO technique & on‑page">Crawl, indexation, sémantique, performance.</ListItem>
        <ListItem title="SEO local">GBP, pages ville, avis, NAP cohérent.</ListItem>
        <ListItem title="Contenu & netlinking">Briefs, clusters, liens de qualité.</ListItem>
      </List>
    </Section>
  )
}

// Pilier 3 — Convertir
function Convertir() {
  return (
    <Section title="Convertir" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Marketing numérique orienté performance : campagnes Google Ads et publicités Meta,
          pages d’atterrissage optimisées et tests A/B.
        </p>
        <p>
          Analytics fiable : GA4, marquage d’événements, Consent Mode v2 et tableaux de bord.
          Optimisation Core Web Vitals (LCP, CLS, INP), cache/CDN et images modernes
          pour améliorer conversion et ROAS.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Google Ads & Meta">Structuration, ciblage, suivi des conversions.</ListItem>
        <ListItem title="Landing pages & CRO">Tests A/B, messages clairs, friction minimale.</ListItem>
        <ListItem title="Performance & mesure">CWV, GA4, rapports décisionnels.</ListItem>
      </List>
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
        title="Concevoir • Référencer • Convertir"
      >
        <p>
          Des sites rapides, accessibles et mesurables. Nous alignons design,
          technologie et acquisition pour générer du trafic qualifié et des
          conversions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Performance">
            Optimisations Core Web Vitals et rapidité d’affichage.
          </GridListItem>
          <GridListItem title="SEO">
            Visibilité durable sur Google et trafic qualifié.
          </GridListItem>
          <GridListItem title="Marketing">
            Campagnes pilotées par la donnée et ROI.
          </GridListItem>
          <GridListItem title="Sécurité">
            Durcissement, WAF, sauvegardes et monitoring.
          </GridListItem>
          <GridListItem title="Accessibilité">
            Conformité WCAG et sémantique propre.
          </GridListItem>
          <GridListItem title="Analytics">
            GA4, Consent Mode v2 et tableaux de bord.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Nos services — Agence Digitale',
  description:
    'Concevoir • Référencer • Convertir. Développement WordPress, SEO, marketing numérique, maintenance, sécurité, performance et analytics.',
}

export default function Services() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Services" title="Concevoir • Référencer • Convertir">
        <p>
          Une offre clé en main pour lancer, migrer ou optimiser votre présence
          numérique, avec un focus performance et SEO.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Concevoir />
        <Referencer />
        <Convertir />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
