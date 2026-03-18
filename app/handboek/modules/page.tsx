'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ProgressBar from '@/components/handboek/ProgressBar'
import ModuleCard from '@/components/handboek/ModuleCard'
import { modules } from '@/data/modules'

export default function ModulesPage() {
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

  const allCompleted = completed.length === modules.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/handboek/welkom">
            <Image src="/images/logo.svg" alt="Greenspeed" width={120} height={36} className="h-9 w-auto" />
          </Link>
          <span className="font-dm text-sm font-semibold text-gray-500">
            Koeriers handboek
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Page heading */}
        <div className="mb-6">
          <h1 className="font-syne font-bold text-2xl sm:text-3xl mb-1" style={{ color: '#191933' }}>
            Modules
          </h1>
          <p className="font-dm text-gray-500 text-sm">
            Doorloop alle 9 modules om het handboek te voltooien.
          </p>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6 border border-gray-100">
          <ProgressBar completed={completed.length} total={modules.length} />
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {modules.map(module => (
            <div key={module.id} className="flex">
              <ModuleCard
                module={module}
                isCompleted={completed.includes(module.id)}
                isLocked={false}
              />
            </div>
          ))}
        </div>

        {/* Final quiz CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: allCompleted ? '#d0f0ec' : '#f3f4f6' }}
        >
          <div className="text-3xl mb-3">🏆</div>
          <h2 className="font-syne font-bold text-lg mb-2" style={{ color: '#191933' }}>
            Eindtoets
          </h2>
          <p className="font-dm text-sm text-gray-600 mb-5 max-w-sm mx-auto">
            {allCompleted
              ? 'Gefeliciteerd! Je hebt alle modules afgerond. Maak nu de eindtoets.'
              : `Rond eerst alle ${modules.length} modules af om de eindtoets te kunnen maken. (${completed.length}/${modules.length} afgerond)`}
          </p>

          {allCompleted ? (
            <Link
              href="/handboek/toets"
              className="inline-block min-h-[44px] px-8 py-3 rounded-xl text-white font-dm font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#3ab4a0' }}
            >
              Naar de eindtoets →
            </Link>
          ) : (
            <button
              disabled
              className="inline-block min-h-[44px] px-8 py-3 rounded-xl text-white font-dm font-bold text-sm opacity-40 cursor-not-allowed"
              style={{ backgroundColor: '#3ab4a0' }}
            >
              Naar de eindtoets →
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
