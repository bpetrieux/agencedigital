import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageMeeting from '@/images/meeting.jpg'
import imageLaptop from '@/images/laptop.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { SectionServices } from '@/components/SectionServices'
// Si tu as déjà un ContactSection configurable, tu peux l’utiliser ici à la place du CTA custom.
// import { ContactSection } from '@/components/ContactSection'

export const metadata = {
  title: 'Convertir — Du clic au client',
  description:
    "Optimisation des campagnes, des pages et de la mesure pour transformer l'attention en résultats.",
}

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

function Campagnes() {
  return (
    <Section title="Campagnes qui performent" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Du clic au client, nous structurons vos campagnes Google Ads et publicités Meta
          pour capter la bonne intention au bon moment et au bon coût.
        </p>
        <p>
          L’objectif : un ROAS sain et prévisible, avec des optimisations continues
          basées sur des données fiables.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Ciblage & structure">
          Thèmes, groupes d’annonces et audiences alignés sur vos objectifs.
        </ListItem>
        <ListItem title="Création & messages">
          Annonces claires, promesses nettes, preuves rassurantes.
        </ListItem>
        <ListItem title="Pilotage & ROAS">
          Suivi des conversions et itérations hebdomadaires orientées résultats.
        </ListItem>
      </List>
    </Section>
  )
}

function Pages() {
  return (
    <Section title="Pages qui convertissent" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Vos landing pages transforment l’attention en action : clarté du message,
          hiérarchie, preuves, appels à l’action et vitesse d’affichage.
        </p>
        <p>
          Nous réduisons la friction et testons les variantes qui font réellement
          bouger le taux de conversion.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="UX & messages">
          Proposition de valeur limpide, sections utiles, structure lisible.
        </ListItem>
        <ListItem title="CRO pragmatique">
          Tests A/B, social proof, micro-conversions, formulaires optimisés.
        </ListItem>
        <ListItem title="Vitesse & confiance">
          Core Web Vitals solides, sécurité visible, expérience fluide.
        </ListItem>
      </List>
    </Section>
  )
}

function Mesure() {
  return (
    <Section title="Mesure claire, décisions simples" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Sans mesure fiable, pas de progrès. Nous mettons en place GA4, le suivi
          des événements, et des tableaux de bord qui parlent résultat plutôt que jargon.
        </p>
        <p>
          Vous savez quoi améliorer, dans quel ordre, et avec quel impact attendu.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="GA4 & conversions">
          Événements clés, objectifs clairs, traçabilité robuste.
        </ListItem>
        <ListItem title="Dashboards lisibles">
          Rapports orientés décisions, pas des kilomètres de chiffres.
        </ListItem>
        <ListItem title="Boucle d’amélioration">
          Hypothèses, tests, apprentissages, itérations continues.
        </ListItem>
      </List>
    </Section>
  )
}

function Benefices() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Bénéfices"
        title="Des résultats concrets et mesurables"
      >
        <p>
          Plus de demandes qualifiées, un coût d’acquisition sous contrôle,
          et une vision claire de ce qui fonctionne vraiment.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Trafic utile">
            Attirer des visiteurs motivés, pas juste des clics.
          </GridListItem>
          <GridListItem title="Conversion en hausse">
            Des pages qui donnent envie d’agir.
          </GridListItem>
          <GridListItem title="Pilotage par la donnée">
            Décisions simples appuyées par des métriques fiables.
          </GridListItem>
          <GridListItem title="ROI durable">
            Un système qui s’améliore et s’optimise dans le temps.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Prêts à transformer vos clics en clients ?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Un court échange pour comprendre vos objectifs, et un plan d’action clair
            pour améliorer la performance.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" invert>
              Démarrer un projet
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ConvertirPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Convertir" title="Du clic au client">
        <p>
          Nous optimisons vos campagnes et vos pages pour transformer l’attention en action,
          et l’action en résultats mesurables.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Campagnes />
        <Pages />
        <Mesure />
      </div>

      <Benefices />
      <CTA />
      {/* Ou <ContactSection title="Prêts à transformer vos clics en clients ?" ctaLabel="Démarrer un projet" /> si tu utilises ta section configurable */}
      <SectionServices services={['concevoir', 'referencer']} title="Autres services" />
    </RootLayout>
  )
}