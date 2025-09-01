'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
export default function StructuredFAQ({ title, faqs }) {
  return (
    <Container className="mt-32 ">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
          {title}
        </h2>
        <dl className="mt-16 divide-y divide-neutral-900/10 dark:divide-white/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="py-6 first:pt-0 last:pb-0">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-neutral-900 dark:text-white">
                      <span className="text-base font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {!open ? (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-neutral-600 dark:text-neutral-400">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </Container>
  )
}