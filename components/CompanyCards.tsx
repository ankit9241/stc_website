"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react'
import { MapPin } from 'lucide-react'

interface Company {
  name: string;
  category: string;
  positions: string;
}

interface CompanyCardsProps {
  company: Company[];
}

const CompanyCards = ({ company: internshipCompanies }: CompanyCardsProps) => {
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    const colors = {
      'EdTech': 'bg-blue-100 text-blue-700 border-blue-200',
      'IT Services': 'bg-green-100 text-green-700 border-green-200', 
      'Analytics': 'bg-purple-100 text-purple-700 border-purple-200',
      'HR Tech': 'bg-orange-100 text-orange-700 border-orange-200',
      'Consulting': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'Training': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Manufacturing': 'bg-gray-100 text-gray-700 border-gray-200',
      'Media': 'bg-pink-100 text-pink-700 border-pink-200',
      'Real Estate': 'bg-teal-100 text-teal-700 border-teal-200',
      'FinTech': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Fashion Tech': 'bg-rose-100 text-rose-700 border-rose-200',
      'E-commerce': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'AgriTech': 'bg-lime-100 text-lime-700 border-lime-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {internshipCompanies.map((company: Company, index: number) => (
          <Card 
            key={index} 
            className={`group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-500 transform ${
              hoveredCompany === null 
                ? "hover:-translate-y-2" 
                : hoveredCompany === index  
                  ? "scale-105 -translate-y-2 shadow-2xl z-10" 
                  : "scale-95 opacity-60"
            } bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white`}
            onMouseEnter={() => setHoveredCompany(index)} 
            onMouseLeave={() => setHoveredCompany(null)}
          >
            <CardContent className="p-6 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              

              {/* Company name */}
              <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
                {company.name}
              </h4>

              {/* Category badge */}
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 border transition-all duration-300 ${getCategoryColor(company.category)}`}>
                <MapPin className="w-3 h-3 mr-1" />
                {company.category}
              </div>

              {/* Positions */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {company.positions}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CompanyCards