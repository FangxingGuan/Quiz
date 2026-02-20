import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import QuizListPage from './pages/QuizListPage'
import QuizIntroPage from './pages/QuizIntroPage'
import QuestionPage from './pages/QuestionPage'
import ResultPage from './pages/ResultPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<QuizListPage />} />
          <Route path="/quiz/:quizId" element={<QuizIntroPage />} />
          <Route path="/quiz/:quizId/play" element={<QuestionPage />} />
          <Route path="/quiz/:quizId/result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
