import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy, Clock, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import CompanyCards from "@/components/CompanyCards"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events & Competitions",
  description: "Discover exciting technical events, hackathons, workshops, and competitions by STC IITP - Student Technical Council IIT Patna. Join innovation and learning opportunities.",
  keywords: [
    "STC IITP events",
    "IIT Patna hackathons",
    "STC hybrid events", 
    "technical competitions IITP",
    "coding contests STC",
    "workshops STC IITP",
    "seminars IIT Patna",
    "student events IITP",
    "innovation competitions",
    "tech talks STC",
    "internship drives IITP",
    "STC IITP competitions",
    "Student Technical Council events",
    "technical festivals IITP"
  ],
  openGraph: {
    title: "Events & Competitions",
    description: "Join exciting technical events, hackathons, and competitions by Student Technical Council IIT Patna. Showcase your skills and learn from industry experts.",
    images: ['/images/hack-n-tech-poster.jpg'],
    url: '/events',
  },
  twitter: {
    title: "Events & Competitions | STC IITP",
    description: "Join exciting technical events, hackathons, and competitions by Student Technical Council IIT Patna. Showcase your skills and learn from industry experts.",
    card: 'summary_large_image',
    images: ['/images/hack-n-tech-poster.jpg'],
  },
  alternates: {
    canonical: '/events',
  },
}

const hackathonWinners = [
  {
    position: "Winner",
    teamName: "Caffeine Coderz",
    members: ["Shubham Raj (Team Leader)", "Ayush Kr. Gupta", "Nishant Sharma", "Arvind Kumar", "Harsh Kumar"],
    image: "/images/hackathon-winner.jpg",
    prize: "₹5,000",
    project: "AI-powered Smart Campus Management System",
  },
  {
    position: "1st Runner Up",
    teamName: "Prachand",
    members: ["Ankit Shankar (Team Leader)", "Akash Dhibar", "Debangsu Das", "Smita Raj", "Alekhya Chatterjee"],
    image: "/images/hackathon-first-runner.jpg",
    prize: "₹3,000",
    project: "Blockchain-based Student Verification Platform",
  },
  {
    position: "2nd Runner Up",
    teamName: "Tech_X",
    members: ["Ali Raza (Team Leader)", "Brejbhushan Kumar", "Saurav Sharma", "Ashmit Kumar", "Ankit Kumar"],
    image: "/images/hackathon-second-runner.jpg",
    prize: "₹2,000",
    project: "IoT-enabled Environmental Monitoring System",
  },
]

const internshipCompanies = [
  { name: "GUVI", category: "EdTech", positions: "Frontend/Backend Developer", image: "/images/company/guvi.png" },
  { name: "HCL", category: "IT Services", positions: "Software Engineer", image: "/images/company/hcl.png" },
  { name: "Superset", category: "Analytics", positions: "Data Analyst", image: "/images/company/superset.png" },
  { name: "Physics Wallah", category: "EdTech", positions: "Content Developer", image: "/images/company/pw.png" },
  { name: "Humantics", category: "HR Tech", positions: "Product Developer", image: "/images/company/humantics.png" },
  { name: "Samriddh", category: "Consulting", positions: "Business Analyst", image: "/images/company/samriddh.png" },
  { name: "SkillNet", category: "Training", positions: "Technical Trainer", image: "/images/company/skillnet.png" },
  { name: "Makasa Industries", category: "Manufacturing", positions: "Process Engineer", image: "/images/company/makasa.png" },
  { name: "NEXTUTE", category: "EdTech", positions: "Software Developer", image: "/images/company/nextute.png" },
  { name: "D2H", category: "Media", positions: "Content Creator", image: "/images/company/d2h.png" },
  { name: "FLATX", category: "Real Estate", positions: "Full Stack Developer", image: "/images/company/flatx.png" },
  { name: "deWall", category: "FinTech", positions: "Backend Developer", image: "/images/company/dewall.png" },
  { name: "Apnada", category: "E-commerce", positions: "Product Manager", image: "/images/company/apnada.png" },
  { name: "Syksha", category: "Fashion Tech", positions: "UI/UX Designer", image: "/images/company/syksha.png" },
  { name: "Gramin", category: "AgriTech", positions: "Mobile App Developer", image: "/images/company/gramin.png" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Events & Achievements</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Celebrating innovation, fostering talent, and creating opportunities through impactful events and
              initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Hack N Tech Hackathon */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">HACK N TECH Hackathon 2025</h2>
            <p className="text-xl text-gray-600">
              "Unleash your innovation. Code the future" - A 24-hour coding marathon
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/images/hack-n-tech-poster.jpg"
                alt="Hack N Tech Hackathon Poster"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Event Highlights</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">23-24 May 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">24 Hours Non-stop</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Central Lecture Hall, IIT Patna</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">150+ Participants</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Innovation & Future Technology</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Event Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Workshops & Tech Talks</li>
                  <li>• Coding Sprints & Challenges</li>
                  <li>• Networking Opportunities</li>
                  <li>• Mentorship from Industry Experts</li>
                  <li>• Innovation Showcase</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Event Collage */}
          <div className="mb-16 relative">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Moments</h3>
            
            {/* Background Pattern */}
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
                <div className="absolute top-20 right-20 w-24 h-24 bg-purple-300 rounded-full blur-lg"></div>
                <div className="absolute bottom-20 left-20 w-28 h-28 bg-pink-300 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-indigo-300 rounded-full blur-lg"></div>
              </div>
              
              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px),
                  radial-gradient(circle at 75% 25%, #ec4899 2px, transparent 2px),
                  radial-gradient(circle at 25% 75%, #6366f1 2px, transparent 2px)
                `,
                backgroundSize: '60px 60px'
              }}></div>

              {/* Watermark Text */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-16 left-20 text-gray-400 text-sm font-extrabold opacity-20 transform rotate-12 select-none">
                  HACK N TECH
                </div>
                <div className="absolute top-32 right-24 text-gray-400 text-sm font-extrabold opacity-15 transform -rotate-12 select-none">
                  HACK N TECH
                </div>
                <div className="absolute bottom-24 left-16 text-gray-400 text-sm font-extrabold opacity-20 transform rotate-6 select-none">
                  HACK N TECH
                </div>
                <div className="absolute bottom-40 right-20 text-gray-400 text-sm font-extrabold opacity-15 transform -rotate-6 select-none">
                  HACK N TECH
                </div>
                <div className="absolute top-1/2 left-20 text-gray-400 text-xs font-extrabold opacity-10 transform rotate-45 select-none">
                  HACK N TECH
                </div>
                <div className="absolute top-1/3 right-16 text-gray-400 text-xs font-extrabold opacity-10 transform -rotate-45 select-none">
                  HACK N TECH
                </div>
                <div className="absolute bottom-1/3 left-15 text-gray-400 text-xs font-extrabold opacity-10 transform rotate-12 select-none">
                  HACK N TECH
                </div>
              </div>
              
              {/* Main image container */}
              <div className="relative z-10 flex justify-center">
                <div className="max-w-3xl w-full">
                  <img
                    src="/images/hackathon-collage.jpg"
                    alt="Hackathon Event Collage"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
              <div className="absolute bottom-8 left-12 w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse delay-200"></div>
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>

          {/* Winners Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hackathon Winners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hackathonWinners.map((winner, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    winner.position === "Winner" ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                          winner.position === "Winner"
                            ? "bg-yellow-100 text-yellow-800"
                            : winner.position === "1st Runner Up"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        <Trophy className="w-4 h-4 mr-1" />
                        {winner.position}
                      </div>
                      <img
                        src={winner.image || "/placeholder.svg"}
                        alt={`${winner.teamName} team`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{winner.teamName}</h4>
                      <p className="text-lg font-semibold text-blue-600 mb-4">{winner.prize}</p>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Project:</h5>
                      <p className="text-gray-700 text-sm mb-4">{winner.project}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Team Members:</h5>
                      <ul className="space-y-1">
                        {winner.members.map((member, memberIndex) => (
                          <li key={memberIndex} className="text-sm text-gray-600">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internship Drive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Internship Drive 2025</h2>
            <p className="text-xl text-gray-600">Connecting talented students with leading industry partners</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/images/internship-drive-poster.jpg"
                alt="Internship Drive Poster"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Drive Details</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">23 May 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Central Lecture Hall, IIT Patna</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">15+ Partner Companies</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-lg">Multiple Domain Opportunities</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Opportunities Available:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Software Development Internships</li>
                  <li>• Data Science & Analytics Roles</li>
                  <li>• UI/UX Design Positions</li>
                  <li>• Product Management Opportunities</li>
                  <li>• Business Development Roles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Companies List */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Company details</h3>
            
            {/* Infinite Horizontal Scroll for Company Logos */}
            <div className="mb-12 overflow-hidden">
              <div className="flex animate-scroll space-x-8">
                {/* First set of logos */}
                {internshipCompanies.map((company, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
                    <Image 
                      src={company.image} 
                      alt={company.name} 
                      width={140} 
                      height={120} 
                      className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for infinite scroll */}
                {internshipCompanies.map((company, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
                    <Image 
                      src={company.image} 
                      alt={company.name} 
                      width={140} 
                      height={120} 
                      className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <CompanyCards company={internshipCompanies} />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Stay tuned for more exciting opportunities and events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Symposium 2025</h3>
                <p className="text-gray-600 mb-4">
                  Annual technology conference featuring industry leaders and innovators
                </p>
                <p className="text-blue-600 font-semibold">Coming Soon</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Startup Pitch Competition</h3>
                <p className="text-gray-600 mb-4">
                  Platform for budding entrepreneurs to showcase their innovative ideas
                </p>
                <p className="text-green-600 font-semibold">Registration Opens Soon</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coding Championship</h3>
                <p className="text-gray-600 mb-4">Inter-college competitive programming contest with exciting prizes</p>
                <p className="text-purple-600 font-semibold">Planning Phase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Participate in Our Events?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and be the first to know about upcoming events and opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Join Student Technical Council
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
