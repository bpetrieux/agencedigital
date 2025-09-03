import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import Breadcrumb from '@/components/Breadcrumb'

 import { ShareButtons } from '@/components/ShareButtons'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
export default async function BlogArticleWrapper({ article, children }) {
  let allArticles = await loadArticles()
  let moreArticles = allArticles
    .filter(({ metadata }) => metadata !== article)
    .slice(0, 2)

  return (
    <RootLayout>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              Par {article.author.name}, {article.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
 
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
                     <Breadcrumb
  items={[
    { name: 'Accueil', href: '/' },
    { name: 'Blogue', href: '/blogue' },
  /*  { name: article.title }, // dernier sans href = page courante*/
  ]}
/>
            {children}
          </MDXComponents.wrapper>
         

<ShareButtons title={article.title} />
        </FadeIn>
      </Container>

      {moreArticles.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="À découvrir également"
          pages={moreArticles}
        />
      )}

      
    </RootLayout>
  )
}
