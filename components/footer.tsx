'use client';

import Link from "next/link"
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  
  // Determine the theme based on the current route
  let theme = {
    bg: 'bg-gray-900',
    accent: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    border: 'border-gray-800'
  }

  if (pathname?.includes('disha')) {
    theme = {
      bg: 'bg-red-900',
      accent: 'red',
      gradient: 'from-red-600 to-red-800',
      border: 'border-red-800'
    }
  } else if (pathname?.includes('arthniti')) {
    theme = {
      bg: 'bg-amber-900',
      accent: 'amber',
      gradient: 'from-amber-600 to-amber-800',
      border: 'border-amber-800'
    }
  } else if (pathname?.includes('tatva')) {
    theme = {
      bg: 'bg-teal-900',
      accent: 'teal',
      gradient: 'from-teal-600 to-teal-800',
      border: 'border-teal-800'
    }
  }

  const accentColor = `text-${theme.accent}-400`
  const hoverColor = `hover:text-${theme.accent}-400`

  return (
    <footer className={`${theme.bg} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/stc-logo.jpg" alt="STC Logo" className="w-12 h-12 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold">Student Technical Council</h3>
                <p className={accentColor}>IIT Patna</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Students Through Innovation. A reimagined platform with three specialized wings fostering
              career development, entrepreneurship, and technological innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/stc-iitp-hybrid-programs/posts/?feedView=all" className={`text-gray-400 ${hoverColor} transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/stc_iitp_cet/" className={`text-gray-400 ${hoverColor} transition-colors`}>
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Link href="/" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Home
              </Link>
              <Link href="/wings" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Our Wings
              </Link>
              <Link href="/team" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Our Team
              </Link>
              <Link href="/events" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Events
              </Link>
              <Link href="/clubs" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Student Clubs
              </Link>
              <Link href="/participation" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Participation
              </Link>
              <Link href="/contact" className={`text-gray-300 ${hoverColor} transition-colors`}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className={`w-4 h-4 ${accentColor}`} />
                <span className="text-gray-300 text-sm">IIT Patna, Bihta, Patna - 801106</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-4 h-4 ${accentColor}`} />
                <span className="text-gray-300 text-sm">stc@iitp.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t ${theme.border} mt-8 pt-8 text-center`}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Student Technical Council, IIT Patna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
