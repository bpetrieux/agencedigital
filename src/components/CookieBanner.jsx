'use client'

import { useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'dg_consent' // { status: 'granted' | 'denied' }

function updateConsent(status) {
  // Sécurité : si GA4 n’est pas encore chargé, on tamponne l’appel
  if (!window.dataLayer) window.dataLayer = []
  function gtag(){ window.dataLayer.push(arguments) }

  const value = status === 'granted' ? 'granted' : 'denied'

  // Consent Mode v2 (base)
  gtag('consent', 'update', {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    functionality_storage: 'granted', // cookies nécessaires au fonctionnement
    security_storage: 'granted',
  })
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
      if (!saved || (saved.status !== 'granted' && saved.status !== 'denied')) {
        // Pas de choix => bannière visible
        setOpen(true)
      }
    } catch {
      setOpen(true)
    }
  }, [])

  const acceptAll = useCallback(() => {
    updateConsent('granted')
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'granted' }))
    setOpen(false)
  }, [])

  const denyAll = useCallback(() => {
    updateConsent('denied')
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ status: 'denied' }))
    setOpen(false)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-x-3 bottom-3 z-[100] rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md sm:p-5">
      <p className="text-sm text-neutral-800">
        Nous utilisons des cookies de mesure anonymisée pour améliorer le site.
        Vous pouvez accepter ou refuser. <a href="/politique-confidentialite" className="underline hover:no-underline">En savoir plus</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={denyAll}
          className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
        >
          Refuser
        </button>
        <button
          onClick={acceptAll}
          className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Accepter
        </button>
      </div>
    </div>
  )
}