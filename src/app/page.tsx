'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import LinkWithSpinner from './ui/LinkWithSpinner'
import Pagination from '../components/Pagination'

interface Post {
  id: number
  title: string
}

export default function HomePage() {
  const searchParams = useSearchParams()
  const page = Number(searchParams.get('page')) || 1

  const postsPerPage = 9
  const start = (page - 1) * postsPerPage
  const end = start + postsPerPage

  const [posts, setPosts] = useState<Post[]>([])
  const [totalPosts, setTotalPosts] = useState(0)

 useEffect(() => {
  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const allPosts: Post[] = await res.json()
    setTotalPosts(allPosts.length)
    setPosts(allPosts.slice(start, end))
  }

  fetchPosts()
}, [page, start, end]) // أضف start و end كمتابعات

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            📚 Digital Article Library
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest articles in development and technology
          </p>
        </header>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <LinkWithSpinner href={`/posts/${post.id}`}>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      Post #{post.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">Read more →</span>
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>
              </LinkWithSpinner>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <Pagination 
          totalPosts={totalPosts} 
          postsPerPage={postsPerPage} 
        />
      </div>
    </main>
  )
}
