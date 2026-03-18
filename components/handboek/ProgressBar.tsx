'use client'

interface ProgressBarProps {
  completed: number
  total: number
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-dm font-medium text-gray-600">
          Voortgang
        </span>
        <span className="text-sm font-dm font-semibold" style={{ color: '#3ab4a0' }}>
          {completed} van {total} modules afgerond
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: '#3ab4a0',
          }}
        />
      </div>
      {completed === total && total > 0 && (
        <p className="text-xs font-dm text-center mt-2" style={{ color: '#3ab4a0' }}>
          Alle modules afgerond! Je kunt nu de eindtoets maken.
        </p>
      )}
    </div>
  )
}
