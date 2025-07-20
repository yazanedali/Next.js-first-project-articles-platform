export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto animate-pulse">
        {/* Header Section Skeleton */}
        <header className="text-center mb-12">
          <div className="h-12 bg-gray-200 rounded-full w-1/3 mx-auto mb-6"></div>
          <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
        </header>

        {/* Main Content Skeleton */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 space-y-8">
            {/* Introduction Skeleton */}
            <section className="space-y-4">
              <div className="h-8 bg-gray-200 rounded-full w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
            </section>

            {/* Developer Info Skeleton */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-24 w-24 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-3">
                  <div className="h-6 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                </div>
              </div>
            </section>

            {/* Features Skeleton */}
            <section className="space-y-6">
              <div className="h-8 bg-gray-200 rounded-full w-1/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg space-y-3">
                    <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                    <div className="h-5 bg-gray-200 rounded-full w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA Skeleton */}
            <section className="text-center pt-6">
              <div className="h-6 bg-gray-200 rounded-full w-1/3 mx-auto mb-6"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-40 mx-auto"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}