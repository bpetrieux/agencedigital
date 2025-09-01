import Script from 'next/script'

export default function Analytics({ gaId = process.env.NEXT_PUBLIC_GA_ID }) {
  if (!gaId) return null

  return (
    <>
      {/* Consent Mode v2 : par défaut, tout refusé jusqu’au consentement */}
      <Script id="ga4-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* GA4 loader */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />

      {/* GA4 init */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}