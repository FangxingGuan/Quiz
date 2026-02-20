import { useSyncExternalStore, useCallback } from 'react'
import type { UserQuizRecord } from '../types'
import { getRecords, saveRecord } from '../utils/storage'

let snapshot = getRecords()

function subscribe(callback: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === 'newsbreak-quiz-records') {
      snapshot = getRecords()
      callback()
    }
  }
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}

function getSnapshot() {
  return snapshot
}

export function useQuizRecords() {
  const records = useSyncExternalStore(subscribe, getSnapshot)

  const save = useCallback((record: UserQuizRecord) => {
    saveRecord(record)
    snapshot = getRecords()
  }, [])

  return { records, save }
}
