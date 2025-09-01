import Link from 'next/link'
import Script from 'next/script'
import clsx from 'clsx'

export default function Breadcrumb({
  items,                    // [{ name: 'Accueil', href: '/' }, { name: 'Blog' }]
  siteUrl = 'https://agencedigitale.ca',
  className = '',
}) {
  const absolute = (href) =>
    href?.startsWith('http') ? href : siteUrl.replace(/\/$/, '') + (href || '')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.href ? { item: absolute(it.href) } : {}),
    })),
  }

  return (
    <>
      <nav aria-label="Fil d’Ariane" className={clsx('text-sm', className)}>
        <ol className="flex flex-wrap items-center gap-x-2">
          {items.map((it, i) => (
            <li key={i} className="flex items-center">
              {it.href ? (
                <Link href={it.href} className="text-neutral-600 hover:underline">
                  {it.name}
                </Link>
              ) : (
                <span className="font-semibold text-neutral-950">{it.name}</span>
              )}
              {i < items.length - 1 && (
                <span className="mx-2 text-neutral-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}