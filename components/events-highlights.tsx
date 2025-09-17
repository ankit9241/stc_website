import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function EventsHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
          <p className="text-xl text-gray-600">Celebrating innovation and success through our flagship events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hackathon Highlight */}
          <Card className="overflow-hidden border-2 border-blue-100 hover:shadow-xl rounded-3xl transition-all duration-300">
            <div className="relative">
              <img
                src="/images/hack-n-tech-poster.jpg"
                alt="Hack N Tech Hackathon"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Latest Event
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">HACK N TECH Hackathon 2025</h3>
              <p className="text-gray-600 mb-4">
                A 24-hour coding marathon that brought together 150+ participants to "Unleash innovation and code the
                future"
              </p>
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">23-24 May 2025</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">150+ Participants</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-3xl p-4 mb-4">
                <div className="flex items-center mb-2">
                  <Trophy className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="font-semibold text-gray-900">Winners</span>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <strong>🥇 Winner:</strong> Caffeine Coderz (₹5,000)
                  </p>
                  <p>
                    <strong>🥈 1st Runner Up:</strong> Prachand (₹3,000)
                  </p>
                  <p>
                    <strong>🥉 2nd Runner Up:</strong> Tech_X (₹2,000)
                  </p>
                </div>
              </div>
              <Link href="/events">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Event Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Internship Drive Highlight */}
          <Card className="overflow-hidden rounded-3xl border-2 border-green-200 hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <img
                src="/images/internship-drive-poster.jpg"
                alt="Internship Drive"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Career Opportunity
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Internship Drive 2025</h3>
              <p className="text-gray-600 mb-4">
                Connecting talented students with leading industry partners across multiple domains and technologies
              </p>
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">23 May 2025</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">15+ Companies</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-3xl p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Participating Companies</h4>
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-700">
                  <span>• GUVI</span>
                  <span>• HCL</span>
                  <span>• Superset</span>
                  <span>• Physics Wallah</span>
                  <span>• Humantics</span>
                  <span>• SkillNet</span>
                  <span>• NEXTUTE</span>
                  <span>• Gramin</span>
                  <span>• +7 more</span>
                </div>
              </div>
              <Link href="/events">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View All Companies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/events">
            <Button size="lg" variant="outline" className="border-2 border-blue-500 rounded-2xl text-blue-600 hover:bg-blue-50">
              View All Events & Achievements
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
