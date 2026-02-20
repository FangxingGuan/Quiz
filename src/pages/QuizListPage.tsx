import { quizzes } from '../data'
import { getRecords } from '../utils/storage'
import QuizCard from '../components/QuizCard'

export default function QuizListPage() {
  const records = getRecords()
  const completedIds = new Set(records.map(r => r.quizId))

  return (
    <div className="p-4 pb-8">
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-1">Discover Yourself</h1>
        <p className="text-sm text-slate-500">Fun quizzes powered by NewsBreak</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {quizzes.map(quiz => (
          <QuizCard key={quiz.id} quiz={quiz} completed={completedIds.has(quiz.id)} />
        ))}
      </div>
    </div>
  )
}
