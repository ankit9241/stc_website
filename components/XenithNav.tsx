"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const XenithNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='w-[95%] md:w-[90%] h-16 md:h-20 bg-radial/50 from-[#293673] to-[#060717] backdrop-blur-2xl fixed top-2 left-[50%] z-50 shadow-md transform -translate-x-1/2 rounded-lg flex items-center justify-between px-4 md:px-6 cursor-custom'>
        <div className='flex items-center gap-2 z-50'>
          <Link href="/" className='flex items-center'>
            <img src="/iitp-logo.png" alt="IIT Patna Logo" className='h-8 md:h-10 mr-1' />
          </Link>
          <div className="h-8 md:h-12 w-px bg-gray-400 mx-1"></div>
          <Link href="/xenith" className='flex items-center'>
            <img src="/xenith/logo.png" alt="Xenith Logo" className='h-8 md:h-12' />
            <img src="/xenith/xenith.png" alt="Xenith Text" className='h-3 md:h-4' />
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-1 lg:gap-2' style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
          {['About', 'Events', 'Sponsors', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`/xenith#${item.toLowerCase()}`} 
              className="relative px-5 py-3 text-base font-semibold text-gray-200 hover:text-white transition-all duration-300 group"
              onClick={closeMenu}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ba9efe]/0 via-[#ba9efe]/10 to-[#ba9efe]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ba9efe] to-[#d4b3ff] transition-all duration-300 group-hover:w-3/5 group-hover:left-1/5"></span>
            </Link>
          ))}
        </div>

        <button 
          onClick={toggleMenu}
          className='md:hidden text-white z-50 p-2 hover:text-[#FFA4FF] transition-colors'
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div 
          className={`fixed top-20 right-4 w-[90%] max-w-sm bg-gradient-to-br from-[#293673] to-[#060717] backdrop-blur-2xl rounded-lg shadow-2xl border-2 border-[#ba9efe]/30 transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='flex flex-col p-4' style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
            {['About', 'Events', 'Sponsors', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={closeMenu}
                className="relative overflow-hidden text-white/90 hover:text-white transition-all duration-300 text-xl py-5 px-6 rounded-lg group font-medium"
              >
                <span className="relative z-10 flex items-center">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#ba9efe] to-[#d4b3ff] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ba9efe]/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#ba9efe]/30 to-transparent"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default XenithNav