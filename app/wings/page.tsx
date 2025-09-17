import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Code, ArrowRight } from "lucide-react"
import Link from "next/link"

const wings = [
  {
    name: "DISHA",
    subtitle: "Career Growth & Training Cell",
    description:
      "Empowering students with skills, exposure, and support needed to excel in their professional journey. Serves as a bridge between students and industry through internships, training programs, and placement assistance.",
    icon: Users,
    color: "from-blue-500 to-blue-600",
    features: [
      "Resume & Portfolio Building",
      "Mock Interviews & GD",
      "Skill Development & Certification",
      "Internship Search & Referral",
      "Career Guidance & Counselling",
      "Alumni Networking & Mentorship",
    ],
    link: "/wings/disha",
  },
  {
    name: "ARTHNITI",
    subtitle: "Entrepreneurship & Innovation Cell",
    description:
      "Dedicated to promoting entrepreneurship and business skills among students. Provides platforms for idea development, mentorship, and networking to transform innovative ideas into successful ventures.",
    icon: Lightbulb,
    color: "from-green-500 to-green-600",
    features: [
      "Startup Ideation & Validation",
      "Business Model & Strategy",
      "Pitch & Presentation Training",
      "Incubation & Mentorship",
      "Funding & Grants Guidance",
      "Entrepreneurship Events",
    ],
    link: "/wings/arthniti",
  },
  {
    name: "TATVA",
    subtitle: "Technology & Research Cell",
    description:
      "Nurtures technical expertise and promotes research-oriented mindset. Bridges academic learning and real-world technology applications through workshops, hackathons, and collaborative research.",
    icon: Code,
    color: "from-purple-500 to-purple-600",
    features: [
      "Web Development (WebWizer)",
      "Robotics (Mech-X)",
      "Design (Pixelerate)",
      "App Development (Appistry)",
      "Data Analytics (Analytical Arena)",
      "AI & ML (Synapse)",
    ],
    link: "/wings/tatva",
  },
]

export default function WingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Student Technical Council Wings</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Three specialized verticals designed to cater to diverse academic and professional aspirations of students
            </p>
          </div>
        </div>
      </section>

      {/* Wings Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Three Wings</h2>
            <p className="text-xl text-gray-600">
              Specialized focus areas for maximum impact and streamlined operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {wings.map((wing, index) => {
              const IconComponent = wing.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${wing.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{wing.name}</h3>
                      <p className="text-blue-600 font-semibold">{wing.subtitle}</p>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{wing.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Focus Areas:</h4>
                      <ul className="space-y-2">
                        {wing.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={wing.link} className="mt-auto">
                      <Button
                        className={`w-full bg-gradient-to-r ${wing.color} hover:shadow-lg text-white transform hover:scale-105 transition-all duration-200`}
                      >
                        Explore {wing.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Three Wings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Three Specialized Wings?</h2>
            <p className="text-xl text-gray-600">
              Strategic division for focused excellence and maximum student impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Focus</h3>
              <p className="text-gray-600">
                Each wing concentrates on specific domains, ensuring deeper expertise and better outcomes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Streamlined Operations</h3>
              <p className="text-gray-600">
                Clear division of responsibilities leads to more efficient resource utilization and coordination
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-Domain Collaboration</h3>
              <p className="text-gray-600">
                Wings work together to create comprehensive solutions and holistic student development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
