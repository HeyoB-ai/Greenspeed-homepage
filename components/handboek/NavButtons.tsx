'use client'

import Link from 'next/link'

interface NavButtonsProps {
  prevHref?: string
  nextHref: string
  nextLabel?: string
  onNext?: () => void
  onPrev?: () => void
  useCallbacks?: boolean
}

export default function NavButtons({
  prevHref,
  nextHref,
  nextLabel = 'Volgende',
  onNext,
  onPrev,
  useCallbacks = false,
}: NavButtonsProps) {
  if (useCallbacks) {
    return (
      <div className="flex items-center justify-between gap-3 mt-8">
        {onPrev ? (
          <button
            onClick={onPrev}
            className="min-h-[44px] px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-dm font-semibold text-sm hover:border-gs-teal hover:text-gs-teal transition-colors"
          >
            ← Vorige
          </button>
        ) : (
          <div />
        )}
        <button
          onClick={onNext}
          className="min-h-[44px] px-6 py-3 rounded-xl text-white font-dm font-semibold text-sm transition-colors"
          style={{ backgroundColor: '#3ab4a0' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a8a7a')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3ab4a0')}
        >
          {nextLabel} →
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between gap-3 mt-8">
      {prevHref ? (
        <Link
          href={prevHref}
          className="min-h-[44px] px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-dm font-semibold text-sm hover:border-gs-teal hover:text-gs-teal transition-colors inline-flex items-center"
        >
          ← Vorige
        </Link>
      ) : (
        <div />
      )}
      <Link
        href={nextHref}
        className="min-h-[44px] px-6 py-3 rounded-xl text-white font-dm font-semibold text-sm inline-flex items-center transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#3ab4a0' }}
      >
        {nextLabel} →
      </Link>
    </div>
  )
}
