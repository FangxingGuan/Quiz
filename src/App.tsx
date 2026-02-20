import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center">
          <Link to="/" className="text-lg font-bold text-slate-800 no-underline">
            NewsBreak Quiz
          </Link>
        </div>
      </header>
      <main className="max-w-lg mx-auto">
        <Outlet />
      </main>
    </div>
  )
}
