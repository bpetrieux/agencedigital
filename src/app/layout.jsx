import '@/styles/tailwind.css'
import Analytics from '@/components/Analytics'
import CookieBanner from '@/components/CookieBanner'

export const metadata = {
  title: {
    template: 'Agence Web Digitale',
    default: 'Nous créons des sites web modernes, rapides et optimisés pour le SEO.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <Analytics />
        <CookieBanner />
        {children}
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}