"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Bell, UserPlus, Trophy, FileText } from "lucide-react"
import AdminNav from '@/components/adminNav'

interface Stats {
  events: number
  notifications: number
  registrations: number
  registrationResponses: number
  competitionResults: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    events: 0,
    notifications: 0,
    registrations: 0,
    registrationResponses: 0,
    competitionResults: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statsCards = [
    {
      title: "Events",
      value: stats.events,
      icon: <Calendar className="w-6 h-6" />,
      description: "Total events posted",
      color: "from-blue-500 to-blue-600",
      href: "/admin/events"
    },
    {
      title: "Notifications",
      value: stats.notifications,
      icon: <Bell className="w-6 h-6" />,
      description: "Notifications",
      color: "from-purple-500 to-purple-600",
      href: "/admin/notifications"
    },
    {
      title: "Registrations",
      value: stats.registrations,
      icon: <FileText className="w-6 h-6" />,
      description: "Open registrations",
      color: "from-green-500 to-green-600",
      href: "/admin/registration"
    },
    {
      title: "Registration Responses",
      value: stats.registrationResponses,
      icon: <UserPlus className="w-6 h-6" />,
      description: "Total responses received",
      color: "from-orange-500 to-orange-600",
      href: "/admin/registration"
    },
    {
      title: "Competition Results",
      value: stats.competitionResults,
      icon: <Trophy className="w-6 h-6" />,
      description: "Published results",
      color: "from-yellow-500 to-yellow-600",
      href: "/admin/competitions"
    }
  ]

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0f2a4d] mb-2">Admin Dashboard</h1>
            <p className="text-lg text-[#1a4b8c]">Manage your STC content and view statistics</p>
          </div>

          {/* Stats Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(5)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="h-6 w-32 bg-gray-200 rounded"></div>
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-10 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statsCards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="group transform transition-all duration-300 hover:-translate-y-2"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-[#0f2a4d]">
                        {card.title}
                      </CardTitle>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color} text-white`}>
                        {card.icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-[#0f2a4d] mb-1">
                        {card.value}
                      </div>
                      <p className="text-sm text-[#1a4b8c]">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}