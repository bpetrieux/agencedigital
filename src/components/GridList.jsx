import clsx from 'clsx'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ArrowLink } from '@/components/ArrowLink'

export function GridList({ children, className }) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
  link, // { href: string, label?: string }
}) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-neutral-300 before:bg-white after:bg-white/10'
          : 'text-neutral-600 before:bg-neutral-950 after:bg-neutral-100',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-neutral-950',
            )}
          >
            {title}.
          </strong>{' '}
          {children}

          {link && (
            <div className="mt-0 text-right">
              <ArrowLink className="text-right" href={link.href}>
                {link.label || ''}
              </ArrowLink>
            </div>
          )}
        </Border>
      </FadeIn>
    </li>
  )
}