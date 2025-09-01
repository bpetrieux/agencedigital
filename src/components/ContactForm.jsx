import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

function Field({ as: Tag = 'input', label, ...props }) {
  const id = props.id || props.name
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

        <Button type="submit" className="mt-10">Envoyer</Button>
      </form>
    </FadeIn>
  )
}