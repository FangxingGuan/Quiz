import { useState } from 'react'
import type { NewsArticle } from '../types'

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex gap-3">
        <img
          src={article.imageUrl}
          alt=""
          className="w-24 h-18 rounded-lg object-cover shrink-0"
          loading="lazy"
        />
        <div className="flex flex-col justify-between min-w-0 py-0.5">
          <h4 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-snug">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <span className="text-xs text-slate-400 shrink-0">{article.source}</span>
            {article.tags.map(tag => (
              <span key={tag} className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {expanded && (
        <p className="text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
          {article.summary}
        </p>
      )}
    </div>
  )
}
