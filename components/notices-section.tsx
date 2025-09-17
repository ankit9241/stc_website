import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Bell } from "lucide-react"
import Link from "next/link"

const notices = [
  {
    id: 1,
    title: "HACK N TECH Hackathon Results Announced",
    date: "2025-03-08",
    excerpt: "Congratulations to all participants! Winners have been announced for the 24-hour coding marathon.",
    category: "Events",
    urgent: false,
  },
  {
    id: 2,
    title: "New Internship Opportunities - Spring 2025",
    date: "2025-03-05",
    excerpt: "15+ companies are offering internship positions. Registration deadline: March 20th.",
    category: "Opportunities",
    urgent: false,
  },
  {
    id: 3,
    title: "TATVA Workshop Series - AI & Machine Learning",
    date: "2025-03-03",
    excerpt: "Join our comprehensive workshop series on AI/ML fundamentals and advanced applications.",
    category: "Workshops",
    urgent: false,
  },
  {
    id: 4,
    title: "DISHA Career Counseling Sessions",
    date: "2025-03-01",
    excerpt: "One-on-one career guidance sessions with industry experts. Book your slot now.",
    category: "Career",
    urgent: false,
  },
]

export function NoticesSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Elections: "bg-red-100 text-red-800",
      Events: "bg-blue-100 text-blue-800",
      Opportunities: "bg-green-100 text-green-800",
      Workshops: "bg-purple-100 text-purple-800",
      Career: "bg-orange-100 text-orange-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="notices-section" className="py-16 w-[100vw] lg:py-20 bg-gray-50">
      <div className="max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 lg:mb-16">
          <h1 className="text-[#453CD5] mb-10 tracking-widest font-semibold ">NEWS AND UPDATES</h1>
          <h2 className="text-6xl font-semibold text-gray-900 mb-4">LATEST NEWS <br/> AND UPDATES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {notices.slice(0, 5).map((notice) => (
            <Card
              key={notice.id}
              className={`group hover:shadow-xl transition-all rounded-sm  duration-300 transform hover:-translate-y-2 ${
              notice.urgent ? "bg-red-50/30" : ""
              }`}
              style={{
              borderWidth: "2px",
              borderStyle: "solid",
              borderColor: notice.urgent
                ? "#fecaca" 
                : getCategoryColor(notice.category).includes("red")
                ? "#fecaca"
                : getCategoryColor(notice.category).includes("blue")
                ? "#bfdbfe"
                : getCategoryColor(notice.category).includes("green")
                ? "#bbf7d0"
                : getCategoryColor(notice.category).includes("purple")
                ? "#ddd6fe"
                : getCategoryColor(notice.category).includes("orange")
                ? "#fed7aa"
                : "#e5e7eb", 
              }}
            >
              <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}
                >
                {notice.category}
                </span>
                {notice.urgent && <Bell className="w-4 h-4 text-red-500 animate-pulse" />}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#453CD5] transition-colors line-clamp-2">
                {notice.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{notice.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(notice.date)}
                </div>
                {notice.category === "Events" && notice.title.includes("Hackathon") ? (
                  <Link href="/events" passHref>
                    <h1 className="flex justify-center items-center text-[#453CD5] font-semibold text-lg group-hover:text-[#453CD5] transition-colors cursor-pointer">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </h1>
                  </Link>
                ) : (
                  <h1 className="flex justify-center items-center text-[#453CD5] font-semibold text-lg group-hover:text-[#453CD5] transition-colors cursor-pointer">
                    Coming Soon
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </h1>
                )}
              </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  )
}
