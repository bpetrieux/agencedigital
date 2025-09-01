export function grantAllConsent() {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
}

export function denyAllConsent() {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}