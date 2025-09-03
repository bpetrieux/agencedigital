'use client'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

export default function TurnstileWidget({ siteKey, theme = 'auto', className }) {
  const elRef = useRef(null)
  const [apiReady, setApiReady] = useState(false)

  useEffect(() => {
    if (!apiReady || !elRef.current || !window?.turnstile) return
    window.turnstile.render(elRef.current, { sitekey: siteKey, theme })
  }, [apiReady, siteKey, theme])

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        onLoad={() => setApiReady(true)}
      />
      <div ref={elRef} className={className} />
    </>
  )
}