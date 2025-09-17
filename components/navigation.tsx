"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const wingsButtonRef = useRef<HTMLButtonElement | null>(null)
  const wingsDropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Dropdown now uses click effect only, no hover effect
  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/wings",
      label: "Wings",
      dropdown: [
        { href: "/wings/disha", label: "DISHA" },
        { href: "/wings/arthniti", label: "ARTHNITI" },
        { href: "/wings/tatva", label: "TATVA" },
      ],
      // Add a flag to indicate click-activated dropdown
      clickDropdown: true,
    },
    { href: "/team", label: "Our Team" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact Us" },
  ]

  // Move dropdown a bit upper by adjusting mt-1 to mt-0 or negative margin
  const dropdownMenuClass = "absolute top-full left-0 -mt-10 w-48 bg-white rounded-lg shadow-lg border border-[#453CD5]/20 py-2 z-50"

  // Add click support for dropdowns
  const handleDropdownToggle = (href: string) => {
    setActiveDropdown((prev) => (prev === href ? null : href))
  }

  const handleDownloadBrochure = () => {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!activeDropdown) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        wingsButtonRef.current &&
        wingsDropdownRef.current &&
        !wingsButtonRef.current.contains(event.target as Node) &&
        !wingsDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <nav
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? "bg-white/20 backdrop-blur-md shadow-lg border-b border-[#453CD5]/10" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-[#453CD5] to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
          <span className="text-white font-bold text-lg">SS</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
        </div>
        <div className="hidden sm:flex flex-col justify-center">
          <h1 className="text-xl font-bold text-[#453CD5] group-hover:text-blue-600 transition-colors leading-tight">
          Student Technical Council
          </h1>
          <p className="text-sm text-[#453CD5] font-medium leading-tight">IIT Patna Hybrid Programs</p>
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
        {navItems.map((item) => (
          <div key={item.href} className="relative flex items-center">
          {item.dropdown ? (
            <div className="relative">
              <button
                ref={item.href === "/wings" ? wingsButtonRef : undefined}
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === item.href ? null : item.href
                  )
                }
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  (pathname.startsWith(item.href) || (item.href === "/wings" && activeDropdown === "/wings"))
                    ? "text-[#453CD5] bg-[#453CD5]/10"
                    : "text-gray-700"
                }`}
              >
                {item.label}
                <ChevronDown className="w-4 h-4 ml-1 text-[#453CD5]" />
              </button>
              {activeDropdown === item.href && (
                <div
                  ref={item.href === "/wings" ? wingsDropdownRef : undefined}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-[#453CD5]/20 py-2 z-50"
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#453CD5]/10 hover:text-[#453CD5] transition-colors"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : item.label === "Notices" ? (
            <button
              onClick={handleNoticesClick}
              className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                isNoticesActive()
                  ? "text-[#453CD5] bg-[#453CD5]/10"
                  : "text-gray-700 hover:text-[#453CD5] hover:bg-[#453CD5]/10"
              }`}
            >
              {item.label}
            </button>
          ) : (
            <Link
              href={item.href}
              className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                pathname === item.href
                  ? "text-[#453CD5] bg-[#453CD5]/10"
                  : "text-gray-700 hover:text-[#453CD5] hover:bg-[#453CD5]/10"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#453CD5] rounded-full"></div>
              )}
            </Link>
          )}
          </div>
        ))}
        </div>
        <div className="hidden lg:flex ml-6 items-center">
        <Button
          size="sm"
          onClick={handleDownloadBrochure}
          className="bg-[#453CD5] hover:bg-[#453CD5] text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 px-4 py-2 h-10 flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-white" />
          <span className="whitespace-nowrap">Download Brochure</span>
        </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-2">
        <Button
          size="sm"
          onClick={handleDownloadBrochure}
          className="bg-gradient-to-r from-[#453CD5] to-blue-600 text-white text-xs px-3 py-2 h-8"
        >
          <Download className="w-3 h-3 mr-1 text-[#453CD5]" />
          Brochure
        </Button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-gray-700 hover:text-[#453CD5] hover:bg-[#453CD5]/10 transition-colors flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-6 w-6 text-[#453CD5]" /> : <Menu className="h-6 w-6 text-[#453CD5]" />}
        </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-screen opacity-100 pb-4 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.href}>
          {item.label === "Notices" ? (
            <button
            onClick={handleNoticesClick}
            className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
              isNoticesActive()
              ? "text-[#453CD5] bg-[#453CD5]/10 border-l-4 border-[#453CD5]"
              : "text-gray-700 hover:text-[#453CD5] hover:bg-[#453CD5]/10"
            }`}
            >
            {item.label}
            </button>
          ) : (
            <Link
            href={item.href}
            className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
              pathname === item.href || pathname.startsWith(item.href)
              ? "text-[#453CD5] bg-[#453CD5]/10 border-l-4 border-[#453CD5]"
              : "text-gray-700 hover:text-[#453CD5] hover:bg-[#453CD5]/10"
            }`}
            onClick={() => setIsOpen(false)}
            >
            {item.label}
            </Link>
          )}
          {item.dropdown && (
            <div className="ml-4 mt-2 space-y-1">
            {item.dropdown.map((dropdownItem) => (
              <Link
              key={dropdownItem.href}
              href={dropdownItem.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-[#453CD5] hover:bg-[#453CD5]/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
              >
              {dropdownItem.label}
              </Link>
            ))}
            </div>
          )}
          </div>
        ))}
        </div>
      </div>
      </div>
    </nav>
  )
}
