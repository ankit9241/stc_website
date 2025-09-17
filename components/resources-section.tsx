"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Users, Calendar, BookOpen, Shield } from "lucide-react"

const resources = [
  {
    title: "Student Technical Council Constitution",
    description: "Official constitution and governance framework",
    icon: BookOpen,
    fileSize: "2.3 MB",
    lastUpdated: "March 2025",
    downloadUrl: "/resources/constitution.pdf",
    category: "Governance",
  },
  {
    title: "Policy Documents",
    description: "Comprehensive policy guidelines and procedures",
    icon: Shield,
    fileSize: "1.8 MB",
    lastUpdated: "February 2025",
    downloadUrl: "/resources/policies.pdf",
    category: "Policies",
  },
  {
    title: "Meeting Minutes",
    description: "Latest meeting minutes and decisions",
    icon: FileText,
    fileSize: "950 KB",
    lastUpdated: "March 2025",
    downloadUrl: "/resources/meeting-minutes.pdf",
    category: "Minutes",
  },
  {
    title: "Membership Guidelines",
    description: "How to join and participate in Student Technical Council",
    icon: Users,
    fileSize: "1.2 MB",
    lastUpdated: "January 2025",
    downloadUrl: "/resources/membership-guide.pdf",
    category: "Guidelines",
  },
  {
    title: "Event Calendar 2025",
    description: "Complete schedule of events and activities",
    icon: Calendar,
    fileSize: "800 KB",
    lastUpdated: "March 2025",
    downloadUrl: "/resources/event-calendar.pdf",
    category: "Calendar",
  },
  {
    title: "Annual Report 2024",
    description: "Comprehensive report of achievements and activities",
    icon: FileText,
    fileSize: "4.1 MB",
    lastUpdated: "December 2024",
    downloadUrl: "/resources/annual-report.pdf",
    category: "Reports",
  },
]

export function ResourcesSection() {
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a")
    link.href = url
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Governance: "bg-blue-100 text-blue-800",
      Policies: "bg-purple-100 text-purple-800",
      Minutes: "bg-green-100 text-green-800",
      Guidelines: "bg-orange-100 text-orange-800",
      Calendar: "bg-red-100 text-red-800",
      Reports: "bg-gray-100 text-gray-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Resources & Documents</h2>
          <p className="text-lg lg:text-xl text-gray-600">Access important documents, policies, and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Card
                key={index}
                className="group rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}
                    >
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{resource.fileSize}</span>
                    <span>Updated: {resource.lastUpdated}</span>
                  </div>

                  <Button
                    onClick={() => handleDownload(resource.downloadUrl, resource.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-3xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Additional Resources?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact our team for additional documents or information.
            </p>
            <Button variant="outline" className="border-blue-500 rounded-2xl text-blue-600 hover:bg-blue-50">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
