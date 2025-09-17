import React from 'react'
import Link from 'next/link'

const WingsSection = () => {
  return (
    <div className='bg-blue-50 p-4 sm:p-8 lg:p-16 pt-16 sm:pt-20 rounded-lg flex flex-col items-center justify-center'>
        <div className="w-full">
            <h2 className="text-base sm:text-xl font-bold text-[#453CD5] mb-2 sm:mb-4 text-center">OUR WINGS</h2>
            <p className="text-2xl sm:text-5xl text-gray-800 font-semibold mb-4 sm:mb-8 leading-normal text-center">EXPLORE THE VARIOUS WINGS OF OUR ORGANIZATION <br className="hidden sm:block"/> THAT DRIVE OUR MISSION FORWARD.</p>
        </div>
        <div className="flex flex-col gap-8 justify-center mt-10 sm:mt-20 lg:flex-row items-center w-full">
            {/* DISHA */}
            <div className="relative w-full max-w-[22rem] sm:max-w-[28rem] h-[26rem] sm:h-[30rem] group border-b-4 border-[#453CD5] overflow-hidden">
              {/* front */}
              <div className="bg-white shadow-lg p-6 sm:p-10 flex flex-col items-start justify-between transition-all duration-500 z-10 w-full h-full group-hover:bg-gray-200">
            <h1 className="text-base sm:text-lg tracking-widest font-semibold text-[#453CD5] mb-2 sm:mb-4">COUNCIL</h1>
            <div className='flex flex-col gap-4 sm:gap-6'>
              <img src="./first.svg" alt="" className='w-16 h-16 sm:size-20' />
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
                DISHA- <span className='text-base sm:text-xl font-semibold text-gray-800 block mt-1 sm:mt-2'>CAREER GROWTH AND TRAINING CELL</span>
              </h2>
            </div>
              </div>
              {/* back */}
              <div className="absolute left-0 bottom-0 w-full h-full bg-[#453CD5] shadow-lg p-6 sm:p-10 flex flex-col items-start justify-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20 text-left">
            <h1 className="text-lg sm:text-xl tracking-widest font-semibold text-white mb-2 sm:mb-4">COUNCIL</h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">ABOUT DISHA</h1>
            <h2 className="text-base sm:text-lg text-white">
              DISHA EMPOWERS STUDENTS WITH SKILLS, EXPOSURE, AND SUPPORT FOR THEIR PROFESSIONAL GROWTH.
            </h2>
            <Link href='/wings/disha' className='underline mt-6 sm:mt-10 text-white text-base sm:text-lg'>READ MORE</Link>
              </div>
            </div>
            {/* ARTHNITI */}
            <div className="relative w-full max-w-[22rem] sm:max-w-[28rem] h-[26rem] sm:h-[30rem] group border-b-4 border-[#453CD5] overflow-hidden">
              {/* front */}
              <div className="bg-white shadow-lg p-6 sm:p-10 flex flex-col items-start justify-between transition-all duration-500 z-10 w-full h-full group-hover:bg-gray-200">
            <h1 className="text-base sm:text-lg tracking-widest font-semibold text-[#453CD5] mb-2 sm:mb-4">COUNCIL</h1>
            <div className='flex flex-col gap-4 sm:gap-6'>
              <img src="./second.svg" alt="" className='w-16 h-16 sm:size-20' />
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
                ARTHNITI- <span className='text-base sm:text-xl font-semibold text-gray-800 block mt-1 sm:mt-2'>ENTREPRENEURSHIP AND INNOVATION CELL</span>
              </h2>
            </div>
              </div>
              {/* back */}
              <div className="absolute left-0 bottom-0 w-full h-full bg-[#453CD5] shadow-lg p-6 sm:p-10 flex flex-col items-start justify-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20 text-left">
            <h1 className="text-lg sm:text-xl tracking-widest font-semibold text-white mb-2 sm:mb-4">COUNCIL</h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">ABOUT ARTHNITI</h1>
            <h2 className="text-base sm:text-lg text-white">
              ARTHNITI PROMOTES ENTREPRENEURSHIP AND BUSINESS SKILLS, OFFERING MENTORSHIP, WORKSHOPS, AND NETWORKING FOR STUDENTS TO DEVELOP THEIR IDEAS.
            </h2>
            <Link href='/wings/arthniti' className='underline mt-6 sm:mt-10 text-white text-base sm:text-lg'>READ MORE</Link>
              </div>
            </div>
            {/* TATVA */}
            <div className="relative w-full max-w-[22rem] sm:max-w-[28rem] h-[26rem] sm:h-[30rem] group border-b-4 border-[#453CD5] overflow-hidden">
              {/* front */}
              <div className="bg-white shadow-lg p-6 sm:p-10 flex flex-col items-start justify-between transition-all duration-500 z-10 w-full h-full group-hover:bg-gray-200">
            <h1 className="text-base sm:text-lg tracking-widest font-semibold text-[#453CD5] mb-2 sm:mb-4">COUNCIL</h1>
            <div className='flex flex-col gap-4 sm:gap-6 '>
              <img src="./third.svg" alt="" className='w-16 h-16 sm:size-20' />
              <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">TATVA- <span className='text-base sm:text-xl font-semibold text-gray-800 block mt-1 sm:mt-2'>TECHNOLOGY AND RESEARCH CELL</span></h2>
            </div>
              </div>
              {/* back */}
              <div className="absolute left-0 bottom-0 w-full h-full bg-[#453CD5] shadow-lg p-6 sm:p-10 flex flex-col items-start justify-center transition-all duration-500 scale-y-0 origin-bottom opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-20 text-left">
            <h1 className="text-lg sm:text-xl tracking-widest font-semibold text-white mb-2 sm:mb-4">COUNCIL</h1>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">ABOUT TATVA</h1>
            <h2 className="text-base sm:text-lg text-white">
              TATVA IS THE DEDICATED WING OF THE STUDENT TECHNICAL COUNCIL THAT AIMS TO NURTURE TECHNICAL EXPERTISE AND PROMOTE A RESEARCH-ORIENTED MINDSET AMONG STUDENTS.
            </h2>
            <Link href='/wings/tatva' className='underline mt-6 sm:mt-10 text-white text-base sm:text-lg'>READ MORE</Link>
              </div>
            </div>
        </div>
    </div>
  )
}
  

export default WingsSection