"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Send, CheckCircle2, Calendar, ArrowLeft } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface RegistrationForm {
  _id: string
  title: string
  content: string
  image?: string
  eventAt: string
  uploadedBy: string
  createdAt: string
  moreField?: string
}

export default function RegistrationFormPage() {
  const params = useParams()
  const router = useRouter()
  
  const [formData, setFormData] = useState<RegistrationForm | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  
  // Form state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState('')
  const [semester, setSemester] = useState('')
  const [extraInput, setExtraInput] = useState('')
  
  // OTP state
  const [showOtpDialog, setShowOtpDialog] = useState(false)
  const [otp, setOtp] = useState('')
  const [verifyingOtp, setVerifyingOtp] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  
  // Alert states
  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState<'success' | 'error'>('success')

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await fetch(`/api/admin/registration?id=${params.id}`)
        if (response.ok) {
          const data = await response.json()
          setFormData(data)
        } else {
          setAlertType('error')
          setAlertTitle('Error')
          setAlertMessage('Registration form not found')
          setShowAlert(true)
          setTimeout(() => router.push('/registration'), 2000)
        }
      } catch (_error) {
        setAlertType('error')
        setAlertTitle('Error')
        setAlertMessage('Failed to load registration form')
        setShowAlert(true)
        setTimeout(() => router.push('/registration'), 2000)
      } finally {
        setLoading(false)
      }
    }
    
    fetchFormData()
  }, [params.id, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !phone || !course || !semester) {
      setAlertType('error')
      setAlertTitle('Validation Error')
      setAlertMessage('Please fill all required fields')
      setShowAlert(true)
      return
    }

    if (!email.endsWith('@iitp.ac.in')) {
      setAlertType('error')
      setAlertTitle('Invalid Email')
      setAlertMessage('Please use your official college email (@iitp.ac.in)')
      setShowAlert(true)
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          event: formData?.title || 'Event Registration'
        })
      })

      const data = await response.json()

      if (response.ok) {
        setShowOtpDialog(true)
        setAlertType('success')
        setAlertTitle('OTP Sent Successfully!')
        setAlertMessage(data.message || 'Please check your email for the verification code. It may take a few moments to arrive.')
        setShowAlert(true)
      } else {
        setAlertType('error')
        setAlertTitle('Failed to Send OTP')
        setAlertMessage(data.error || data.message || 'Unable to send verification code. Please try again.')
        setShowAlert(true)
      }
    } catch (error) {
      setAlertType('error')
      setAlertTitle('Connection Error')
      setAlertMessage('Failed to send verification code. Please check your internet connection and try again.')
      setShowAlert(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setAlertType('error')
      setAlertTitle('Invalid OTP')
      setAlertMessage('Please enter a valid 6-digit OTP')
      setShowAlert(true)
      return
    }

    setVerifyingOtp(true)

    try {
      const response = await fetch('/api/admin/registration/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          forEvent: params.id,
          name,
          collegeMail: email,
          phone: parseInt(phone),
          course,
          semester: parseInt(semester),
          extraInput: extraInput || undefined,
          otp
        })
      })

      const data = await response.json()

      if (response.ok) {
        setRegistrationSuccess(true)
        setShowOtpDialog(false)
        setAlertType('success')
        setAlertTitle('Registration Successful! 🎉')
        setAlertMessage(data.message || 'You have been successfully registered for the event. Check your email for confirmation.')
        setShowAlert(true)
        
        setTimeout(() => {
          router.push('/registration')
        }, 3000)
      } else {
        let errorMessage = 'Invalid OTP. Please try again.'
        
        if (response.status === 409) {
          errorMessage = data.error || 'You have already registered for this event with this email.'
        } else if (response.status === 400) {
          errorMessage = data.error || 'Invalid or expired OTP. Please request a new one.'
        } else if (response.status === 500) {
          errorMessage = data.error || 'Server error occurred. Please try again later.'
        } else {
          errorMessage = data.error || data.message || errorMessage
        }
        
        setAlertType('error')
        setAlertTitle('Registration Failed')
        setAlertMessage(errorMessage)
        setShowAlert(true)
      }
    } catch (error) {
      setAlertType('error')
      setAlertTitle('Connection Error')
      setAlertMessage('Failed to verify OTP. Please check your internet connection and try again.')
      setShowAlert(true)
    } finally {
      setVerifyingOtp(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#1a4b8c]" />
      </div>
    )
  }

  if (!formData) {
    return null
  }

  if (registrationSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-3 sm:px-4">
        <Card className="max-w-2xl w-full shadow-2xl border-2 border-green-200">
          <CardContent className="py-12 sm:py-20 text-center p-4 sm:p-6">
            <div className="mb-6 inline-block p-3 sm:p-4 bg-green-100 rounded-full">
              <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f2a4d] mb-4 px-2">Registration Successful! 🎉</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 px-2">
              You have been successfully registered for
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1a4b8c] mb-6 sm:mb-8 px-2">
              {formData.title}
            </p>
            <div className="bg-blue-50 border-l-4 border-[#1a4b8c] p-3 sm:p-4 mb-6 text-left max-w-md mx-auto">
              <p className="text-xs sm:text-sm text-[#0f2a4d] font-semibold mb-2">
                📧 Confirmation Email Sent
              </p>
              <p className="text-xs sm:text-sm text-gray-700 break-words">
                A detailed confirmation has been sent to <strong className="break-all">{email}</strong>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Please check your inbox (and spam folder if needed)
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 max-w-md mx-auto mb-6">
              <p className="text-xs sm:text-sm text-green-800 leading-relaxed">
                ✓ Your spot has been reserved<br/>
                ✓ Event details saved<br/>
                ✓ You'll receive updates via email
              </p>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              Redirecting to registrations page in a moment...
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 sm:py-12 px-3 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/registration">
          <Button variant="ghost" className="mb-4 sm:mb-6 text-[#1a4b8c] hover:text-[#0f2a4d] text-sm sm:text-base">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Back to Registrations
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Event Details Card */}
          <Card className="shadow-xl border-2 border-[#1a4b8c]/20 h-fit lg:sticky lg:top-8">
            {formData.image && (
              <div className="relative h-48 sm:h-64 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={formData.image}
                  alt={formData.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader className="p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2a4d]">
                {formData.title}
              </h2>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-wrap">
                {formData.content}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-start sm:items-center text-[#1a4b8c] font-medium">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    {new Date(formData.eventAt).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>

              {formData.moreField && (
                <div className="mt-4 p-3 sm:p-4 bg-blue-50 border-l-4 border-[#1a4b8c] rounded">
                  <p className="text-xs sm:text-sm text-[#0f2a4d] font-medium">
                    ℹ️ Additional Information:
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1">
                    {formData.moreField}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Registration Form Card */}
          <Card className="shadow-xl border-2 border-[#1a4b8c]/20">
            <CardHeader className="bg-gradient-to-r from-[#0f2a4d] to-[#1a4b8c] p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Registration Form</h3>
            </CardHeader>
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#0f2a4d] font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#0f2a4d] font-semibold">
                    College Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.name@iitp.ac.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors"
                    required
                  />
                  <p className="text-xs text-gray-500">Must use @iitp.ac.in email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#0f2a4d] font-semibold">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your 10-digit phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors"
                    maxLength={10}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course" className="text-[#0f2a4d] font-semibold">
                    Course <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="course"
                    placeholder="e.g., B.Tech CSE"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semester" className="text-[#0f2a4d] font-semibold">
                    Semester <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="semester"
                    type="number"
                    placeholder="Enter your current semester (1-12)"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors"
                    min="1"
                    max="12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="extra" className="text-[#0f2a4d] font-semibold">
                    {formData?.moreField || 'Additional Information'}
                  </Label>
                  <Textarea
                    id="extra"
                    placeholder="Enter any additional information"
                    value={extraInput}
                    onChange={(e) => setExtraInput(e.target.value)}
                    className="border-2 border-gray-200 focus:border-[#1a4b8c] transition-colors min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 sm:h-12 bg-gradient-to-r from-[#0f2a4d] to-[#1a4b8c] hover:from-[#1a4b8c] hover:to-[#0f2a4d] text-white text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                      <span className="text-sm sm:text-base">Sending OTP...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm sm:text-base">Send Verification Code</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* OTP Verification Dialog */}
      <Dialog open={showOtpDialog} onOpenChange={(open) => {
        // Prevent closing when clicking outside
        if (!open && verifyingOtp) return;
        setShowOtpDialog(open);
      }}>
        <DialogContent 
          className="w-[calc(100vw-2rem)] max-w-md mx-4 sm:mx-auto"
          onInteractOutside={(e) => {
            // Prevent closing when clicking outside
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-[#0f2a4d]">Verify Your Email</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              We've sent a 6-digit verification code to <strong className="break-all">{email}</strong>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-sm sm:text-base text-[#0f2a4d] font-semibold">
                Enter OTP
              </Label>
              <Input
                id="otp"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="text-center text-xl sm:text-2xl tracking-widest border-2 border-gray-200 focus:border-[#1a4b8c] h-12 sm:h-14"
                maxLength={6}
              />
            </div>
            
            <Button
              onClick={handleVerifyOtp}
              disabled={verifyingOtp || otp.length !== 6}
              className="w-full h-11 sm:h-12 bg-gradient-to-r from-[#0f2a4d] to-[#1a4b8c] hover:from-[#1a4b8c] hover:to-[#0f2a4d] text-white font-semibold text-base sm:text-lg"
            >
              {verifyingOtp ? (
                <>
                  <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  <span className="text-sm sm:text-base">Verifying...</span>
                </>
              ) : (
                <span className="text-sm sm:text-base">Verify & Register</span>
              )}
            </Button>

            <p className="text-xs text-center text-gray-500">
              Didn't receive the code? Check your spam folder or try again
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Alert Dialog for all responses */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="w-[calc(100vw-2rem)] max-w-md mx-4 sm:mx-auto">
          <AlertDialogHeader>
            <AlertDialogTitle className={`text-xl sm:text-2xl font-bold ${alertType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {alertTitle}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm sm:text-base text-gray-700 pt-2">
              {alertMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className={`${alertType === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white w-full sm:w-auto h-10 sm:h-11 text-sm sm:text-base`}
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
