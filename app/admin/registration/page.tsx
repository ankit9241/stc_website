"use client"

import { useState } from 'react'
import AdminNav from '@/components/adminNav'
import { Button } from "@/components/ui/button"
import { Plus, Users } from "lucide-react"

export default function AdminRegistrationPage() {
  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#0f2a4d] mb-2">Manage Registrations</h1>
              <p className="text-lg text-[#1a4b8c]">Create registration forms and view responses</p>
            </div>
            <Button className="bg-[#0f2a4d] hover:bg-[#1a4b8c]">
              <Plus className="w-4 h-4 mr-2" />
              Create Registration
            </Button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Plus className="w-6 h-6 text-[#0f2a4d]" />
                <h2 className="text-2xl font-bold text-[#0f2a4d]">Registration Forms</h2>
              </div>
              <p className="text-[#1a4b8c]">Create and manage registration forms...</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-[#0f2a4d]" />
                <h2 className="text-2xl font-bold text-[#0f2a4d]">Responses</h2>
              </div>
              <p className="text-[#1a4b8c]">View and export registration responses...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
