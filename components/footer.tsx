import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Student Technical Council</h3>
                <p className="text-blue-400">IIT Patna</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Students Through Innovation. A reimagined platform with three specialized wings fostering
              career development, entrepreneurship, and technological innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Student Clubs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">IIT Patna, Bihta, Patna - 801106</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">stc@iitp.ac.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Student Technical Council, IIT Patna CEP UG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
