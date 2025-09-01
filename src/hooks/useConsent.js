'use client'

import { useEffect, useState, useCallback } from 'react'
import { grantAllConsent, denyAllConsent } from '@/lib/consent'

const STORAGE_KEY = 'digitale.consent.v1' // change si tu veux “reset” tous les users

export function useConsent() {
  const [mounted, setMounted] = useState(false)
  const [status, setStatus] = useState(null) // 'granted' | 'denied' | null (pas décidé)

  // Charger l’état stocké (évite mismatch SSR)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'granted') setStatus('granted')
      else if (saved === 'denied') setStatus('denied')
    } catch {}
    setMounted(true)
  }, [])

  const acceptAll = useCallback(() => {
    grantAllConsent()
    try { localStorage.setItem(STORAGE_KEY, 'granted') } catch {}
    setStatus('granted')
  }, [])

  const rejectAll = useCallback(() => {
    denyAllConsent()
    try { localStorage.setItem(STORAGE_KEY, 'denied') } catch {}
    setStatus('denied')
  }, [])

  const resetConsent = useCallback(() => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setStatus(null)
  }, [])

  return {
    mounted,
    status,              // null => pas décidé
    hasDecision: !!status,
    acceptAll,
    rejectAll,
    resetConsent,
  }
}