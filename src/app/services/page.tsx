import Link from "next/link";

export default async function ServicesPage() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const services = [
    {
      title: "Web Development",
      description: "Design and build complete websites and web apps using modern technologies.",
      icon: "💻",
      features: [
        "Interactive user interfaces",
        "Custom content management systems",
        "API integrations"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive marketing solutions to grow your digital presence.",
      icon: "📈",
      features: [
        "Search Engine Optimization (SEO)",
        "Social media advertising",
        "Data analysis and performance reports"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and user-friendly designs to enhance user experience.",
      icon: "🎨",
      features: [
        "User interface design",
        "User experience testing",
        "Interactive prototyping"
      ]
    },
    {
      title: "Technical Consulting",
      description: "Expert consulting and solutions to scale your business.",
      icon: "🔍",
      features: [
        "System requirements analysis",
        "Software architecture planning",
        "Code review and performance optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Our Services
            </span>
            <div className="w-55 h-1 bg-purple-500 mx-auto rounded-full mt-6"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer integrated technology solutions that help you grow and stand out in the digital world.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <Link
                  href="#contact"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  Request Service
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Have a custom project or question?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to help you achieve your digital goals. Contact us today to bring your project to life with top-notch quality.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
