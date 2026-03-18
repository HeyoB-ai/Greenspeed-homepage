'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_HANDBOEK_PASSWORD || 'GREENSPEED2024'

export default function HandboekLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('handboek_auth')
    if (auth === 'true') {
      router.replace('/handboek/welkom')
    } else {
      setChecking(false)
    }
  }, [router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      if (password === CORRECT_PASSWORD) {
        localStorage.setItem('handboek_auth', 'true')
        router.push('/handboek/welkom')
      } else {
        setError('Onjuist wachtwoord. Probeer het opnieuw.')
        setLoading(false)
      }
    }, 400)
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#d0f0ec' }}>
        <div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin" style={{ borderTopColor: '#3ab4a0' }} />
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundColor: '#d0f0ec' }}
    >
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/logo.svg"
              alt="Greenspeed"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-3xl mb-4"
              style={{ backgroundColor: '#d0f0ec' }}
            >
              📖
            </div>
            <h1 className="font-syne font-bold text-2xl mb-1" style={{ color: '#191933' }}>
              Koeriers instructie
            </h1>
            <p className="font-dm text-gray-500 text-sm">
              Log in met het handboek-wachtwoord
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-dm font-medium text-gray-700 mb-1.5"
              >
                Wachtwoord
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value)
                  setError('')
                }}
                placeholder="Voer het wachtwoord in"
                className="w-full min-h-[44px] px-4 py-3 rounded-xl border-2 border-gray-200 font-dm text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gs-teal"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <p className="text-sm font-dm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full min-h-[44px] py-3 rounded-xl text-white font-dm font-semibold text-sm transition-opacity disabled:opacity-50"
              style={{ backgroundColor: '#3ab4a0' }}
            >
              {loading ? 'Bezig...' : 'Inloggen'}
            </button>
          </form>

          <p className="text-center text-xs font-dm text-gray-400 mt-6">
            Geen toegang? Neem contact op met je leidinggevende.
          </p>
        </div>

        <p className="text-center text-xs font-dm mt-6" style={{ color: '#2a8a7a' }}>
          Greenspeed — Koeriers onboarding handboek
        </p>
      </div>
    </div>
  )
}
