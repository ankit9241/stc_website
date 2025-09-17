"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ArrowRight, Target, Presentation, TrendingUp, Users, Network, DollarSign, Calendar, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react";

const subClubs = [
  {
    name: "Startup Ideation & Validation Club",
    description: "Helping students brainstorm, validate, and refine business ideas through workshops and mentorship.",
    icon: Lightbulb,
    activities: ["Idea brainstorming sessions", "Market validation", "Business idea refinement", "Mentorship programs"],
  },
  {
    name: "Business Model & Strategy Club",
    description:
      "Teaching students how to design sustainable business models, develop strategies, and understand market dynamics.",
    icon: Target,
    activities: ["Business model canvas", "Strategy development", "Market analysis", "Competitive research"],
  },
  {
    name: "Pitch & Presentation Club",
    description:
      "Organizing pitch practice sessions, investor readiness workshops, and communication skill development.",
    icon: Presentation,
    activities: ["Pitch practice", "Investor presentations", "Communication skills", "Demo day preparation"],
  },
  {
    name: "Entrepreneurship Skill Development Club",
    description: "Conducting sessions on finance basics, marketing, legal aspects, and operations for startups.",
    icon: TrendingUp,
    activities: ["Finance fundamentals", "Marketing strategies", "Legal compliance", "Operations management"],
  },
  {
    name: "Incubation & Mentorship Club",
    description: "Connecting budding entrepreneurs with mentors, incubators, and startup ecosystems.",
    icon: Users,
    activities: ["Mentor matching", "Incubator connections", "Ecosystem building", "Guidance programs"],
  },
  {
    name: "Networking & Collaboration Club",
    description: "Facilitating partnerships, collaboration with industry experts, and entrepreneur meetups.",
    icon: Network,
    activities: ["Industry networking", "Partnership facilitation", "Expert sessions", "Entrepreneur meetups"],
  },
  {
    name: "Funding & Grants Club",
    description: "Guiding students on startup funding sources, grant applications, and crowdfunding strategies.",
    icon: DollarSign,
    activities: ["Funding guidance", "Grant applications", "Crowdfunding strategies", "Investor connections"],
  },
  {
    name: "Events & Competitions Club",
    description: "Managing business plan competitions, hackathons, and entrepreneurship summits.",
    icon: Calendar,
    activities: ["Business competitions", "Startup hackathons", "Entrepreneurship summits", "Demo days"],
  },
]

export default function ArthnitiPage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, #F59E0B 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px',
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200 mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                <span className="tracking-wider">ENTREPRENEURSHIP & INNOVATION CELL</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-6">
                {/* Logo for mobile and medium screens */}
                <div className="lg:hidden flex-shrink-0">
                  <Image
                    src="/images/arthniti-logo.png"
                    alt="ARTHNITI Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain mr-4"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="text-amber-600">ARTHNITI</span> - Igniting Entrepreneurial Spirit
                </h1>
              </div>
              
              <div className="mt-4">
                <a href="mailto:arthniti@iitp.ac.in" className="inline-flex items-center text-sm bg-amber-50 hover:bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full border border-amber-100 transition-colors">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  arthniti@iitp.ac.in
                </a>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive entrepreneurship development programs, startup incubation, and 
                innovation support to help you turn your ideas into successful ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('sub-clubs')}
                  className="bg-amber-600 hover:bg-amber-700 text-white transition-colors"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')}
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            {/* ARTHNITI Logo Image - Hidden on mobile, visible on lg screens and up */}
            <div className="hidden md:block lg:hidden relative w-full max-w-md">
              <div className="w-full bg-transparent flex items-center justify-center p-2">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src="/images/arthniti-logo.png"
                    alt="ARTHNITI Logo"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M12 2L4 9v12h16V9l-8-7zM12 4.5l6 5.25v9.75H6V9.75l6-5.25z'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative w-full max-w-md">
              <div className="w-full bg-transparent flex items-center justify-center p-2">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src="/images/arthniti-logo.png"
                    alt="ARTHNITI Logo"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M12 2L4 9v12h16V9l-8-7zM12 4.5l6 5.25v9.75H6V9.75l6-5.25z'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/* About ARTHNITI */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About ARTHNITI</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ARTHNITI is the Student Technical Council's wing dedicated to promoting entrepreneurship and business skills among
                students. It provides platforms for idea development, mentorship, workshops, and networking to help
                students transform their innovative ideas into successful ventures.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                By connecting students with industry experts and resources, ARTHNITI nurtures leadership and drives
                startup culture on campus. It encourages students to think creatively, take calculated risks, and
                develop the practical skills needed to launch and sustain their own businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From organizing business case competitions and pitch fests to conducting workshops on business models
                and sessions with successful entrepreneurs, ARTHNITI aims to foster a culture of innovation and
                self-sustenance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl border-2 border-amber-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Business idea development and validation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Mentorship from successful entrepreneurs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Funding and investment guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Networking with industry experts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Business competitions and events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Clubs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ARTHNITI Sub-Clubs</h2>
            <p className="text-xl text-gray-600">
              Specialized clubs covering all aspects of entrepreneurship and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subClubs.map((club, index) => {
              const IconComponent = club.icon
              return (
                <Card
                  key={index}
                  className="group rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-amber-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join ARTHNITI and transform your innovative ideas into successful ventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg hover:text-amber-700">
                Join ARTHNITI
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
