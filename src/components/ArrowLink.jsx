import Link from 'next/link'

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

export function ArrowLink({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700 ${className}`}
      aria-label={`Aller à la page ${children}`}
    >
      {children}
      <ArrowIcon className="w-6 flex-none fill-current transition group-hover:translate-x-1" />
      <span className="absolute inset-0" />
    </Link>
  )
}