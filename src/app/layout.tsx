import Link from "next/link";
import Head from "next/head";
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo & Main Links */}
              <div className="flex items-center space-x-4">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  🏠 Home
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  About Us
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Services
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
              </div>
              <div className="flex space-x-4">
                <a href="#privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}