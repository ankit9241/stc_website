import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | STC IITP",
  description: "Learn about STC IITP - Student Technical Council IIT Patna Hybrid. Discover our vision, mission, and three specialized wings: DISHA, ARTHNITI, and TATVA for diverse academic and professional growth.",
  keywords: [
    "about STC IITP",
    "Student Technical Council IIT Patna",
    "STC hybrid about",
    "vision mission STC IITP",
    "DISHA ARTHNITI TATVA wings",
    "student organization IIT Patna",
    "technical excellence IITP",
    "innovation leadership",
    "STC IITP history",
    "student council about",
    "IIT Patna student body",
    "technical community IITP"
  ],
  openGraph: {
    title: "About Us | STC IITP",
    description: "Learn about Student Technical Council IIT Patna Hybrid - our vision, mission, and specialized wings DISHA, ARTHNITI, and TATVA empowering students.",
    images: ['/images/stc.jpg'],
    url: '/about',
  },
  twitter: {
    title: "About Us | STC IITP",
    description: "Learn about Student Technical Council IIT Patna Hybrid - our vision, mission, and specialized wings DISHA, ARTHNITI, and TATVA empowering students.",
    card: 'summary_large_image',
    images: ['/images/stc.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 pt-16 overflow-x-hidden">
      <div className="w-full max-w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-medium tracking-wider text-white mb-4 px-4 py-1.5 bg-white/10 rounded-full border border-white/30">
              ABOUT US
            </span>
            <p className="mt-5 text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-white/90 break-words leading-relaxed">
              A reimagined and upgraded platform that caters to diverse academic and professional aspirations of
              students through three specialized wings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Description */}
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 break-words leading-tight">What is Student Technical Council?</h2>
            <div className="prose prose-base md:prose-lg max-w-none text-gray-700">
              <p className="mb-4 md:mb-6 break-words text-base md:text-lg lg:text-xl leading-relaxed">
                Student Technical Council is a reimagined and upgraded version of the former Technology Club, established with the
                vision of creating a centralized, well-structured platform that caters to the diverse academic and
                professional aspirations of students. Recognizing the need for more specialized focus areas, the Student
                Senate was formed to streamline operations and maximize impact by dividing its responsibilities into
                three dedicated verticals.
              </p>
              <p className="mb-4 md:mb-6 break-words text-base md:text-lg lg:text-xl leading-relaxed">
                The Student Technical Council functions as the central decision-making and coordination body, ensuring synergy
                between these wings. It promotes cross-domain collaboration, efficient resource utilization, and a
                unified approach towards student empowerment.
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 mb-10 md:mb-14 lg:mb-16">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-3 md:mb-4">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-2 md:mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words leading-tight">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl break-words">
                  To empower IIT Patna students with the skills, knowledge, and opportunities needed to excel in their
                  chosen careers while fostering strong industry partnerships that benefit both students and
                  organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-3 md:mb-4">
                  <Eye className="w-7 h-7 md:w-8 md:h-8 text-blue-600 mr-2 md:mr-3" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 break-words leading-tight">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl break-words">
                To be recognized as a leading student body that consistently fosters technically proficient, innovation-driven individuals who contribute meaningfully to technological advancement and societal progress.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div className="mb-10 md:mb-14 lg:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center break-words leading-tight">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 break-words leading-tight">Excellence in Training</h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl break-words leading-relaxed">
                  Comprehensive training programs covering technical skills, soft skills, and industry-specific
                  knowledge.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 break-words leading-tight">Industry Connections</h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl break-words leading-relaxed">
                  Strong relationships with 150+ leading companies across various sectors and industries.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Target className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 break-words leading-tight">Personalized Support</h3>
                <p className="text-gray-600 text-base md:text-lg lg:text-xl break-words leading-relaxed">
                  Individual mentoring and career guidance tailored to each student's aspirations and strengths.
                </p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-white">
            <CardContent className="p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <img
                    src="/gautam.png"
                    alt="TPC Head"
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-blue-200 mx-auto lg:mx-0"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 break-words leading-tight">Message from the President</h3>
                  <blockquote className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-3 md:mb-4 break-words">
                    "At IIT Patna's Student Technical Council (STC), Hybrid Programmes represent our commitment to bridging the gap between theoretical knowledge and practical application. These flagship initiatives are crafted to foster innovation, interdisciplinary collaboration, and industry readiness among students.
                    <br />
                    <br />
                    Through Hybrid Programmes, STC creates dynamic platforms where students interact with domain experts, participate in hands-on sessions, and tackle real-world challenges. By combining online flexibility with offline engagement, we aim to build a future-ready student community that is technically strong, creatively driven, and empowered to lead in an ever-evolving tech ecosystem."
                  </blockquote>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 break-words text-base md:text-lg">Mr. Gautam Kashyap</p>
                    <p className="text-blue-600 break-words text-base md:text-lg">President, STC Hybrid Programmes</p>
                    <p className="text-gray-600 break-words text-base md:text-lg">IIT Patna</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    </div>
  )
}
