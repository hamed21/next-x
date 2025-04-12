'use client'

import { useEffect, useState } from 'react'
import { INews, INewsResponse } from '@/types/news.type'

export const News = () => {
  const [news, setNews] = useState<INews[]>([])
  const [articleNumber, setArticleNumber] = useState(3)

  useEffect(() => {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json')
      .then((res): Promise<INewsResponse> => res.json())
      .then((data) => setNews(data.articles))
  }, [])

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl py-4">
      <h4 className="font-bold text-xl px-4">Whats happening</h4>
      {news.slice(0, articleNumber).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
              </div>
              <img src={article.urlToImage} width={70} className="rounded-xl" />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticleNumber(articleNumber + 3)}
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm"
      >
        Load more
      </button>
    </div>
  )
}
