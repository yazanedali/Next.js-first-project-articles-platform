export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-pulse">
        {/* Header Section Skeleton */}
        <header className="text-center mb-8">
          <div className="h-10 bg-gray-200 rounded-full w-3/4 mx-auto mb-4"></div>
          <div className="w-70 h-1 bg-gray-200 mx-auto rounded-full"></div>
        </header>

        {/* Post Content Area Skeleton */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Author Info Skeleton */}
            {/* <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-gray-200 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div> */}

            {/* Featured Image Skeleton */}
            <div className="aspect-video w-full bg-gray-200 rounded-lg"></div>

            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>

            {/* Tags Skeleton */}
            <div className="flex flex-wrap gap-2 pt-4">
              <div className="h-6 bg-gray-200 rounded-md w-16"></div>
              <div className="h-6 bg-gray-200 rounded-md w-20"></div>
              <div className="h-6 bg-gray-200 rounded-md w-14"></div>
            </div>

            {/* Comments Section Skeleton */}
            <div className="pt-8 border-t border-gray-100">
              <div className="h-5 bg-gray-200 rounded w-24 mb-6"></div>
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 bg-gray-200 rounded-md"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Back Button Skeleton */}
          {/* <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="inline-flex items-center">
              <div className="h-5 w-5 bg-gray-200 rounded mr-2"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}