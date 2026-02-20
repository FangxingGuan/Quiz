interface RadarBarProps {
  scores: Record<string, number>
  labels: Record<string, string>
  maxScore: number
  color?: string
}

export default function RadarBar({ scores, labels, maxScore, color }: RadarBarProps) {
  const entries = Object.entries(labels)

  return (
    <div className="grid gap-3 mt-4">
      {entries.map(([key, label]) => {
        const score = scores[key] ?? 0
        const pct = Math.round((score / maxScore) * 100)
        return (
          <div key={key}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-700 font-medium">{label}</span>
              <span className="text-slate-500">{pct}%</span>
            </div>
            <div className="h-3 bg-white/60 rounded-full overflow-hidden">
              <div
                className={`h-full ${color ?? 'bg-trending'} rounded-full transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
