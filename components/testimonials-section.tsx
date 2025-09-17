"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Vatsal Srivastava",
    company: "Codec Technologies",
    role: "Java Developer Intern",
    content:
      "The Training and Placement Cell at IIT Patna provided exceptional support throughout my internship journey. Their guidance was instrumental in helping me secure my dream job at Google.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mohit Kumar",
    company: "IIIT Agartala",
    role: "Research Intern",
    content:
      "The comprehensive training programs and mock interviews prepared me well for the industry. The TPC team goes above and beyond to ensure student success.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Hridayanand Gupta",
    company: "Incubation centre IITP",
    role: "Intern",
    content:
      "IIT Patna TPC not only helped me get placed but also shaped my career trajectory. The industry connections and mentorship are unparalleled.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const recruiterTestimonials = [
  {
    name: "Sarah Johnson",
    company: "Goldman Sachs",
    role: "HR Director",
    content:
      "IIT Patna students consistently demonstrate exceptional technical skills and problem-solving abilities. They are among our top performers.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Chen",
    company: "McKinsey & Company",
    role: "Partner",
    content:
      "The quality of students from IIT Patna is outstanding. Their analytical thinking and leadership potential make them valuable additions to our team.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentRecruiter, setCurrentRecruiter] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextRecruiter = () => {
    setCurrentRecruiter((prev) => (prev + 1) % recruiterTestimonials.length)
  }

  const prevRecruiter = () => {
    setCurrentRecruiter((prev) => (prev - 1 + recruiterTestimonials.length) % recruiterTestimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Alumni & Recruiters Say</h2>
          <p className="text-xl text-gray-600">Success stories from our graduates and feedback from top recruiters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Student Testimonials */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Alumni Success Stories</h3>
            <div className="relative bg-blue-50 rounded-3xl p-8 flex-1 flex flex-col">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-1">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-blue-600">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={prevTestimonial} className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Recruiter Testimonials */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recruiter Feedback</h3>
            <div className="relative bg-gray-50 rounded-3xl p-8 flex-1 flex flex-col">
              <Quote className="w-8 h-8 text-gray-600 mb-4" />
              <p className="text-gray-700 mb-6 text-lg leading-relaxed flex-1">
                {recruiterTestimonials[currentRecruiter].content}
              </p>
              <div className="flex items-center mb-6">
                <img
                  src={recruiterTestimonials[currentRecruiter].image || "/placeholder.svg"}
                  alt={recruiterTestimonials[currentRecruiter].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{recruiterTestimonials[currentRecruiter].name}</h4>
                  <p className="text-gray-600">
                    {recruiterTestimonials[currentRecruiter].role} at {recruiterTestimonials[currentRecruiter].company}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={prevRecruiter} className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextRecruiter} className="p-2 rounded-full bg-gray-600 text-white hover:bg-gray-700">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
