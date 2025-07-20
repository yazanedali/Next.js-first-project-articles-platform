export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto animate-pulse">
        {/* Header Section Skeleton */}
        <header className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-full w-1/3 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
          <div className="w-36 h-1 bg-gray-200 mx-auto rounded-full mt-6"></div>
        </header>

        {/* Services Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-7 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded-full w-full mb-4"></div>
                
                <ul className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-5 w-5 bg-gray-200 rounded-full mt-0.5 mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-4/5"></div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="h-5 bg-gray-200 rounded-full w-24"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 text-center">
            <div className="h-8 bg-gray-200 rounded-full w-1/2 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded-full w-3/4 mx-auto mb-8"></div>
            <div className="h-12 bg-gray-200 rounded-lg w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}