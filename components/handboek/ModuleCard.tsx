import Link from 'next/link'
import type { Module } from '@/data/modules'

interface ModuleCardProps {
  module: Module
  isCompleted: boolean
  isLocked: boolean
}

export default function ModuleCard({ module, isCompleted, isLocked }: ModuleCardProps) {
  const href = `/handboek/modules/${module.id}`

  const cardContent = (
    <div
      className={`
        relative bg-white rounded-2xl p-5 shadow-sm border transition-all duration-200 h-full flex flex-col
        ${isLocked
          ? 'border-gray-100 opacity-60 cursor-not-allowed'
          : isCompleted
            ? 'border-gs-teal hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
            : 'border-gray-200 hover:border-gs-teal hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
        }
      `}
    >
      {/* Completion badge */}
      {isCompleted && (
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
          style={{ backgroundColor: '#3ab4a0' }}
        >
          ✓
        </div>
      )}

      {/* Icon + number */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ backgroundColor: '#d0f0ec' }}
        >
          {isLocked ? '🔒' : module.icon}
        </div>
        <span className="text-xs font-dm font-semibold text-gray-400 uppercase tracking-widest">
          Module {module.number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-syne font-bold text-base mb-2 leading-tight"
        style={{ color: '#191933' }}
      >
        {module.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 font-dm text-sm leading-relaxed flex-1">
        {module.description}
      </p>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-dm text-gray-400">
          {module.subPages.length} onderdelen
        </span>
        {isCompleted ? (
          <span className="text-xs font-dm font-semibold" style={{ color: '#3ab4a0' }}>
            Afgerond
          </span>
        ) : isLocked ? (
          <span className="text-xs font-dm text-gray-400">Vergrendeld</span>
        ) : (
          <span className="text-xs font-dm font-semibold" style={{ color: '#3ab4a0' }}>
            Starten →
          </span>
        )}
      </div>
    </div>
  )

  if (isLocked) {
    return <div className="h-full">{cardContent}</div>
  }

  return (
    <Link href={href} className="h-full block">
      {cardContent}
    </Link>
  )
}
