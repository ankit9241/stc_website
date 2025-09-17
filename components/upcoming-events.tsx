import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Symposium 2025",
    date: "2025-04-15",
    time: "09:00 AM",
    location: "Central Auditorium",
    description: "Annual technology conference featuring industry leaders and innovators",
    attendees: "500+",
    category: "Conference",
    registrationOpen: true,
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    date: "2025-04-22",
    time: "02:00 PM",
    location: "Innovation Hub",
    description: "Platform for budding entrepreneurs to showcase their innovative ideas",
    attendees: "100+",
    category: "Competition",
    registrationOpen: true,
  },
  {
    id: 3,
    title: "AI/ML Workshop Series",
    date: "2025-04-28",
    time: "10:00 AM",
    location: "Computer Lab",
    description: "Hands-on workshop on artificial intelligence and machine learning",
    attendees: "50",
    category: "Workshop",
    registrationOpen: false,
  },
  {
    id: 4,
    title: "Career Fair 2025",
    date: "2025-05-05",
    time: "09:00 AM",
    location: "Main Campus",
    description: "Meet with top recruiters and explore career opportunities",
    attendees: "1000+",
    category: "Career",
    registrationOpen: true,
  },
]

export function UpcomingEvents() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Conference: "bg-blue-100 text-blue-800",
      Competition: "bg-red-100 text-red-800",
      Workshop: "bg-green-100 text-green-800",
      Career: "bg-purple-100 text-purple-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const isEventSoon = (dateString: string) => {
    const eventDate = new Date(dateString)
    const today = new Date()
    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 7 && diffDays > 0
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg lg:text-xl text-gray-600">Don't miss out on these exciting opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {upcomingEvents.map((event) => {
            const categoryColor = getCategoryColor(event.category)
            // Extract bg and text color for border with reduced opacity
            const borderColor = categoryColor.includes("blue")
              ? "border-blue-300/50"
              : categoryColor.includes("red")
              ? "border-red-300/50"
              : categoryColor.includes("green")
              ? "border-green-300/50"
              : categoryColor.includes("purple")
              ? "border-purple-300/50"
              : "border-gray-300/50"
            return (
              <Card
          key={event.id}
          className={`group rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${borderColor} ${
            isEventSoon(event.date) ? "ring-2 ring-orange-200 bg-orange-50/30" : ""
          }`}
              >
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColor} border ${borderColor}`}
              >
                {event.category}
              </span>
              {isEventSoon(event.date) && (
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
            Coming Soon
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {event.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">{event.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2 text-blue-500" />
                {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                {event.location}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                {event.attendees} expected
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span
                className={`text-sm font-medium ${event.registrationOpen ? "text-green-600" : "text-gray-500"}`}
              >
                {event.registrationOpen ? "Registration Open" : "Registration Closed"}
              </span>
              <Link
                href={`/events/${event.id}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/events">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View All Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
