'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const wings = [
  {
    id: 1,
    title: 'DISHA',
    subtitle: 'CAREER GROWTH AND TRAINING CELL',
    logo: '/images/disha-logo.png',
    color: '#453CD5',
    description: 'DISHA empowers students with skills, exposure, and support for their professional growth through comprehensive training and development programs.',
    path: '/wings/disha'
  },
  {
    id: 2,
    title: 'ARTHNITI',
    subtitle: 'ENTREPRENEURSHIP AND INNOVATION CELL',
    logo: '/images/arthniti-logo.png',
    color: '#E53E3E',
    description: 'ARTHNITI promotes entrepreneurship and business skills, offering mentorship, workshops, and networking opportunities for students to develop their ideas.',
    path: '/wings/arthniti'
  },
  {
    id: 3,
    title: 'TATVA',
    subtitle: 'TECHNOLOGY AND RESEARCH CELL',
    logo: '/images/tatva_nobg.png',
    color: '#3182CE',
    description: 'TATVA nurtures technical expertise and promotes a research-oriented mindset among students through innovative projects and collaborative learning.',
    path: '/wings/tatva'
  }
];

const WingsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as const;

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  } as const;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-100 to-transparent opacity-70"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-purple-100 to-transparent opacity-70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-bold tracking-wider text-blue-600 mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              OUR WINGS
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover Our <span className="text-blue-600">Wings</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering students through specialized initiatives that drive innovation and excellence in technology and beyond.
            </p>
          </motion.div>
        </div>

        {/* Wings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <motion.div
              key={wing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] 
                } 
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="h-full p-8 flex flex-col">
                  {/* Logo */}
                  <div className="mb-6">
                    <img 
                      src={wing.logo} 
                      alt={`${wing.title} Logo`} 
                      className="w-24 h-24 object-contain"
                      style={{ 
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    />
                  </div>
                  
                  {/* Title */}
                  <div className="mb-4">
                    <span className="text-xs font-medium tracking-wider text-blue-600">COUNCIL</span>
                    <h3 className="mt-1 text-2xl font-bold text-gray-900">{wing.title}</h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 mt-3 rounded-full"></div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {wing.subtitle}
                  </p>
                  
                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      href={wing.path}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/wings" 
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm tracking-wide hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Explore All Wings
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WingsSection;