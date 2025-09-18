"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from "lucide-react"
import FaQ from "@/components/FaQ"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'loading' | null; message: string | null }>({ type: null, message: null });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('API Response:', { status: response.status, data });

      if (!response.ok) {
        console.error('API Error:', data);
        
        // Handle specific Resend API errors
        if (data.details?.name === 'missing_required_field') {
          throw new Error('Please fill in all required fields.');
        } else if (data.details?.name === 'invalid_email') {
          throw new Error('Please enter a valid email address.');
        } else if (data.details?.name === 'forbidden') {
          throw new Error('Email sending is currently restricted. Please contact support.');
        } else if (data.details?.code === 'validation_error') {
          throw new Error('Invalid input. Please check your form data.');
        } else if (data.details?.message) {
          throw new Error(data.details.message);
        } else {
          throw new Error(data.error || 'Failed to send message. Please try again later.');
        }
      }

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      
      setStatus({ 
        type: 'success', 
        message: 'Your message has been sent successfully! We\'ll get back to you soon.' 
      });
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus({ 
        type: 'error', 
        message: error.message || 'An error occurred while sending your message. Please try again later.' 
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white pt-16">
      {process.env.NODE_ENV !== 'production' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Test Mode:</strong> In development, contact form submissions will be sent to our team's verified email address.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Get in touch with our Student Technical Council. We're here to assist with participation, partnerships, and any
              inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Student Technical Council<br />
                      Indian Institute of Technology Patna<br />
                      Bihta, Patna - 801106<br />
                      Bihar, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91-98895-02400</p>
                    <p className="text-gray-600">+91-93267-60945</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">stc@iitp.ac.in</p>
                    <p className="text-gray-600">tpc@iitp-cep.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Students</h4>
                    <p className="text-sm text-gray-600 mb-2">Join wings and participation inquiries</p>
                    <a href="mailto:stc@iitp.ac.in" className="text-blue-600 text-sm hover:underline">
                      stc@iitp.ac.in
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Industry</h4>
                    <p className="text-sm text-gray-600 mb-2">Partnership and collaboration opportunities</p>
                    <a href="mailto:stc@iitp.ac.in" className="text-green-600 text-sm hover:underline">
                      stc@iitp.ac.in
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  {status.message && (
                    <div className={`mb-6 p-4 rounded-md ${
                      status.type === 'error' ? 'bg-red-100 text-red-700 border border-red-200' :
                      status.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' :
                      'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          disabled={isLoading}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <div className="space-y-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
            <p className="text-xl text-gray-600">Find us at IIT Patna campus for in-person consultations and visits</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Map Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">VISIT OUR CAMPUS</h3>
                <a
                  href="https://maps.google.com/maps?q=Indian+Institute+of+Technology+Patna,+Bihta,+Patna,+Bihar&hl=en&sll=25.5941,85.1376&sspn=0.1,0.1&t=m&z=15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View larger map
                </a>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="relative" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4756989094887!2d85.13542731498!3d25.59413998374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5690c5c9c6a9%3A0x8040be5d8c7e0b0!2sIndian%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IIT Patna Campus Location"
                className="w-full h-full"
              ></iframe>

              {/* Map Overlay Info */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Indian Institute of Technology, Patna</h4>
                    <p className="text-xs text-gray-600 mt-1">Bihta, Patna - 801106, Bihar, India</p>
                    <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                      <span>📍 Campus Location</span>
                      <span>🚗 Parking Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Footer */}
            <div className="bg-gray-50 px-4 py-3 border-t">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>📍 Map Data</span>
                  <span>📋 Terms</span>
                  <span>⚠️ Report a map error</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🛰️ Satellite</span>
                  <span>🗺️ Terrain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Directions and Transport Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
                <p className="text-sm text-gray-600">
                  Located on NH-30, approximately 30 km from Patna city center. Ample parking available on campus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">By Bus</h3>
                <p className="text-sm text-gray-600">
                  Regular bus services available from Patna to Bihta. Campus shuttle service connects to main gate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">By Air</h3>
                <p className="text-sm text-gray-600">
                  Nearest airport is Jay Prakash Narayan Airport, Patna (45 km). Taxi and bus services available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our programs and services</p>
          </div>
          <FaQ />
        </div>
      </section>
    </div>
  )
}
