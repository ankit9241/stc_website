"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, MessageSquare, Award, Search, Network, GraduationCap, Building, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react";

const subClubs = [
  {
    name: "Resume & Portfolio Building Club",
    description:
      "Helping students craft impactful resumes, optimize LinkedIn profiles, and build professional portfolios.",
    icon: FileText,
    activities: ["Resume writing workshops", "LinkedIn optimization", "Portfolio development", "Professional branding"],
  },
  {
    name: "Mock Interview & Group Discussion Club",
    description:
      "Conducting regular mock interviews, group discussions, and peer feedback sessions to boost confidence.",
    icon: MessageSquare,
    activities: ["Mock interviews", "Group discussions", "Peer feedback", "Interview techniques"],
  },
  {
    name: "Skill Development & Certification Club",
    description:
      "Organizing workshops, training sessions, and facilitating access to industry-recognized certifications.",
    icon: Award,
    activities: ["Technical workshops", "Certification guidance", "Skill assessments", "Industry training"],
  },
  {
    name: "Internship Search & Referral Club",
    description:
      "Assisting students in finding relevant internships, guiding cold-emailing techniques, and building referral networks.",
    icon: Search,
    activities: ["Internship opportunities", "Cold email guidance", "Referral networks", "Application support"],
  },
  {
    name: "Career Guidance & Counselling Club",
    description: "Offering personalized mentorship, career path planning, and expert sessions on higher studies.",
    icon: GraduationCap,
    activities: ["Career counseling", "Path planning", "Higher studies guidance", "Competitive exam prep"],
  },
  {
    name: "Soft Skills & Communication Club",
    description:
      "Focusing on improving communication, public speaking, professional etiquette, and workplace readiness.",
    icon: Users,
    activities: ["Communication skills", "Public speaking", "Professional etiquette", "Workplace readiness"],
  },
  {
    name: "Alumni Networking & Mentorship Club",
    description: "Connecting current students with alumni for guidance, industry insights, and opportunities.",
    icon: Network,
    activities: ["Alumni connections", "Mentorship programs", "Industry insights", "Networking events"],
  },
  {
    name: "Industry Collaboration & Placement Support Club",
    description:
      "Building partnerships with companies, organizing recruitment drives, and providing placement assistance.",
    icon: Building,
    activities: ["Company partnerships", "Recruitment drives", "Placement support", "Industry collaboration"],
  },
]

export default function DishaPage() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-red-50 pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, #EF4444 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px',
        }} />
      
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 mb-6">
                <Users className="w-4 h-4 mr-2" />
                <span className="tracking-wider">CAREER GROWTH & TRAINING CELL</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start mb-6">
                {/* Logo for mobile and medium screens */}
                <div className="lg:hidden flex-shrink-0">
                  <Image
                    src="/images/disha-logo.png"
                    alt="DISHA Logo"
                    width={120}
                    height={120}
                    className="w-24 h-24 md:w-32 md:h-32 object-contain mr-4"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="text-red-600">DISHA</span> - Guiding Your Professional Journey
                </h1>
              </div>
              
              <div className="mt-4">
                <a href="mailto:disha@iitp.ac.in" className="inline-flex items-center text-sm bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1.5 rounded-full border border-red-100 transition-colors">
                  <Mail className="w-3.5 h-3.5 mr-1.5" />
                  disha@iitp.ac.in
                </a>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide comprehensive career development programs, skill-building workshops, and industry connections
                to help you navigate your professional path with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('sub-clubs')}
                  className="bg-red-600 hover:bg-red-700 text-white transition-colors"
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
            
            {/* DISHA Logo Image - Hidden on mobile, visible on lg screens and up */}
            <div className="hidden lg:block relative w-full max-w-md">
              <div className="w-full bg-transparent flex items-center justify-center p-2">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src="/images/disha-logo.png"
                    alt="DISHA Logo"
                    width={800}
                    height={800}
                    priority
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233b82f6'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      {/* About DISHA */}
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About DISHA</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                DISHA is the dedicated wing of the Student Technical Council that focuses on empowering students with the skills,
                exposure, and support needed to excel in their professional journey. It serves as a bridge between
                students and the industry, offering curated opportunities in the form of internships, training programs,
                certification workshops, and placement assistance.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through career counseling sessions, resume and LinkedIn optimization drives, mock interviews, and
                collaborations with companies and startups, DISHA ensures that students are not just academically
                strong, but also industry-ready.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's guiding a fresher towards their first internship or assisting a final-year student with job
                placements, DISHA stands as a pillar of career support, development, and direction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Career counseling and guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Industry-ready skill development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Internship and placement support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Professional networking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Alumni mentorship programs</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DISHA Sub-Clubs</h2>
            <p className="text-xl text-gray-600">
              Specialized clubs focusing on different aspects of career development
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
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join DISHA and take the first step towards your professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg hover:text-red-700">
                Join DISHA
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
