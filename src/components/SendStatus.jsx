'use client'

import { useSearchParams } from 'next/navigation'

export function SendStatus() {
  const sp = useSearchParams()
  const sent = sp.get('sent') // "1" | "0" | null

  if (!sent) return null

  if (sent === '1') {
    return (
      <p role="status" aria-live="polite" className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">
        Merci, votre message a bien été envoyé ✅
      </p>
    )
  }

  return (
    <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
      Oups… l&apos;envoi a échoué. Réessayez ou écrivez à web@agencedigitale.ca ❤️
    </p>
  )
}