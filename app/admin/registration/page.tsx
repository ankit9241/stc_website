"use client"

import AdminNav from '@/components/adminNav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Users } from "lucide-react"
import RegistrationBuilder from '@/components/admin/RegistrationBuilder'
import RegistrationSubmissionsViewer from '@/components/admin/SubmissionsViewer'

export default function AdminRegistrationPage() {
  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0f2a4d] mb-2">Manage Registration Forms</h1>
            <p className="text-lg text-[#1a4b8c]">Create and manage all registration forms and submissions</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <Tabs defaultValue="builder" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="builder">
                  <FileText className="w-4 h-4 mr-2" />
                  Form Builder
                </TabsTrigger>
                <TabsTrigger value="submissions">
                  <Users className="w-4 h-4 mr-2" />
                  Submissions
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="builder">
                <RegistrationBuilder />
              </TabsContent>
              
              <TabsContent value="submissions">
                <RegistrationSubmissionsViewer />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
