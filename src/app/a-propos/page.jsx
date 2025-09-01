import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import { loadArticles } from '@/lib/mdx'
function CTA() {
  return (
  <Container className="mt-24 sm:mt-32 lg:mt-40">
  <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-28 md:px-12">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
        Faites croître votre présence en ligne, pas votre empreinte carbone.
      </h2>
      <p className="mt-4 text-base text-white/70">
        Un site rapide, accessible et conçu pour durer, avec une approche qui
        réduit l’empreinte carbone du numérique.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact" invert>
          Démarrer un projet durable
        </Button>
      </div>
    </div>
  </FadeIn>
</Container>
  )
}
function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Notre culture"
        title="Allier performance numérique et impact positif."
        invert
      >
        <p>
          Digitale est guidé par un engagement clair : créer des sites
          performants tout en réduisant leur empreinte environnementale.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Éco-conception" invert>
            Sites allégés par défaut: images modernes (AVIF/WebP), JS minimal,
            budgets de page ≤ 500 KB.
          </GridListItem>
          <GridListItem title="Compensation" invert>
            Au moins 1 arbre planté pour chaque site livré, avec attestation.
          </GridListItem>
          <GridListItem title="Durabilité" invert>
            Performance, accessibilité et sécurité intégrées pour prolonger la
            vie utile du site.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'À propos: agence Web Digitale',
  description:
    "Agence Web proposant des sites rapides, accessibles et orientés résultats, avec un engagement d&apos;éco‑conception.",
  alternates: { canonical: 'https://agencedigitale.ca/a-propos' },
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="À propos" title="Une agence web qui transforme vos idées en résultats">
  <p>
    Des sites rapides, accessibles et orientés résultats. De la définition des
    objectifs à la mise en ligne, puis en optimisation continue. SEO,
    performance et marketing  pour transformer l’attention en actions
    mesurables.
  </p>
  <div className="mt-10 max-w-2xl space-y-6 text-base">
    <p>
      Une approche pragmatique et transparente : un périmètre clair, des
      livrables mesurables et des itérations courtes pour créer de la valeur
      rapidement.
    </p>
    <p>
      L’éco-conception est intégrée par défaut afin de réduire l’empreinte
      carbone du numérique sans sacrifier la vitesse ni le référencement.
    </p>
  </div>
</PageIntro>

<Container className="mt-16">
  <StatList>
    <StatListItem value="10+ ans" label="d’expérience en développement web" />
    <StatListItem value="100%" label="orienté résultats mesurables" />
    <StatListItem value="1 arbre" label="planté pour chaque site livré" />
  </StatList>
</Container>


      <Culture />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="À découvrir sur le blog"
        intro="Analyses SEO, performance Web, accessibilité et éco‑conception pour approfondir chaque service."
        pages={blogArticles}
        category="ECO"
      />

      <CTA />
    </RootLayout>
  )
}
