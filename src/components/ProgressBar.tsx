interface ProgressBarProps {
  progress: number
  current: number
  total: number
  color?: string
}

export default function ProgressBar({ progress, current, total, color = 'bg-mbti' }: ProgressBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-slate-500 mb-2">
        <span>Question {Math.min(current + 1, total)} of {total}</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}
