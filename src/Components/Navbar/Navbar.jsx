import { useState } from "react";
import { Home, User, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/about" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full  backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900"></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center px-3 py-2 text-sm font-medium text-black transition-colors duration-300 hover:text-blue-600"
                >
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* X icon */
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}