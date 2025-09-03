'use client'

import { useEffect, useState, useId } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

function Field({ as: Tag = 'input', label, ...props }) {
  const reactId = useId()
  const id = props.id || props.name || reactId
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <Tag
        id={id}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TurnstileWidget({ siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Le script global Turnstile est chargé dans ton layout (<Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />)
  if (!mounted || !siteKey) return null

  return (
    <>
      <div
        className="cf-turnstile mt-6"
        data-sitekey={siteKey}
        data-theme="auto"
        data-language="fr"
        // mode "managed" par défaut (pas besoin de data-callback ici)
      />
      <noscript>
        <div className="mt-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-900">
          Activez JavaScript pour vérifier que vous n’êtes pas un robot.
        </div>
      </noscript>
    </>
  )
}

export function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form method="POST" action="/contact-send.php">
        {/* Honeypot anti-bot (doit rester vide) */}
        <div className="hidden" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <Field label="Nom" name="name" required />
        <Field label="Email" type="email" name="email" required />
        <Field label="Entreprise" name="company" />
        <Field label="Téléphone" type="tel" name="phone" />
        <Field as="textarea" label="Message" name="message" rows={6} required />

        {/* Turnstile */}
        <TurnstileWidget />

        <Button type="submit" className="mt-10">Envoyer</Button>
      </form>
    </FadeIn>
  )
}