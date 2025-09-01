import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { SectionServices } from '@/components/SectionServices'
export const metadata = {
  title: 'Référencer — Être trouvé, partout où vos clients cherchent',
  description:
    "Google, Google Maps, ChatGPT, Gemini… vos futurs clients posent leurs questions partout. Nous faisons en sorte que votre entreprise apparaisse dans leurs réponses.",
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

/** 1) Pourquoi et où se positionner */
function Visibilite() {
  return (
    <Section title="Plus de visibilité, plus de clients" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Vos clients cherchent partout. Nous optimisons votre présence pour
          apparaître là où ils décident.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Sur Google">
          Contenus clairs, balises propres, structure lisible. L’objectif,
          ressortir sur les requêtes qui comptent.
        </ListItem>
        <ListItem title="En local">
          Fiche Google Business Profile optimisée, pages locales visibles,
          avis et informations cohérentes.
        </ListItem>
        <ListItem title="Dans les moteurs conversationnels">
          Textes et ressources pensés pour être repris par ChatGPT et Gemini,
          avec réponses fiables et facilement citables.
        </ListItem>
      </List>
    </Section>
  )
}

/** 2) Notre méthode simple et durable */
function Methode() {
  return (
    <Section title="Une stratégie simple et durable" image={{ src: imageLaptop, shape: 1 }}>
      <List className="mt-2">
        <ListItem title="Contenu pertinent">
          Répondre aux vraies questions de vos clients, avec clarté et preuves.
        </ListItem>
        <ListItem title="Présence locale forte">
          Données exactes, catégories pertinentes, photos, posts et avis gérés.
        </ListItem>
        <ListItem title="Optimisation continue">
          Maillage interne, signaux de confiance, netlinking raisonné, mises à jour régulières.
        </ListItem>
      </List>
    </Section>
  )
}

/** 3) Bénéfices concrets */
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
        title="Être trouvé, compris et choisi"
      >
        <p>
          Plus de trafic qualifié, plus de demandes de soumission, une croissance régulière grâce à une visibilité durable.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Trafic qualifié">
            Des visiteurs qui cherchent vraiment ce que vous offrez.
          </GridListItem>
          <GridListItem title="Demande en hausse">
            Des contacts et appels mieux intentionnés.
          </GridListItem>
          <GridListItem title="Crédibilité">
            Des informations cohérentes et des preuves visibles.
          </GridListItem>
          <GridListItem title="Durabilité">
            Une présence qui s’améliore avec le temps, sans dépendre uniquement de la pub.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



/** 5) CTA */
function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Être trouvé dès aujourd’hui
          </h2>
          <p className="mt-4 text-base text-white/70">
            Un plan clair pour améliorer votre visibilité, sur Google, en local,
            et dans les moteurs conversationnels.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" invert>
              Améliorer ma visibilité
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ReferencerPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Référencer" title="Être trouvé, partout où vos clients cherchent">
        <p>
          Google, Google Maps, ChatGPT, Gemini. Vos futurs clients posent leurs questions partout.
          Nous faisons en sorte que votre entreprise apparaisse dans leurs réponses.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Visibilite />
        <Methode />
      </div>

      <Benefices />
      
      <CTA />
       <SectionServices services={['concevoir', 'convertir']} title="Autres services" />
    </RootLayout>
  )
}