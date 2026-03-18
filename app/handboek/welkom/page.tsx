'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProgressBar from '@/components/handboek/ProgressBar'
import { modules } from '@/data/modules'

export default function WelkomPage() {
  const router = useRouter()
  const [completed, setCompleted] = useState<string[]>([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('handboek_auth')
    if (auth !== 'true') {
      router.replace('/handboek')
      return
    }
    const stored = localStorage.getItem('handboek_completed_modules')
    if (stored) {
      try {
        setCompleted(JSON.parse(stored))
      } catch {
        setCompleted([])
      }
    }
    setReady(true)
  }, [router])

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#d0f0ec' }}>
        <div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin" style={{ borderTopColor: '#3ab4a0' }} />
      </div>
    )
  }

  const isReturning = completed.length > 0

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#d0f0ec' }}
    >
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.svg"
              alt="Greenspeed"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Hero icon */}
          <div className="text-center mb-6">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl text-4xl mb-5"
              style={{ backgroundColor: '#d0f0ec' }}
            >
              🚲
            </div>
            <h1 className="font-syne font-bold text-3xl sm:text-4xl mb-3" style={{ color: '#191933' }}>
              {isReturning ? 'Welkom terug!' : 'Welkom bij Greenspeed!'}
            </h1>
            <p className="font-dm text-gray-600 text-base leading-relaxed max-w-md mx-auto">
              {isReturning
                ? 'Goed bezig! Ga verder waar je gebleven was en rond de resterende modules af.'
                : 'Fijn dat je er bent! Dit handboek begeleidt je stap voor stap door alles wat je als koerier bij Greenspeed moet weten. Neem rustig de tijd voor elk onderdeel.'}
            </p>
          </div>

          {/* Info blocks */}
          {!isReturning && (
            <div className="grid grid-cols-3 gap-3 mb-7">
              {[
                { icon: '📚', label: '9 modules' },
                { icon: '✅', label: 'Korte toets' },
                { icon: '🏆', label: 'Certificaat' },
              ].map(item => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-center"
                  style={{ backgroundColor: '#d0f0ec' }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-dm text-xs font-semibold" style={{ color: '#191933' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Progress */}
          {isReturning && (
            <div className="mb-7 p-4 rounded-2xl" style={{ backgroundColor: '#f9fafb' }}>
              <ProgressBar completed={completed.length} total={modules.length} />
            </div>
          )}

          {/* CTA */}
          <Link
            href="/handboek/modules"
            className="block w-full min-h-[52px] py-4 rounded-xl text-white font-dm font-bold text-base text-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#3ab4a0' }}
          >
            {isReturning ? 'Doorgaan met modules →' : 'Start met de modules →'}
          </Link>

          {/* Encouraging note */}
          <p className="text-center text-xs font-dm text-gray-400 mt-5">
            Je kunt altijd pauzeren en later doorgaan. Je voortgang wordt opgeslagen.
          </p>
        </div>
      </div>
    </div>
  )
}
