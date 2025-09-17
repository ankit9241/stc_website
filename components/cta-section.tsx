"use client"

import { Button } from "@/components/ui/button"
import { Download, Users, Building2 } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const handleDownloadBrochure = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/student-senate-brochure.pdf"
    link.download = "Student-Senate-Brochure-IIT-Patna.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Student Technical Council?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Be part of our innovative platform that empowers students through specialized wings and comprehensive
            development programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download Resources</h3>
            <p className="opacity-90">Access our comprehensive brochure and learn about all opportunities</p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
            <p className="opacity-90">Connect with like-minded students across DISHA, ARTHNITI, and TATVA</p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Your Future</h3>
            <p className="opacity-90">Develop skills, gain experience, and create lasting impact</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleDownloadBrochure}
            className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-3 text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </Button>
          <Link href="/participation" className="inline-block">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
