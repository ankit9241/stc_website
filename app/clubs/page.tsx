"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Code, Briefcase, TrendingUp, Globe, Lightbulb } from "lucide-react"
import Link from "next/link"

const clubs = [
  {
    name: "Coding Club",
    description:
      "Enhancing programming skills through competitive coding, hackathons, and technical workshops. Preparing students for technical interviews at top tech companies.",
    icon: Code,
    activities: ["Weekly coding contests", "Algorithm workshops", "Interview preparation", "Open source contributions"],
    members: "200+",
    color: "bg-blue-500",
  },
  {
    name: "Entrepreneurship Cell",
    description:
      "Fostering entrepreneurial mindset and supporting student startups. Connecting aspiring entrepreneurs with mentors and investors.",
    icon: Lightbulb,
    activities: ["Startup pitch competitions", "Mentorship programs", "Investor meetups", "Business plan workshops"],
    members: "150+",
    color: "bg-green-500",
  },
  {
    name: "Finance Club",
    description:
      "Building financial literacy and preparing students for careers in finance, consulting, and investment banking.",
    icon: TrendingUp,
    activities: [
      "Stock market simulations",
      "Case study competitions",
      "Industry expert talks",
      "Financial modeling workshops",
    ],
    members: "120+",
    color: "bg-purple-500",
  },
  {
    name: "Consulting Club",
    description:
      "Developing analytical and problem-solving skills essential for management consulting roles through case studies and group discussions.",
    icon: Briefcase,
    activities: ["Case competitions", "Consulting workshops", "Mock interviews", "Industry networking"],
    members: "100+",
    color: "bg-orange-500",
  },
  {
    name: "International Relations Club",
    description:
      "Preparing students for global opportunities and international placements through cultural exchange and language programs.",
    icon: Globe,
    activities: [
      "Cultural exchange programs",
      "Language workshops",
      "International internship guidance",
      "Global career sessions",
    ],
    members: "80+",
    color: "bg-teal-500",
  },
  {
    name: "Professional Development Society",
    description:
      "Comprehensive skill development focusing on soft skills, communication, and professional etiquette for career success.",
    icon: Users,
    activities: [
      "Communication workshops",
      "Leadership training",
      "Personality development",
      "Professional etiquette sessions",
    ],
    members: "180+",
    color: "bg-red-500",
  },
]

export default function ClubsPage() {
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Student Clubs & Societies</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Empowering students through specialized clubs that enhance skills, build networks, and prepare for
              successful careers across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Active Clubs</h2>
            <p className="text-xl text-gray-600">Join our vibrant community of learners and achievers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => {
              const IconComponent = club.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${club.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                        <p className="text-sm text-gray-600">{club.members} active members</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{club.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Our Clubs?</h2>
            <p className="text-xl text-gray-600">Discover the advantages of being part of our student community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Networking</h3>
              <p className="text-gray-600">Connect with like-minded peers and industry professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-gray-600">Enhance technical and soft skills through practical activities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Opportunities</h3>
              <p className="text-gray-600">Access exclusive internships and job opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Work on cutting-edge projects and innovative solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards enhancing your skills and building meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
              >
                Get Involved
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={handleDownloadBrochure}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
