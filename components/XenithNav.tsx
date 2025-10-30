"use client";
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
        <a href="#main" className='flex items-center gap-2 z-50'>
          <img src="/xenith/logo.png" alt="Xenith Logo" className='h-8 md:h-12' />
          <img src="/xenith/xenith.png" alt="" className='h-3 md:h-4' />
        </a>

        <div className='hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-md font-medium' style={{ fontFamily: "'Stalinist One', sans-serif" }}>
          <a href="#about" className='text-white hover:text-[#FFA4FF] transition-colors'>About</a>
          <a href="#events" className='text-white hover:text-[#FFA4FF] transition-colors'>Events</a>
          <a href="#sponsors" className='text-white hover:text-[#FFA4FF] transition-colors'>Sponsors</a>
          <a href="#contact" className='text-white hover:text-[#FFA4FF] transition-colors'>Contact</a>
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
          <div className='flex flex-col p-6 gap-4' style={{ fontFamily: "'Stalinist One', sans-serif" }}>
            <a 
              href="#about" 
              onClick={closeMenu}
              className='text-white hover:text-[#FFA4FF] transition-colors text-lg py-3 px-4 rounded-lg hover:bg-[#ba9efe]/10 border-b border-[#ba9efe]/20'
            >
              About
            </a>
            <a 
              href="#events" 
              onClick={closeMenu}
              className='text-white hover:text-[#FFA4FF] transition-colors text-lg py-3 px-4 rounded-lg hover:bg-[#ba9efe]/10 border-b border-[#ba9efe]/20'
            >
              Events
            </a>
            <a 
              href="#sponsors" 
              onClick={closeMenu}
              className='text-white hover:text-[#FFA4FF] transition-colors text-lg py-3 px-4 rounded-lg hover:bg-[#ba9efe]/10 border-b border-[#ba9efe]/20'
            >
              Sponsors
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className='text-white hover:text-[#FFA4FF] transition-colors text-lg py-3 px-4 rounded-lg hover:bg-[#ba9efe]/10'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default XenithNav