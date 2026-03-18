'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { modules } from '@/data/modules'

type Answers = Record<string, number>

export default function ToetsPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongModuleIds, setWrongModuleIds] = useState<string[]>([])

  useEffect(() => {
    const auth = localStorage.getItem('handboek_auth')
    if (auth !== 'true') {
      router.replace('/handboek')
      return
    }
    const stored = localStorage.getItem('handboek_completed_modules')
    let completed: string[] = []
    if (stored) {
      try { completed = JSON.parse(stored) } catch { completed = [] }
    }
    if (completed.length < modules.length) {
      router.replace('/handboek/modules')
      return
    }
    setReady(true)
  }, [router])

  const handleSelect = (moduleId: string, optionIndex: number) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [moduleId]: optionIndex }))
  }

  const handleSubmit = () => {
    let correct = 0
    const wrong: string[] = []
    modules.forEach(m => {
      const ans = answers[m.id]
      if (ans === m.quizQuestion.correctIndex) {
        correct++
      } else {
        wrong.push(m.id)
      }
    })
    setScore(correct)
    setWrongModuleIds(wrong)
    setSubmitted(true)
    if (correct === modules.length) {
      localStorage.setItem('handboek_completed', 'true')
    }
  }

  const handleRetry = () => {
    // reset module progress so user revisits wrong modules
    wrongModuleIds.forEach(id => {
      localStorage.removeItem(`handboek_module_progress_${id}`)
    })
    // remove from completed
    const stored = localStorage.getItem('handboek_completed_modules')
    let completed: string[] = []
    if (stored) {
      try { completed = JSON.parse(stored) } catch { completed = [] }
    }
    const updated = completed.filter(id => !wrongModuleIds.includes(id))
    localStorage.setItem('handboek_completed_modules', JSON.stringify(updated))
    localStorage.removeItem('handboek_completed')
    router.push('/handboek/modules')
  }

  const allAnswered = modules.every(m => answers[m.id] !== undefined)
  const passed = submitted && score === modules.length

  const mailto = `mailto:eelco@greenspeed.nl,marc@greenspeed.nl?subject=Nieuwe%20koerier%20geslaagd&body=Een%20nieuwe%20koerier%20heeft%20de%20introductieapp%20met%20goed%20gevolg%20doorlopen.`

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#d0f0ec' }}>
        <div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin" style={{ borderTopColor: '#3ab4a0' }} />
      </div>
    )
  }

  // ──────────────────────────────────────────
  // PASSED screen
  // ──────────────────────────────────────────
  if (passed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ToetsHeader />
        <main className="max-w-2xl mx-auto px-4 py-12 text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl text-5xl mb-6"
            style={{ backgroundColor: '#d0f0ec' }}
          >
            🎉
          </div>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl mb-3" style={{ color: '#191933' }}>
            Gefeliciteerd!
          </h1>
          <p className="font-dm text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-3">
            Prima gedaan en <strong>welkom bij het team!</strong>
          </p>
          <p className="font-dm text-gray-500 text-sm mb-8">
            Je hebt alle {modules.length} vragen goed beantwoord en het handboek met succes doorlopen.
          </p>

          <div
            className="rounded-2xl p-6 text-center mb-8 max-w-sm mx-auto"
            style={{ backgroundColor: '#d0f0ec' }}
          >
            <p className="font-dm font-semibold text-sm mb-1" style={{ color: '#191933' }}>
              Jouw score
            </p>
            <p className="font-syne font-bold text-4xl" style={{ color: '#3ab4a0' }}>
              {score} / {modules.length}
            </p>
          </div>

          <a
            href={mailto}
            className="inline-flex items-center gap-2 min-h-[52px] px-8 py-4 rounded-xl text-white font-dm font-bold text-base transition-opacity hover:opacity-90 mb-4"
            style={{ backgroundColor: '#3ab4a0' }}
          >
            ✉️ Stuur bevestiging naar Greenspeed
          </a>
          <p className="font-dm text-xs text-gray-400 mt-2 mb-8">
            Dit opent je e-mailprogramma met een vooraf ingevuld bericht.
          </p>

          <Link
            href="/handboek/welkom"
            className="font-dm text-sm text-gray-400 hover:text-gs-teal transition-colors"
          >
            ← Terug naar het handboek
          </Link>
        </main>
      </div>
    )
  }

  // ──────────────────────────────────────────
  // FAILED screen (after submit)
  // ──────────────────────────────────────────
  if (submitted && !passed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <ToetsHeader />
        <main className="max-w-2xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 sm:p-8 text-center mb-6">
            <div className="text-5xl mb-4">😕</div>
            <h1 className="font-syne font-bold text-2xl mb-2" style={{ color: '#191933' }}>
              Nog niet geslaagd
            </h1>
            <p className="font-dm text-gray-600 text-sm mb-1">
              Je had <strong>{score} van de {modules.length}</strong> vragen goed.
            </p>
            <p className="font-dm text-gray-500 text-sm">
              Je moet alle {modules.length} vragen correct beantwoorden om te slagen.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
            <h2 className="font-syne font-bold text-base mb-4" style={{ color: '#191933' }}>
              Onjuiste antwoorden
            </h2>
            <div className="space-y-4">
              {wrongModuleIds.map(id => {
                const m = modules.find(mod => mod.id === id)!
                const given = answers[id]
                return (
                  <div key={id} className="border border-red-100 rounded-xl p-4 bg-red-50">
                    <p className="font-dm font-semibold text-sm text-gray-800 mb-2">
                      Module {m.number}: {m.title}
                    </p>
                    <p className="font-dm text-xs text-gray-500 mb-1">
                      <span className="font-semibold">Jouw antwoord: </span>
                      <span className="text-red-600">{given !== undefined ? m.quizQuestion.options[given] : '(niet ingevuld)'}</span>
                    </p>
                    <p className="font-dm text-xs text-gray-500">
                      <span className="font-semibold">Juist antwoord: </span>
                      <span className="text-green-700">{m.quizQuestion.options[m.quizQuestion.correctIndex]}</span>
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={handleRetry}
            className="w-full min-h-[52px] py-4 rounded-xl text-white font-dm font-bold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#3ab4a0' }}
          >
            Opnieuw proberen — terug naar modules
          </button>
        </main>
      </div>
    )
  }

  // ──────────────────────────────────────────
  // QUIZ FORM (before submit)
  // ──────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      <ToetsHeader />
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-3xl mb-4"
            style={{ backgroundColor: '#d0f0ec' }}
          >
            🏆
          </div>
          <h1 className="font-syne font-bold text-2xl sm:text-3xl mb-2" style={{ color: '#191933' }}>
            Eindtoets
          </h1>
          <p className="font-dm text-gray-500 text-sm">
            Beantwoord alle {modules.length} vragen om het handboek te voltooien. Je hebt alle vragen nodig om te slagen.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-5 mb-8">
          {modules.map((m, qIdx) => (
            <div
              key={m.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-dm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: answers[m.id] !== undefined ? '#3ab4a0' : '#d1d5db' }}
                >
                  {qIdx + 1}
                </span>
                <span className="font-dm text-xs text-gray-400">
                  Module {m.number}: {m.title}
                </span>
              </div>
              <p className="font-syne font-bold text-base mb-4" style={{ color: '#191933' }}>
                {m.quizQuestion.question}
              </p>
              <div className="space-y-2">
                {m.quizQuestion.options.map((option, oIdx) => {
                  const isSelected = answers[m.id] === oIdx
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(m.id, oIdx)}
                      className={`
                        w-full min-h-[44px] px-4 py-3 rounded-xl border-2 text-left font-dm text-sm
                        flex items-center gap-3 transition-all duration-150
                        ${isSelected
                          ? 'border-gs-teal bg-gs-teal-light text-gray-800'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gs-teal'
                        }
                      `}
                    >
                      <span
                        className={`
                          w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold
                          ${isSelected ? 'border-gs-teal bg-gs-teal text-white' : 'border-gray-300'}
                        `}
                      >
                        {isSelected ? '✓' : String.fromCharCode(65 + oIdx)}
                      </span>
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="text-center mb-5 font-dm text-sm text-gray-500">
          {Object.keys(answers).length} van {modules.length} vragen beantwoord
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="w-full min-h-[52px] py-4 rounded-xl text-white font-dm font-bold text-base transition-opacity disabled:opacity-40"
          style={{ backgroundColor: '#3ab4a0' }}
        >
          Toets indienen
        </button>

        {!allAnswered && (
          <p className="text-center font-dm text-xs text-gray-400 mt-3">
            Beantwoord alle vragen voordat je de toets indient.
          </p>
        )}
      </main>
    </div>
  )
}

function ToetsHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/handboek/modules">
          <Image src="/images/logo.svg" alt="Greenspeed" width={100} height={30} className="h-8 w-auto" />
        </Link>
        <span className="font-dm text-sm font-semibold text-gray-500">Eindtoets</span>
        <Link href="/handboek/modules" className="font-dm text-xs text-gray-400 hover:text-gs-teal transition-colors">
          Modules
        </Link>
      </div>
    </header>
  )
}
