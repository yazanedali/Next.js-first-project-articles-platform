export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto animate-pulse">
        {/* Header Section Skeleton */}
        <header className="mb-8 text-center">
          <div className="h-12 bg-gray-200 rounded-full w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-full w-2/3 mx-auto"></div>
        </header>

        {/* Posts Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                {/* Badge Skeleton */}
                <div className="h-6 bg-gray-200 rounded-full w-20 mb-3"></div>
                
                {/* Title Skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-5 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-5 bg-gray-200 rounded-full w-5/6"></div>
                </div>
                
                {/* Footer Skeleton */}
                <div className="flex justify-between items-center mt-6">
                  <div className="h-4 bg-gray-200 rounded-full w-24"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-4"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <div className="h-10 bg-gray-200 rounded-md w-20"></div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-10 bg-gray-200 rounded-md w-10"></div>
              ))}
            </div>
            <div className="h-10 bg-gray-200 rounded-md w-20"></div>
          </div>
        </div>
      </div>
    </main>
  )
}