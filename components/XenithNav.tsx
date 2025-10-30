import React from 'react'

const XenithNav = () => {
  return (
    <nav className='w-[90%] h-20 bg-radial/50 from-[#293673] to-[#060717] backdrop-blur-2xl fixed top-4 left-[50%] z-50 shadow-md transform -translate-x-1/2 rounded-lg flex items-center justify-center'>
        {/* left logo */}
        <a href="#main">
        <div className='flex items-center mr-auto ml-6 gap-2'>
            <img src="/xenith/logo.png" alt="Xenith Logo" className='h-12' />
            <img src="/xenith/xenith.png" alt="" className='h-4' />
        </div>
        </a>

        {/* right nav btns */}
        <div className='flex items-center ml-auto mr-6 gap-8 text-md font-medium' style={{ fontFamily: "'Stalinist One', sans-serif" }}>
            <a href="#about" className='text-white hover:text-[#FFA4FF] transition-colors'>About</a>
            <a href="#events" className='text-white hover:text-[#FFA4FF] transition-colors'>Events</a>
            <a href="#sponsors" className='text-white hover:text-[#FFA4FF] transition-colors'>Sponsors</a>
            <a href="#contact" className='text-white hover:text-[#FFA4FF] transition-colors'>Contact</a>
        </div>
    </nav>
  )
}

export default XenithNav