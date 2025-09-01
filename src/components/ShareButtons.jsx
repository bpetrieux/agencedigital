'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { EnvelopeIcon, ShareIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6'

export function ShareButtons({ title }) {
  const pathname = usePathname()
  const url = `https://agencedigitale.ca${pathname}`
  const shareText = title || 'Découvrez cet article de Digitale'
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share)
  }, [])

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title: shareText, url })
    } catch {}
  }

  const btn = 'inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-1.5 text-sm text-white hover:bg-neutral-800 transition'

  return (
    <div className="mt-12 border-t border-neutral-200 pt-6">
      <h3 className="mb-4 text-sm font-semibold text-neutral-950">Partager l’article</h3>
      <div className="flex flex-wrap gap-3">
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className={btn}>
          <FaXTwitter className="h-4 w-4" /> Twitter
        </a>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className={btn}>
          <FaLinkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" className={btn}>
          <FaFacebook className="h-4 w-4" /> Facebook
        </a>
        <a href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(url)}`} className={btn}>
          <EnvelopeIcon className="h-4 w-4" /> Email
        </a>

        {canShare && (
          <button onClick={handleNativeShare} className={btn}>
            <ShareIcon className="h-4 w-4" /> Partager
          </button>
        )}
      </div>
    </div>
  )
}