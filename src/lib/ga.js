export function gaEvent(name, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', name, params)
}

// Exemples de raccourcis
export const trackLead = (source = 'form_contact') =>
  gaEvent('generate_lead', { source })

export const trackCTA = (label) =>
  gaEvent('select_content', { content_type: 'cta', item_id: label })