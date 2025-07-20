export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto animate-pulse">
        {/* Header Section Skeleton */}
        <header className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-full w-1/3 mx-auto mb-6"></div>
          <div className="h-4 bg-gray-200 rounded-full w-1/2 mx-auto"></div>
          <div className="w-70 h-1 bg-gray-200 mx-auto rounded-full mt-6"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Skeleton */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
            <div className="space-y-6">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-5 bg-gray-200 rounded-full w-1/4 mb-3"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>
              ))}
              <div className="h-14 bg-gray-200 rounded-lg mt-6"></div>
            </div>
          </div>

          {/* Contact Info Skeleton */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
              <div className="h-8 bg-gray-200 rounded-full w-1/3 mb-8"></div>
              
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-5 bg-gray-200 rounded-full w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
              <div className="h-8 bg-gray-200 rounded-full w-1/4 mb-8"></div>
              
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between pb-3">
                    <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}