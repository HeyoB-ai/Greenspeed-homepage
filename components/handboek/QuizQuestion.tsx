'use client'

import { useState } from 'react'

interface QuizQuestionProps {
  question: string
  options: string[]
  correctIndex: number
  onAnswer: (correct: boolean) => void
}

export default function QuizQuestion({
  question,
  options,
  correctIndex,
  onAnswer,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selected === null) return
    setSubmitted(true)
    onAnswer(selected === correctIndex)
  }

  const handleRetry = () => {
    setSelected(null)
    setSubmitted(false)
  }

  const isCorrect = submitted && selected === correctIndex

  return (
    <div className="w-full">
      <p className="font-syne font-bold text-lg mb-5" style={{ color: '#191933' }}>
        {question}
      </p>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => {
          let borderColor = 'border-gray-200'
          let bgColor = 'bg-white'
          let textColor = 'text-gray-700'

          if (submitted) {
            if (index === correctIndex) {
              borderColor = 'border-green-500'
              bgColor = 'bg-green-50'
              textColor = 'text-green-800'
            } else if (index === selected && selected !== correctIndex) {
              borderColor = 'border-red-400'
              bgColor = 'bg-red-50'
              textColor = 'text-red-700'
            }
          } else if (selected === index) {
            borderColor = 'border-gs-teal'
            bgColor = 'bg-gs-teal-light'
            textColor = 'text-gray-800'
          }

          return (
            <button
              key={index}
              onClick={() => !submitted && setSelected(index)}
              disabled={submitted}
              className={`
                w-full min-h-[44px] px-4 py-3 rounded-xl border-2 text-left font-dm text-sm
                transition-all duration-150 flex items-center gap-3
                ${borderColor} ${bgColor} ${textColor}
                ${!submitted ? 'hover:border-gs-teal cursor-pointer' : 'cursor-default'}
              `}
            >
              <span
                className={`
                  w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center text-xs font-bold
                  ${selected === index && !submitted
                    ? 'border-gs-teal bg-gs-teal text-white'
                    : submitted && index === correctIndex
                      ? 'border-green-500 bg-green-500 text-white'
                      : submitted && index === selected && selected !== correctIndex
                        ? 'border-red-400 bg-red-400 text-white'
                        : 'border-gray-300'
                  }
                `}
              >
                {submitted && index === correctIndex
                  ? '✓'
                  : submitted && index === selected && selected !== correctIndex
                    ? '✗'
                    : String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          )
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full min-h-[44px] py-3 rounded-xl text-white font-dm font-semibold text-sm transition-opacity disabled:opacity-40"
          style={{ backgroundColor: '#3ab4a0' }}
        >
          Bevestig antwoord
        </button>
      ) : (
        <div className="space-y-3">
          <div
            className={`p-4 rounded-xl border-2 text-sm font-dm ${
              isCorrect
                ? 'border-green-400 bg-green-50 text-green-800'
                : 'border-red-300 bg-red-50 text-red-700'
            }`}
          >
            {isCorrect ? (
              <span className="font-semibold">Goed gedaan! Dat is het juiste antwoord.</span>
            ) : (
              <span>
                <span className="font-semibold">Helaas, dat was niet correct.</span> Het juiste
                antwoord is:{' '}
                <strong>&ldquo;{options[correctIndex]}&rdquo;</strong>
              </span>
            )}
          </div>

          {!isCorrect && (
            <button
              onClick={handleRetry}
              className="w-full min-h-[44px] py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-dm font-semibold text-sm hover:border-gs-teal hover:text-gs-teal transition-colors"
            >
              Opnieuw proberen
            </button>
          )}
        </div>
      )}
    </div>
  )
}
