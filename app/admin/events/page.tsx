"use client"

import { useState } from 'react'
import AdminNav from '@/components/adminNav'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AdminEventsPage() {
  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#0f2a4d] mb-2">Manage Events</h1>
              <p className="text-lg text-[#1a4b8c]">Create, edit, and manage all events</p>
            </div>
            <Button className="bg-[#0f2a4d] hover:bg-[#1a4b8c]">
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-[#1a4b8c]">Events management interface coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}
