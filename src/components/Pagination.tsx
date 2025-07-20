'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Pagination({
  totalPosts,
  postsPerPage
}: {
  totalPosts: number,
  postsPerPage: number
}) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  // Generate page numbers with ellipses
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages]
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `?${params.toString()}`
  }

  return (
    <div className="flex justify-center mt-8 sm:mt-12">
      <nav className="flex items-center gap-1 sm:gap-2">
        {/* Previous Button */}
        <Link
          href={createPageURL(currentPage - 1)}
          className={`
            px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base
            ${currentPage <= 1 ?
              'pointer-events-none opacity-50 cursor-default' :
              'hover:bg-gray-100 hover:text-blue-600 transition-colors'
            }
          `}
          aria-disabled={currentPage <= 1}
        >
          <span className="hidden sm:inline">&larr; Previous</span>
          <span className="sm:hidden">&larr;</span>
        </Link>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="px-2 py-1 sm:px-3 sm:py-1 text-gray-500"
            >
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={createPageURL(page as number)}
              className={`
                px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base
                ${currentPage === page ?
                  'bg-blue-600 text-white font-medium' :
                  'hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors'
                }
              `}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </Link>
          )
        ))}

        {/* Next Button */}
        <Link
          href={createPageURL(currentPage + 1)}
          className={`
            px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base
            ${currentPage >= totalPages ?
              'pointer-events-none opacity-50 cursor-default' :
              'hover:bg-gray-100 hover:text-blue-600 transition-colors'
            }
          `}
          aria-disabled={currentPage >= totalPages}
        >
          <span className="hidden sm:inline">Next &rarr;</span>
          <span className="sm:hidden">&rarr;</span>
        </Link>
      </nav>
    </div>
  )
}
