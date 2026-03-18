'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { modules } from '@/data/modules'
import VideoPlayer from '@/components/handboek/VideoPlayer'
import PhotoView from '@/components/handboek/PhotoView'
import QuizQuestion from '@/components/handboek/QuizQuestion'

// index 0 = intro, 1..n = subpages, n+1 = quiz
const INTRO_INDEX = 0

export default function ModuleDetailPage() {
  const router = useRouter()
  const params = useParams()
  const moduleId = params?.moduleId as string

  const [pageIndex, setPageIndex] = useState(INTRO_INDEX)
  const [ready, setReady] = useState(false)
  const [quizAnswered, setQuizAnswered] = useState(false)
  const [quizCorrect, setQuizCorrect] = useState(false)

  const module = modules.find(m => m.id === moduleId)
  const totalSubPages = module ? module.subPages.length : 0
  const quizIndex = totalSubPages + 1

  useEffect(() => {
    const auth = localStorage.getItem('handboek_auth')
    if (auth !== 'true') {
      router.replace('/handboek')
      return
    }
    if (!module) {
      router.replace('/handboek/modules')
      return
    }
    // Restore last position
    const saved = localStorage.getItem(`handboek_module_progress_${moduleId}`)
    if (saved) {
      const idx = parseInt(saved, 10)
      if (!isNaN(idx) && idx >= 0 && idx <= quizIndex) {
        setPageIndex(idx)
      }
    }
    setReady(true)
  }, [router, module, moduleId, quizIndex])

  // Save progress on page change
  useEffect(() => {
    if (ready && module) {
      localStorage.setItem(`handboek_module_progress_${moduleId}`, String(pageIndex))
    }
  }, [pageIndex, ready, module, moduleId])

  const markModuleComplete = useCallback(() => {
    const stored = localStorage.getItem('handboek_completed_modules')
    let completed: string[] = []
    if (stored) {
      try { completed = JSON.parse(stored) } catch { completed = [] }
    }
    if (!completed.includes(moduleId)) {
      completed.push(moduleId)
      localStorage.setItem('handboek_completed_modules', JSON.stringify(completed))
    }
  }, [moduleId])

  const handleQuizAnswer = (correct: boolean) => {
    setQuizCorrect(correct)
    setQuizAnswered(true)
    if (correct) {
      markModuleComplete()
    }
  }

  const goNext = () => setPageIndex(i => Math.min(i + 1, quizIndex))
  const goPrev = () => setPageIndex(i => Math.max(i - 1, 0))

  if (!ready || !module) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#d0f0ec' }}>
        <div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin" style={{ borderTopColor: '#3ab4a0' }} />
      </div>
    )
  }

  const currentModuleIndex = modules.findIndex(m => m.id === moduleId)
  const nextModule = modules[currentModuleIndex + 1]

  // ──────────────────────────────────────────────
  // INTRO SCREEN (index 0)
  // ──────────────────────────────────────────────
  if (pageIndex === INTRO_INDEX) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header moduleTitle={module.title} />
        <main className="max-w-2xl mx-auto px-4 py-12 text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl text-5xl mb-6"
            style={{ backgroundColor: '#d0f0ec' }}
          >
            {module.icon}
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-dm font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: '#d0f0ec', color: '#2a8a7a' }}
          >
            Module {module.number} van {modules.length}
          </div>
          <h1 className="font-syne font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#191933' }}>
            {module.title}
          </h1>
          <p className="font-dm text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-8">
            {module.description}
          </p>
          <div className="flex items-center justify-center gap-2 mb-10 font-dm text-sm text-gray-500">
            <span
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ backgroundColor: '#d0f0ec', color: '#2a8a7a' }}
            >
              📄 {module.subPages.length} onderdelen
            </span>
            <span
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ backgroundColor: '#d0f0ec', color: '#2a8a7a' }}
            >
              ✅ Toetsvraag aan het einde
            </span>
          </div>
          <button
            onClick={() => setPageIndex(1)}
            className="inline-block min-h-[52px] px-10 py-4 rounded-xl text-white font-dm font-bold text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#3ab4a0' }}
          >
            Module starten →
          </button>
          <div className="mt-6">
            <Link href="/handboek/modules" className="font-dm text-sm text-gray-400 hover:text-gs-teal transition-colors">
              ← Terug naar overzicht
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // ──────────────────────────────────────────────
  // QUIZ SCREEN (last index)
  // ──────────────────────────────────────────────
  if (pageIndex === quizIndex) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header moduleTitle={module.title} />
        <main className="max-w-2xl mx-auto px-4 py-8">
          <StepIndicator current={quizIndex} total={quizIndex} />

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold mb-5"
              style={{ backgroundColor: '#d0f0ec', color: '#2a8a7a' }}
            >
              ✅ Toetsvraag
            </div>
            <QuizQuestion
              question={module.quizQuestion.question}
              options={module.quizQuestion.options}
              correctIndex={module.quizQuestion.correctIndex}
              onAnswer={handleQuizAnswer}
            />

            {quizAnswered && quizCorrect && (
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/handboek/modules"
                  className="block w-full min-h-[44px] py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-dm font-semibold text-sm text-center hover:border-gs-teal hover:text-gs-teal transition-colors"
                >
                  ← Terug naar overzicht
                </Link>
                {nextModule && (
                  <Link
                    href={`/handboek/modules/${nextModule.id}`}
                    className="block w-full min-h-[44px] py-3 rounded-xl text-white font-dm font-bold text-sm text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#3ab4a0' }}
                    onClick={() => {
                      localStorage.removeItem(`handboek_module_progress_${nextModule.id}`)
                    }}
                  >
                    Volgende module: {nextModule.title} →
                  </Link>
                )}
                {!nextModule && (
                  <Link
                    href="/handboek/toets"
                    className="block w-full min-h-[44px] py-3 rounded-xl text-white font-dm font-bold text-sm text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#3ab4a0' }}
                  >
                    Naar de eindtoets →
                  </Link>
                )}
              </div>
            )}
          </div>

          <div className="mt-6 flex items-center justify-start">
            <button
              onClick={goPrev}
              className="font-dm text-sm text-gray-400 hover:text-gs-teal transition-colors"
            >
              ← Vorige pagina
            </button>
          </div>
        </main>
      </div>
    )
  }

  // ──────────────────────────────────────────────
  // SUBPAGE SCREENS (index 1..n)
  // ──────────────────────────────────────────────
  const subPageIndex = pageIndex - 1
  const subPage = module.subPages[subPageIndex]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header moduleTitle={module.title} />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <StepIndicator current={pageIndex} total={quizIndex} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6">
          {/* SubPage type badge */}
          <div className="mb-4">
            <TypeBadge type={subPage.type} />
          </div>

          {/* SubPage title */}
          <h2 className="font-syne font-bold text-xl sm:text-2xl mb-4" style={{ color: '#191933' }}>
            {subPage.title}
          </h2>

          {/* Content */}
          <div className="space-y-5">
            {subPage.type === 'text' && (
              <p className="font-dm text-gray-700 text-base leading-relaxed">
                {subPage.content}
              </p>
            )}

            {subPage.type === 'video' && (
              <>
                <p className="font-dm text-gray-600 text-sm leading-relaxed">
                  {subPage.content}
                </p>
                <VideoPlayer url={subPage.videoUrl || ''} title={subPage.title} />
              </>
            )}

            {subPage.type === 'photo' && (
              <>
                <p className="font-dm text-gray-600 text-sm leading-relaxed">
                  {subPage.content}
                </p>
                <PhotoView url={subPage.photoUrl || ''} caption={subPage.title} />
              </>
            )}

            {subPage.type === 'link' && (
              <>
                <p className="font-dm text-gray-600 text-base leading-relaxed">
                  {subPage.content}
                </p>
                <a
                  href={subPage.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-xl text-white font-dm font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3ab4a0' }}
                >
                  🔗 {subPage.linkLabel || 'Open link'}
                </a>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3 mt-6">
          <button
            onClick={goPrev}
            className="min-h-[44px] px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-dm font-semibold text-sm hover:border-gs-teal hover:text-gs-teal transition-colors"
          >
            ← Vorige
          </button>
          <button
            onClick={goNext}
            className="min-h-[44px] px-6 py-3 rounded-xl text-white font-dm font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#3ab4a0' }}
          >
            {pageIndex === quizIndex - 1 ? 'Naar de toetsvraag →' : 'Volgende →'}
          </button>
        </div>
      </main>
    </div>
  )
}

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────

function Header({ moduleTitle }: { moduleTitle: string }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/handboek/modules">
          <Image src="/images/logo.svg" alt="Greenspeed" width={100} height={30} className="h-8 w-auto" />
        </Link>
        <span className="font-dm text-xs font-semibold text-gray-500 truncate max-w-[180px] sm:max-w-none">
          {moduleTitle}
        </span>
        <Link href="/handboek/modules" className="font-dm text-xs text-gray-400 hover:text-gs-teal transition-colors whitespace-nowrap">
          Overzicht
        </Link>
      </div>
    </header>
  )
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-dm text-sm font-medium text-gray-500">
        Stap {current} van {total}
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i < current ? '20px' : '8px',
              backgroundColor: i < current ? '#3ab4a0' : '#e5e7eb',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function TypeBadge({ type }: { type: string }) {
  const map: Record<string, { label: string; emoji: string }> = {
    text: { label: 'Tekst', emoji: '📄' },
    video: { label: 'Video', emoji: '🎬' },
    photo: { label: 'Foto', emoji: '🖼️' },
    link: { label: 'Link', emoji: '🔗' },
  }
  const info = map[type] || { label: type, emoji: '📄' }
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-dm font-semibold"
      style={{ backgroundColor: '#d0f0ec', color: '#2a8a7a' }}
    >
      {info.emoji} {info.label}
    </span>
  )
}
