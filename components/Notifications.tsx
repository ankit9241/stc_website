"use client"
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Clock, AlertCircle, Loader2 } from "lucide-react"
import Image from 'next/image'

interface Notification {
  _id: string
  title: string
  content: string
  imageUrl?: string
  createdAt: string
  uploadedBy: string
  isImportant: boolean
  expireAt?: string
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/api/admin/notifications')
      if (response.ok) {
        const data = await response.json()
        const activeNotifications = data.filter((notif: Notification) => {
          if (!notif.expireAt) return true
          return new Date(notif.expireAt) > new Date()
        })
        setNotifications(activeNotifications)
      }
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      })
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-12 h-12 animate-spin text-[#1a4b8c]" />
      </div>
    )
  }

  if (notifications.length === 0) {
    return null
  }

  return (
    <section className="py-13 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#0f2a4d] rounded-full">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4d]">
                Notifications & Updates
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Stay informed with our updates
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#0f2a4d] scrollbar-track-gray-200">
            {notifications.map((notification) => (
              <Card
                key={notification._id}
                className={`flex-shrink-0 w-[220px] md:w-[350px] overflow-hidden transition-all duration-300 hover:shadow-2xl snap-start ${
                  notification.isImportant 
                    ? 'border-2 border-red-500 shadow-lg shadow-red-100' 
                    : 'border border-gray-200'
                }`}
              >
                {notification.imageUrl && (
                  <div className="relative w-full h-44 bg-gray-100">
                    <Image
                      src={notification.imageUrl}
                      alt={notification.title}
                      fill
                      className="object-cover"
                    />
                    {notification.isImportant && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="destructive" className="flex items-center gap-1 shadow-lg">
                          <AlertCircle className="w-3 h-3" />
                          Important
                        </Badge>
                      </div>
                    )}
                  </div>
                )}

                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-[#0f2a4d] mb-2 line-clamp-2 min-h-[3.5rem]">
                    {notification.title}
                  </h3>

                  <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
                    {notification.content}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{formatDate(notification.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {notifications.length > 3 && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>←</span>
              <span>Scroll to see more updates</span>
              <span>→</span>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Notifications