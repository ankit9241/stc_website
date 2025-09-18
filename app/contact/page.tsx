"use client"

import type React from "react"

import { useState } from "react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    })
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white pt-16">
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

      {/* Contact Information and Form */}
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
                      Student Technical Council
                      <br />
                      Indian Institute of Technology Patna
                      <br />
                      Bihta, Patna - 801106
                      <br />
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
                    <p className="text-gray-600">
                      +91-98895-02400
                    </p>
                    <p className="text-gray-600">
                      +91-93267-60945
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      stciitphybrid@iitp.ac.in
                    </p>
                    <p className="text-gray-600">
                      tpc@iitp-cep.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
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
                    <a href="mailto:stciitphybrid@iitp.ac.in" className="text-blue-600 text-sm hover:underline">
                      stciitphybrid@iitp.ac.in
                    </a>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">For Industry</h4>
                    <p className="text-sm text-gray-600 mb-2">Partnership and collaboration opportunities</p>
                    <a href="mailto:stciitphybrid@iitp.ac.in" className="text-green-600 text-sm hover:underline">
                      stciitphybrid@iitp.ac.in
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
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

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
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
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3637.5842304021667!2d84.8487250754359!3d25.535599977494698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDMyJzA4LjIiTiA4NMKwNTEnMDQuNyJF!5e1!3m2!1sen!2sus!4v1758220612066!5m2!1sen!2sus"
  width="1400"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

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
        <FaQ/>
    </div>
  )
}
