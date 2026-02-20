import type { UserQuizRecord } from '../types'

const STORAGE_KEY = 'newsbreak-quiz-records'

export function getRecords(): UserQuizRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getRecordByQuizId(quizId: string): UserQuizRecord | undefined {
  return getRecords().find(r => r.quizId === quizId)
}

export function saveRecord(record: UserQuizRecord): void {
  const records = getRecords().filter(r => r.quizId !== record.quizId)
  records.push(record)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}
