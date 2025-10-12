"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Loader2, Calendar, Users, Mail, Phone, BookOpen, Hash, CheckCircle2, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

interface RegistrationForm {
  _id: string
  title: string
  content: string
  image?: string
  eventAt: string
  uploadedBy: string
  createdAt: string
}

export default function TestRegistrationPage() {
  const [registrations, setRegistrations] = useState<RegistrationForm[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedForm, setSelectedForm] = useState<RegistrationForm | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [sendingOTP, setSendingOTP] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    collegeMail: '',
    phone: '',
    course: '',
    semester: '',
    otp: '',
  })

  useEffect(() => {
    fetchRegistrations()
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/admin/registration')
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data)
      }
    } catch (error) {
      console.error('Error fetching registrations:', error)
      toast({
        title: "Error",
        description: "Failed to fetch registration forms",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSendOTP = async () => {
    if (!formData.collegeMail) {
      toast({
        title: "Error",
        description: "Please enter your college email first",
        variant: "destructive"
      })
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.collegeMail)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      })
      return
    }

    setSendingOTP(true)
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.collegeMail,
          event: selectedForm?.title || 'Event Registration',
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setOtpSent(true)
        setCountdown(300)
        toast({
          title: "Success",
          description: "OTP sent to your email. Please check your inbox.",
        })
      } else {
        throw new Error(data.error || 'Failed to send OTP')
      }
    } catch (error: any) {
      console.error('Error sending OTP:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to send OTP. Please try again.",
        variant: "destructive"
      })
    } finally {
      setSendingOTP(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!otpSent) {
      toast({
        title: "Error",
        description: "Please verify your email with OTP first",
        variant: "destructive"
      })
      return
    }

    if (!formData.otp) {
      toast({
        title: "Error",
        description: "Please enter the OTP",
        variant: "destructive"
      })
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/admin/registration/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          forEvent: selectedForm?._id,
          name: formData.name,
          collegeMail: formData.collegeMail,
          phone: formData.phone,
          course: formData.course,
          semester: parseInt(formData.semester),
          otp: formData.otp,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Success! 🎉",
          description: "Your registration has been submitted successfully!",
        })
        setDialogOpen(false)
        resetForm()
      } else {
        throw new Error(data.error || 'Failed to submit registration')
      }
    } catch (error: any) {
      console.error('Error submitting registration:', error)
      toast({
        title: "Error",
        description: error.message || "Failed to submit registration. Please try again.",
        variant: "destructive"
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleFormClick = (form: RegistrationForm) => {
    setSelectedForm(form)
    setDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      collegeMail: '',
      phone: '',
      course: '',
      semester: '',
      otp: '',
    })
    setOtpSent(false)
    setCountdown(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0f2a4d] mb-4">
            Registration Forms
          </h1>
          <p className="text-xl text-[#1a4b8c]">
            Select a form to register for an event
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-[#1a4b8c]" />
          </div>
        ) : registrations.length === 0 ? (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-20 text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-xl text-gray-500">No registration forms available</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrations.map((form) => (
              <Card
                key={form._id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => handleFormClick(form)}
              >
                {form.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={form.image}
                      alt={form.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <h3 className="text-2xl font-bold text-[#0f2a4d]">{form.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{form.content}</p>
                  <div className="flex items-center text-sm text-[#1a4b8c] mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(form.eventAt).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    By: {form.uploadedBy}
                  </div>
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-[#0f2a4d] to-[#1a4b8c] text-white">
                  <Button 
                    variant="ghost" 
                    className="w-full text-white hover:bg-white/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleFormClick(form)
                    }}
                  >
                    Register Now →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Registration Dialog */}
      <Dialog open={dialogOpen} onOpenChange={(open) => {
        setDialogOpen(open)
        if (!open) resetForm()
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#0f2a4d]">
              Register for {selectedForm?.title}
            </DialogTitle>
            <DialogDescription>
              Fill in your details to register. You'll need to verify your email with OTP.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="collegeMail" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                College Email *
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="collegeMail"
                  type="email"
                  value={formData.collegeMail}
                  onChange={(e) => {
                    setFormData({ ...formData, collegeMail: e.target.value })
                    setOtpSent(false)
                  }}
                  placeholder="your.email@iitp.ac.in"
                  required
                  disabled={otpSent}
                  className="flex-1"
                />
                <Button
                  type="button"
                  onClick={handleSendOTP}
                  disabled={sendingOTP || (otpSent && countdown > 0)}
                  className="bg-[#0f2a4d] hover:bg-[#1a4b8c] min-w-[120px]"
                >
                  {sendingOTP ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : otpSent && countdown > 0 ? (
                    `Resend (${formatTime(countdown)})`
                  ) : otpSent ? (
                    'Resend OTP'
                  ) : (
                    'Send OTP'
                  )}
                </Button>
              </div>
              {otpSent && countdown > 0 && (
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  OTP sent! Valid for {formatTime(countdown)} <br />
                  try searching in spam/junk folder if not found
                </p>
              )}
            </div>

            {otpSent && (
              <div>
                <Label htmlFor="otp" className="flex items-center gap-2">
                  <Hash className="w-4 h-4" />
                  Enter OTP *
                </Label>
                <Input
                  id="otp"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value.replace(/\D/g, '') })}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                  className="mt-1 text-center text-xl tracking-wider font-mono"
                />
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Check your email inbox for the OTP
                </p>
              </div>
            )}

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile number"
                required
                maxLength={10}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="course" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Course *
              </Label>
              <Input
                id="course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                placeholder="e.g., B.Tech CSE"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="semester" className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Semester *
              </Label>
              <Input
                id="semester"
                type="number"
                min="1"
                max="10"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                placeholder="e.g., 5"
                required
                className="mt-1"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDialogOpen(false)}
                className="flex-1"
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#0f2a4d] to-[#1a4b8c] hover:from-[#1a4b8c] hover:to-[#0f2a4d]"
                disabled={submitting || !otpSent}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Submit Registration
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
