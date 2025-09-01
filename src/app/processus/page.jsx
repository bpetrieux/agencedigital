import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
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

function Discover() {
  return (
    <Section title="Découverte" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          On clarifie vos objectifs, cibles et priorités. Analyse de l’existant
          (site, données, concurrence) et définition d’ICP/KPI pour mesurer
          l’impact dès le départ.
        </p>
        <p>
          On cadre le périmètre, les risques et les opportunités SEO/marketing,
          puis on priorise un plan d’action réaliste aligné sur vos délais et votre budget.
        </p>
        <p>
          Sortie attendue : diagnostic synthèse et roadmap priorisée servant de
          base au design, au développement et au suivi.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclus dans cette phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Questionnaires & ateliers</TagListItem>
        <TagListItem>Audit technique & SEO</TagListItem>
        <TagListItem>Analyse analytics (GA4)</TagListItem>
        <TagListItem>Benchmark concurrence</TagListItem>
        <TagListItem>Backlog & priorisation</TagListItem>
        <TagListItem>Plan d’action et KPIs</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Concevoir & Développer" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          UX et contenu : arborescence, wireframes centrés tâches, messages
          clés et plan éditorial SEO (pages piliers, intentions de recherche).
        </p>
        <p>
          Développement : thème WordPress sur mesure, blocs Gutenberg/ACF,
          intégrations utiles (paiement, CRM, ERP). Accessibilité (WCAG) et
          performance sont intégrées dès le départ.
        </p>
        <p>
          Mesure : plan de tracking GA4, événements et conversions. Préparation
          des schémas (Schema.org), maillage interne et bases SEO on-page.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Marie Tremblay', role: 'Directrice marketing, Atelier Nord' }}
        className="mt-12"
      >
        Digitale a livré un site rapide et simple à éditer. Les bases SEO et la
        mesure étaient en place dès le jour 1, ce qui a accéléré nos résultats.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Mise en ligne & Croissance" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Lancement propre : redirections 301, DNS/SSL, cache/CDN, Consent Mode v2
          et vérifications Core Web Vitals. Recette sur les parcours critiques.
        </p>
        <p>
          Après mise en ligne, on suit les KPIs dans GA4, on optimise SEO et
          publicités (Google Ads / Meta), et on teste pour améliorer la conversion.
        </p>
        <p>
          Objectif : croissance durable, moins de friction technique, plus de
          clients qualifiés.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Inclus dans cette phase
      </h3>
      <List className="mt-8">
        <ListItem title="Recette & qualité">
          Tests fonctionnels, accessibilité, performance et vérification des
          balises/Schema.
        </ListItem>
        <ListItem title="Infra & sécurité">
          Durcissement WordPress, WAF, sauvegardes, monitoring uptime/temps de réponse.
        </ListItem>
        <ListItem title="Support & itérations">
          Tableaux de bord GA4, recommandations continues et petites évolutions.
        </ListItem>
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
          Des sites rapides, accessibles et mesurables. On aligne design,
          technologie et acquisition pour générer du trafic qualifié et des conversions.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Performance">
            Core Web Vitals optimisés et temps de chargement maîtrisé.
          </GridListItem>
          <GridListItem title="SEO">
            Fondations techniques solides et contenu orienté intention.
          </GridListItem>
          <GridListItem title="Marketing">
            Campagnes pilotées par la donnée et ROI suivi.
          </GridListItem>
          <GridListItem title="Sécurité">
            Durcissement, WAF, sauvegardes et monitoring continus.
          </GridListItem>
          <GridListItem title="Accessibilité">
            Conformité WCAG et sémantique propre par défaut.
          </GridListItem>
          <GridListItem title="Analytics">
            GA4, Consent Mode v2 et tableaux de bord décisionnels.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Notre processus — Digitale',
  description:
    'Méthode claire en 3 temps : Découverte, Concevoir & Développer, Mise en ligne & Croissance. Performance, SEO, sécurité et mesure incluses.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Notre processus" title="Comment on travaille">
        <p>
          Une démarche simple et transparente : on définit vos objectifs, on
          conçoit et développe proprement, puis on lance et on optimise en continu.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection
  title="Prêt à concrétiser vos idées ?"
  buttonText="Démarrer un projet"
  buttonHref="/contact"
/>
    </RootLayout>
  )
}