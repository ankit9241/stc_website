import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, Target, Presentation, TrendingUp, Users, Network, DollarSign, Calendar } from "lucide-react"
import Link from "next/link"

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 via-green-700 to-green-200 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">ARTHNITI</h1>
            <p className="text-lg font-semibold mb-2 opacity-90 flex items-center justify-center gap-2">
              <span className="inline-block bg-white bg-opacity-20 rounded px-3 py-1 text-green-100 tracking-wide">
              arthniti@iitp.ac.in
              </span>
            </p>
            <h2 className="text-2xl font-semibold mb-4 opacity-90">Entrepreneurship & Innovation Cell</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Nurturing future innovators and startup enthusiasts through comprehensive entrepreneurship support
            </p>
          </div>
        </div>
      </section>

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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl border-2 border-green-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Business idea development and validation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Mentorship from successful entrepreneurs</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Funding and investment guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Networking with industry experts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Business competitions and events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub Clubs */}
      <section className="py-20 bg-white">
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
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join ARTHNITI and transform your innovative ideas into successful ventures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Join ARTHNITI
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
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
