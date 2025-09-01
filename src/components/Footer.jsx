import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Services',
    links: [
      { title: 'Concevoir', href: '/concevoir' },
      { title: 'Convertir', href: '/convertir' },
      { title: 'Référencer', href: '/referencer' },
       /* {
      title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        //href: '/work',
      },,*/
    ],
  },
  {
    title: 'Compagnie',
    links: [
      { title: 'À propos', href: '/a-propos' },
      { title: 'Processus', href: '/processus' },
      { title: 'Blogue', href: '/blogue' },
     
    ],
  },
  {
    title: 'Contact',
    links: [
     { title: 'Contactez nous', href: '/contact' },
     ...socialMediaProfiles,
     ],
    
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
  <form
  action="https://app.cyberimpact.com/optin"
  method="post"
  acceptCharset="utf-8"
  className="max-w-sm"
  id="infolettre"
>
  <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
    Restez informé
  </h2>
  <p className="mt-4 text-sm text-neutral-700">
    Recevez nos conseils pratiques sur le web, le SEO et le marketing numérique.  
    Des idées concrètes, pas de spam.
  </p>

  <div className="relative mt-6">
    <input
      type="email"
      id="ci_email"
      name="ci_email"
      placeholder="Votre adresse courriel"
      autoComplete="email"
      maxLength="255"
      required
      aria-label="Votre adresse courriel"
      className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
    />

    {/* Champs cachés Cyberimpact */}
    <input type="hidden" id="ci_groups" name="ci_groups" value="2" />
    <input
      type="hidden"
      id="ci_account"
      name="ci_account"
      value="e799a59b-fcc9-4398-3d57-12ec739d70aa"
    />
    <input type="hidden" id="ci_language" name="ci_language" value="fr_ca" />
    <input
      type="hidden"
      id="ci_sent_url"
      name="ci_sent_url"
      value="/newsletter-success"
    />
    <input
      type="hidden"
      id="ci_error_url"
      name="ci_error_url"
      value="/newsletter-error"
    />
    <input
      type="hidden"
      id="ci_confirm_url"
      name="ci_confirm_url"
      value="/newsletter-confirm"
    />

    <div className="absolute inset-y-1 right-1 flex justify-end">
      <button
        type="submit"
        aria-label="S'inscrire à l’infolettre"
        className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
      >
        <ArrowIcon className="w-4" />
      </button>
    </div>
  </div>
</form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />

          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home"  className="flex flex-row cursor-pointer">
            <Logo className="h-8" fillOnHover />
            <span className="ml-2 font-display text-2xl font-semibold text-neutral-950 cursor-pointer">DIGITALE</span>
          </Link>
          <p className="text-sm text-neutral-700">
             <a href="/politique-confidentialite" className="text-neutral-400 hover:text-neutral-600"
    >Politique de confidentialité </a> © Digitale: agence web. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
