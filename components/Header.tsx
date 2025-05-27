"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Programs and Services" },
    { href: "/education", label: "Education" },
    { href: "/history", label: "History" },
    { href: "/news", label: "News & Events" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
    { href: "/support", label: "Support" },
  ]

  return (
    <header className="whap-header fixed top-0 w-full z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <h1 className="whap-logo text-2xl md:text-4xl font-playfair leading-none">WOMEN HELPING ALL PEOPLE</h1>
            <span className="text-sm text-gray-600 font-medium italic mt-1">You are never alone...</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whap-nav-link ${
                  pathname === item.href ? "active" : ""
                } ${item.label === "Support" ? "whap-btn whap-btn-primary ml-4" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            id="nav-toggle"
            className="lg:hidden flex flex-col space-y-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bar w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`bar w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`bar w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="nav-menu" className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-whap-light">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whap-nav-link ${
                    pathname === item.href ? "active" : ""
                  } ${item.label === "Support" ? "whap-btn whap-btn-primary mt-4 mx-4" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
