import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionServices } from '@/components/SectionServices'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageMeeting from '@/images/meeting.jpg'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'

export const metadata = {
  title: 'Concevoir — Un site qui travaille pour vous',
  description:
    "Un site web n&apos;est pas une simple carte de visite : c&apos;est un outil de croissance. Nous concevons des sites clairs, performants et alignés sur vos objectifs.",
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

/** 1) Hero / intro via PageIntro (déjà géré plus bas) */

/** 2) Pourquoi c&apos;est important */
function Pourquoi() {
  return (
    <Section title="Pourquoi bien concevoir son site change tout" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Concevoir, ce n&apos;est pas juste « faire un site ». C&apos;est bâtir une vitrine qui attire,
          rassure et convertit. Un bon design sert vos objectifs et simplifie la vie de vos visiteurs.
        </p>
      </div>
      <List className="mt-8">
        <ListItem title="Inspirer confiance">
          Un rendu professionnel qui met en valeur votre crédibilité.
        </ListItem>
        <ListItem title="Navigation simple">
          Des parcours limpides pour trouver l&apos;information en quelques clics.
        </ListItem>
        <ListItem title="Plus de demandes">
          Des appels à l&apos;action clairs pour transformer l&apos;intérêt en contact ou en vente.
        </ListItem>
        <ListItem title="Base saine">
          Une fondation technique fiable pour évoluer sans friction.
        </ListItem>
      </List>
    </Section>
  )
}

/** 3) Notre approche */
function Approche() {
  return (
    <Section title="Notre approche, simple et efficace" image={{ src: imageLaptop, shape: 1 }}>
      <List className="mt-2">
        <ListItem title="1. Découverte">
          Nous clarifions vos objectifs, vos cibles et vos priorités.
        </ListItem>
        <ListItem title="2. Design & contenu">
          Maquettes et messages clairs, centrés sur les tâches de vos clients.
        </ListItem>
        <ListItem title="3. Développement">
          Un site rapide, sécurisé et évolutif, prêt à être édité facilement.
        </ListItem>
        <ListItem title="4. Lancement & suivi">
          Mise en ligne propre, mesures activées, accompagnement continu.
        </ListItem>
      </List>
      <div className="mt-8">
         <Button href="/contact" >J&apos;embarque</Button>
</div>
    </Section>
  )
}

/** 4) Ce que vous obtenez (bénéfices concrets) */
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
        eyebrow="Ce que vous obtenez"
        title="Un site pensé pour performer"
      >
        <p>
          Un design soigné, une expérience fluide et une structure prête pour le référencement.
          Bref, un site qui travaille pour vous, aujourd’hui et demain.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Rapide et agréable">
            Des pages qui se chargent vite et une navigation sans effort.
          </GridListItem>
          <GridListItem title="Facile à éditer">
            Vous mettez à jour vos contenus sans dépendances lourdes.
          </GridListItem>
          <GridListItem title="Prêt pour le SEO">
            Une structure claire qui aide vos pages à être trouvées.
          </GridListItem>
          <GridListItem title="Évolutif">
            Une base solide qui s&apos;adapte à vos besoins futurs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}



/** 6) CTA */
function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Prêt à concevoir un site<br />qui travaille pour vous ?
          </h2>
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" invert>
            Démarrer un projet
          </Button>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function ConcevoirPage() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Concevoir" title="Concevoir un site qui travaille pour vous">
        <p>
          Un site web n&apos;est pas seulement une carte de visite en ligne, c&apos;est un outil de
          croissance. Chez Digitale, nous concevons des sites clairs, performants et adaptés
          à vos objectifs.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Pourquoi />
        <Approche />
      </div>
      <Benefices />
      <CTA />
      <SectionServices services={['convertir', 'referencer']} title="Autres services" />
    </RootLayout>
  )
}