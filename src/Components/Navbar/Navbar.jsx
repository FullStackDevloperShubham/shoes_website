import { useState } from "react"
import { Home, User, Mail, Menu, X } from "lucide-react"

export default function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", icon: Home, href: "#" },
    { name: "About", icon: User, href: "#" },
    { name: "Contact", icon: Mail, href: "#" },
  ]

  return (
    <nav className="bg-white/80 w-96 rounded-2xl ml-[30rem]  backdrop-blur-sm fixed top-0 left-0 right-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Logo</span>
          </div> */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center text-gray-700 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-600"
              >
                <item.icon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center text-gray-700 px-3 py-2 text-base font-medium transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              >
                <item.icon className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

