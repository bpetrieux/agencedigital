import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * Conseils LCP liés à ce composant (déjà pris en compte ici) :
 * - Pas d'animation ni d'opacité sur le H1.
 * - Hiérarchie plate (moins de wrappers).
 * - Eyebrow en <p> pour accessibilité, H1 = bloc le plus “lourd”.
 * - Classes stables pour limiter les reflows.
 * - Pense à précharger la police + font-display:swap dans les styles globaux.
 */
export function PageIntro({ eyebrow, title, children, centered = false }) {
  return (
    <Container className={clsx('mt-20 sm:mt-28 lg:mt-36', centered && 'text-center')}>
      {eyebrow ? (
        <p className="font-display text-base font-semibold text-neutral-950">
          {eyebrow}
        </p>
      ) : null}

      <h1
        className={clsx(
          // garder des tailles stables pour éviter les bascules
          'mt-4 max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl',
          centered && 'mx-auto',
        )}
      >
        {title}
      </h1>

      {children ? (
        <div
          className={clsx(
            'mt-5 max-w-3xl text-lg text-neutral-600 sm:text-xl',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      ) : null}
    </Container>
  )
}