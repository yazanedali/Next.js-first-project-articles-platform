export default async function AboutPage() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-400">
              About Us
            </span>
          </h1>
          <div className="w-35 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Welcome to the Digital Articles Platform
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A specialized platform providing high-quality content in technology,
                programming, and personal development. Our mission is to enrich the web
                with valuable and practical resources.
              </p>
            </section>

            {/* Developer Info */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  Y
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Eng. Yazan Edali
                  </h3>
                  <p className="text-gray-600">
                    A frontend developer and UI expert with over 5 years of experience
                    in web development. He designed and built this platform to serve as
                    a helpful source for everyone.
                  </p>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: '📚',
                    title: 'Diverse Articles',
                    description: 'Covers various technical topics',
                  },
                  {
                    icon: '🎯',
                    title: 'Accurate Content',
                    description: 'Reviewed by specialized experts',
                  },
                  {
                    icon: '💡',
                    title: 'Practical Ideas',
                    description: 'Real-world use cases and examples',
                  },
                  {
                    icon: '🔄',
                    title: 'Continuous Updates',
                    description: 'Regularly updated with fresh content',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="text-center pt-6">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Have a question or suggestion?
              </h3>
              <a
                href="mailto:yazanhendi999@gmail.com"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
