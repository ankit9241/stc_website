import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, MessageSquare, Award, Search, Network, GraduationCap, Building } from "lucide-react"
import Link from "next/link"

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-blue-500 to-blue-100 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl font-bold  mb-6">DISHA</h1>
            <p className="text-lg font-semibold mb-2 opacity-90 flex items-center justify-center gap-2">
              <span className="inline-block bg-white bg-opacity-20 rounded px-3 py-1 text-green-100 tracking-wide">
              disha@iitp.ac.in
              </span>
            </p>
        <h2 className="text-2xl font-semibold mb-4 opacity-90">Career Growth & Training Cell</h2>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Empowering students with the skills, exposure, and support needed to excel in their professional journey
        </p>
          </div>
        </div>
      </section>

      {/* About DISHA */}
      <section className="py-20">
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Focus Areas</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Career counseling and guidance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Industry-ready skill development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Internship and placement support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Professional networking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Alumni mentorship programs</span>
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
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join DISHA and take the first step towards your professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Join DISHA
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
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
