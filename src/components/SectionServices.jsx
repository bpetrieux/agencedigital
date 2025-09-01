import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

import imageLaptop from '@/images/laptop.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageMeeting from '@/images/meeting.jpg'

// catalogue de tous les services disponibles
const allServices = {
  concevoir: {
    href: '/concevoir',
    logo: imageLaptop,
    title: 'Concevoir',
    description:
      'Un site clair, rapide et évolutif qui reflète votre image et sert vos objectifs. De la découverte au suivi, on s’occupe de tout.',
  },
  referencer: {
    href: '/referencer',
    logo: imageWhiteboard,
    title: 'Référencer',
    description:
      'Améliorez votre visibilité sur Google, Google Maps et même dans les moteurs conversationnels comme ChatGPT et Gemini.',
  },
  convertir: {
    href: '/convertir',
    logo: imageMeeting,
    title: 'Convertir',
    description:
      'Transformez vos visiteurs en clients grâce à des campagnes ciblées, des pages optimisées et une mesure fiable.',
  },
}

export function SectionServices({ services = ['concevoir', 'referencer', 'convertir'], title }) {
  // on sélectionne uniquement les services demandés
  const selected = services.map((key) => allServices[key]).filter(Boolean)

  return (
    <Container className="mt-32">
      {title && (
        <h2 className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl mb-12">
          {title}
        </h2>
      )}
      <FadeInStagger className={`grid grid-cols-1 gap-8 lg:grid-cols-${selected.length}`}>
        {selected.map((service) => (
          <FadeIn key={service.href} className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Link href={service.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                
                </Link>
              </h3>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                {service.title}
              </p>
              <p className="mt-4 text-base text-neutral-600">
                {service.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}