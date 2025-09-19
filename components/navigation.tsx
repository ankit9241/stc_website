"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  
  // Determine the theme based on the current route
  let theme = {
    bg: 'bg-gray-100',
    accent: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    border: 'border-gray-200',
    hover: 'hover:bg-blue-100',
    active: 'bg-blue-200',
    text: 'text-gray-900',
    navText: 'text-gray-800 hover:text-gray-900',
    navHover: 'hover:bg-blue-50',
    navActive: 'bg-blue-100 text-gray-900 font-medium',
    navBg: 'bg-white/90 backdrop-blur-sm shadow-sm'
  }

  if (pathname?.includes('disha')) {
    theme = {
      bg: 'bg-red-50',
      accent: 'red',
      gradient: 'from-red-500 to-red-600',
      border: 'border-red-200',
      hover: 'hover:bg-red-100',
      active: 'bg-red-200',
      text: 'text-gray-900',
      navText: 'text-gray-800 hover:text-gray-900',
      navHover: 'hover:bg-red-50',
      navActive: 'bg-red-100 text-gray-900 font-medium',
      navBg: 'bg-white/90 backdrop-blur-sm shadow-sm'
    }
  } else if (pathname?.includes('arthniti')) {
    theme = {
      bg: 'bg-amber-50',
      accent: 'amber',
      gradient: 'from-amber-500 to-amber-600',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-100',
      active: 'bg-amber-200',
      text: 'text-gray-900',
      navText: 'text-gray-800 hover:text-gray-900',
      navHover: 'hover:bg-amber-50',
      navActive: 'bg-amber-100 text-gray-900 font-medium',
      navBg: 'bg-white/90 backdrop-blur-sm shadow-sm'
    }
  } else if (pathname?.includes('tatva')) {
    theme = {
      bg: 'bg-teal-50',
      accent: 'teal',
      gradient: 'from-teal-500 to-teal-600',
      border: 'border-teal-200',
      hover: 'hover:bg-teal-100',
      active: 'bg-teal-200',
      text: 'text-gray-900',
      navText: 'text-gray-800 hover:text-gray-900',
      navHover: 'hover:bg-teal-50',
      navActive: 'bg-teal-100 text-gray-900 font-medium',
      navBg: 'bg-white/90 backdrop-blur-sm shadow-sm'
    }
  }

  // Map accent to concrete Tailwind classes (avoid dynamic class names).
  const accentBtnClass = (() => {
    switch (theme.accent) {
      case 'red':
        return 'bg-red-600 hover:bg-red-700'
      case 'amber':
        return 'bg-amber-600 hover:bg-amber-700'
      case 'teal':
        return 'bg-teal-600 hover:bg-teal-700'
      default:
        return 'bg-blue-600 hover:bg-blue-700'
    }
  })()

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/wings", label: "Wings" },
    { href: "/team", label: "Our Team" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
  ]

  const _handleDownloadBrochure = () => {
    const link = document.createElement("a")
    link.href = "./STC.pdf"
    link.download = "STC.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleNoticesClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined") {
      const noticesSection = document.getElementById("notices-section")
      if (noticesSection) {
        noticesSection.scrollIntoView({ behavior: "smooth" })
      } else {
        // If not on home page, navigate to home page with hash
        window.location.href = "/#notices"
      }
    }
    setIsOpen(false)
  }

  const isNoticesActive = () => {
    if (!isMounted || typeof window === "undefined") return false
    return pathname === "/" && window.location.hash === "#notices"
  }

  // No dropdowns; simplified navigation

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${theme.navBg} ${isScrolled ? 'py-2' : 'py-4'} border-b ${theme.border}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
              <img 
                src="/images/stc-logo.jpg" 
                alt="STC Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="text-lg font-bold text-[#0f2a4d] group-hover:text-[#1a4b8c] transition-colors leading-tight">
                Student Technical Council
              </h1>
              <p className="text-xs text-[#1a4b8c] font-medium leading-tight">IIT Patna Hybrid Programs</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative flex items-center">
                {item.label === "Notices" ? (
                  <button
                    onClick={handleNoticesClick}
                    className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      isNoticesActive()
                        ? `text-white bg-${theme.accent}-600`
                        : `text-gray-300 ${theme.hover} hover:text-white`
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                      (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href))
                        ? `${theme.navActive} font-semibold`
                        : `${theme.navText} ${theme.navHover}`
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Download Brochure Button */}
            <a
              href="/STC.pdf"
              download
              target="_blank"
              className={`ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${accentBtnClass} transition-colors duration-200`}
            >
              <Download className="w-4 h-4 mr-2" />
              Brochure
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.label === 'Notices' ? (
                <button
                  onClick={(e) => {
                    handleNoticesClick(e)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                    isNoticesActive()
                      ? `text-white bg-${theme.accent}-600`
                      : `text-gray-300 hover:bg-${theme.accent}-800 hover:text-white`
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href))
                      ? `text-white bg-${theme.accent}-600`
                      : `text-gray-300 hover:bg-${theme.accent}-800 hover:text-white`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          <a
              href="/STC.pdf"
              download
              target="_blank"
              className={`ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${accentBtnClass} transition-colors duration-200`}
            >
              <Download className="w-4 h-4 mr-2" />
              Brochure
            </a>
        </div>
      </div>
    </nav>
  )
}
