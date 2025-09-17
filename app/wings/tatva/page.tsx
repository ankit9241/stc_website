import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Globe, Palette, Smartphone, BarChart, Brain, Shield, Trophy } from "lucide-react"
import Link from "next/link"

const subClubs = [
  {
    name: "WebWizer",
    subtitle: "Web Development Club",
    description: "Hands-on workshops and projects on modern web technologies, frameworks, and full-stack development.",
    icon: Globe,
    activities: ["React/Next.js workshops", "Backend development", "Full-stack projects", "Web design principles"],
  },
  {
    name: "Mech-X",
    subtitle: "Robotics Club",
    description: "Building and programming robots through competitions and practical learning experiences.",
    icon: Code,
    activities: ["Robot building", "Arduino/Raspberry Pi", "Automation projects", "Robotics competitions"],
  },
  {
    name: "Pixelerate",
    subtitle: "Design Club",
    description: "Training and projects in UI/UX design, graphic design, and visual communication skills.",
    icon: Palette,
    activities: ["UI/UX design", "Graphic design", "Design thinking", "Prototyping tools"],
  },
  {
    name: "Appistry",
    subtitle: "App Development Club",
    description: "Developing mobile applications with coding challenges and comprehensive development workshops.",
    icon: Smartphone,
    activities: [
      "Mobile app development",
      "Cross-platform solutions",
      "App store deployment",
      "User experience design",
    ],
  },
  {
    name: "Analytical Arena",
    subtitle: "Data Analytics & Science Club",
    description: "Teaching data analysis, visualization, and interpretation using modern tools and techniques.",
    icon: BarChart,
    activities: ["Data analysis", "Machine learning", "Data visualization", "Statistical modeling"],
  },
  {
    name: "Synapse",
    subtitle: "AI, ML & Deep Learning Club",
    description: "Exploring artificial intelligence and machine learning through hands-on projects and research.",
    icon: Brain,
    activities: ["AI/ML projects", "Deep learning", "Neural networks", "Research initiatives"],
  },
  {
    name: "HackShield",
    subtitle: "Cybersecurity Club",
    description: "Promoting ethical hacking, cybersecurity awareness, and information security skills.",
    icon: Shield,
    activities: ["Ethical hacking", "Security audits", "CTF competitions", "Cybersecurity awareness"],
  },
  {
    name: "CodeRED",
    subtitle: "Competitive Programming Club",
    description: "Enhancing algorithmic problem-solving skills through contests, practice sessions, and competitions.",
    icon: Trophy,
    activities: ["Coding contests", "Algorithm training", "Problem solving", "Programming competitions"],
  },
]

export default function TatvaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-200 via-purple-600 to-purple-200 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">TATVA</h1>
            <p className="text-lg font-semibold mb-2 opacity-90 flex items-center justify-center gap-2">
              <span className="inline-block bg-white bg-opacity-20 rounded px-3 py-1 text-green-100 tracking-wide">
              tatva@iitp.ac.in
              </span>
            </p>
            <h2 className="text-2xl font-semibold mb-4 opacity-90">Technology & Research Cell</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Nurturing technical expertise and promoting research-oriented mindset through innovation and collaboration
            </p>
          </div>
        </div>
      </section>

      {/* About TATVA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About TATVA</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                TATVA is the dedicated wing of the Student Technical Council that aims to nurture technical expertise and promote a
                research-oriented mindset among students. It serves as a vibrant platform for students to explore
                emerging technologies, engage in innovative projects, and develop problem-solving skills.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through workshops, seminars, hackathons, and collaborative research initiatives, TATVA bridges the gap
                between academic learning and real-world technology applications. It connects students with industry
                experts, researchers, and tech communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This helps cultivate creativity, critical thinking, and a passion for continuous learning, empowering
                students to become future-ready technologists and innovators in fields like AI, ML, Web3, cybersecurity,
                and more.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Domains</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Web and Mobile Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Artificial Intelligence & Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Data Science & Analytics</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Cybersecurity & Ethical Hacking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Robotics & Automation</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TATVA Sub-Clubs</h2>
            <p className="text-xl text-gray-600">Specialized technology clubs covering cutting-edge domains</p>
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
                      <div className="w-12 h-12 bg-purple-100 rounded-3xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                        <p className="text-sm text-purple-600 font-medium">{club.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{club.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Activities:</h4>
                      <ul className="space-y-1">
                        {club.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive into Technology?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join TATVA and explore the cutting-edge world of technology and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/participation">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Join TATVA
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg"
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
