import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, Award, Crown, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const participationLevels = [
  {
    level: "1. Open Entry Points",
    title: "First Touchpoints",
    description: "Where any student can enter the ecosystem and get their first taste of Student Technical Council activities.",
    icon: UserPlus,
    color: "from-blue-400 to-blue-500",
    activities: [
      "Event Participation (workshops, competitions, talks)",
      "Open Calls (design, tech, writing, logistics)",
      "Orientation & Info Sessions",
      "Online Forms / Volunteer Recruitment",
    ],
    focus: "Awareness, accessibility & first interaction",
  },
  {
    level: "2. Volunteer / Contributor Phase",
    title: "Building Foundation",
    description: "Students begin contributing in small but meaningful ways to build comfort and familiarity.",
    icon: Users,
    color: "from-green-400 to-green-500",
    activities: [
      "Event-day support (logistics, registrations, coordination)",
      "Content creation / designing / social media",
      "Photography / documentation / editing",
      "Technical support (website, apps, analytics)",
    ],
    focus: "Building comfort, ownership, and familiarity with structure",
  },
  {
    level: "3. Executive / Core Member Phase",
    title: "Taking Responsibility",
    description: "Students take responsibility for planning and execution of various initiatives.",
    icon: Award,
    color: "from-purple-400 to-purple-500",
    activities: [
      "Lead small teams or sub-tasks under events",
      "Handle backend logistics and coordination",
      "Represent club in meetings and planning sessions",
      "Ideate and initiate smaller independent projects",
    ],
    focus: "Execution, accountability, and skill-building",
  },
  {
    level: "4. Coordinator / Lead Phase",
    title: "Leadership Development",
    description: "Students are now capable of managing club or cell functions and leading teams.",
    icon: Crown,
    color: "from-orange-400 to-orange-500",
    activities: [
      "Take leadership roles (Club Lead, Operational Coordinator)",
      "Oversee event pipeline, team management, task delegation",
      "Represent the club externally (inter-college, sponsors)",
      "Mentor juniors and document workflows",
    ],
    focus: "Leadership, communication, long-term thinking",
  },
  {
    level: "5. Advisory / Council Phase",
    title: "Strategic Guidance",
    description: "Senior leaders provide strategic guidance and ensure continuity of the organization.",
    icon: Star,
    color: "from-red-400 to-red-500",
    activities: [
      "Act as advisors or Cell Council members",
      "Review and approve plans, maintain quality standards",
      "Ensure alignment with long-term vision",
      "Train upcoming leads and manage transitions",
    ],
    focus: "Vision alignment, legacy, governance",
  },
]

const coreValues = [
  {
    title: "Student-Centric Mindset",
    description: "All actions driven with intention to create value for the student community",
  },
  {
    title: "Collaboration Over Competition",
    description: "Encouraging inter-club coordination and shared goals over isolated functioning",
  },
  {
    title: "Ownership and Accountability",
    description: "Every member takes full responsibility for their tasks and learns from experiences",
  },
  {
    title: "Consistency and Commitment",
    description: "Dedication, discipline, and regular involvement as foundation of our culture",
  },
  {
    title: "Respect and Inclusivity",
    description: "Promoting diverse, open environment where every voice is heard and appreciated",
  },
  {
    title: "Quality Over Quantity",
    description: "Focus on delivering high-quality outcomes that reflect professionalism",
  },
]

export default function ParticipationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Student Participation Model</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              A structured pathway for student engagement, growth, and leadership development within the Student Technical Council
              ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Participation Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Growth Pathway</h2>
            <p className="text-xl text-gray-600">
              From participant to leader - a clear progression path for every student
            </p>
          </div>

          <div className="space-y-8">
            {participationLevels.map((level, index) => {
              const IconComponent = level.icon
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Level Info */}
                      <div className={`bg-gradient-to-r ${level.color} text-white p-8 flex flex-col justify-center`}>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{level.level}</h3>
                            <p className="text-sm opacity-90">{level.title}</p>
                          </div>
                        </div>
                        <p className="text-sm opacity-90 mb-4">{level.description}</p>
                        <div className="bg-white bg-opacity-20 rounded-lg p-3">
                          <p className="text-sm font-semibold">Focus: {level.focus}</p>
                        </div>
                      </div>

                      {/* Activities */}
                      <div className="lg:col-span-2 p-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Activities & Responsibilities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {level.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Growth Flow */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Growth Flow</h3>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex flex-wrap justify-center items-center gap-4 text-lg font-semibold text-gray-700">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Participant</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">Volunteer</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">Executive</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg">Coordinator</span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg">Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values & Work Ethics</h2>
            <p className="text-xl text-gray-600">The principles that guide our community and culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <p className="text-xl text-gray-600">Fundamental principles that drive our participation model</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusivity First</h3>
              <p className="text-gray-600">Everyone should feel welcome and have access to contribute</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Skill-Based Growth</h3>
              <p className="text-gray-600">Roles and promotions based on contribution & learning, not popularity</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Transparent Pathways</h3>
              <p className="text-gray-600">Students should know how to move from one level to the next</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mentorship-Driven</h3>
              <p className="text-gray-600">Each level helps the one below it, ensuring sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the Student Technical Council and be part of a community that values growth, collaboration, and impact
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wings">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Explore Wings
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
