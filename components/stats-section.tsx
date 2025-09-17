import React from 'react'

const StatsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 rounded-2xl shadow-md w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 mt-8 md:mt-12">
      {/* left section */}
      <div className="flex-1 w-full">
        {/* Section Header - match WingsSection style */}
        <div className="mb-4">
          <span className="inline-block text-sm font-medium tracking-wider text-blue-600 mb-3 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            ABOUT US
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mt-2 mb-4 text-gray-800 leading-tight break-words">
          SHAPING MINDS,<br /> INSPIRING FUTURES
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          Student Technical Council is a reimagined and upgraded version of the former Technology Club, established with the vision of creating a centralized, well-structured platform that caters to the diverse academic and professional aspirations of students. Recognizing the need for more specialized focus areas, the Student Senate was formed to streamline operations and maximize impact by dividing its responsibilities into three dedicated verticals.<br /><br />
        </p>

        <div className='flex justify-start items-center gap-6 sm:gap-8 mt-6 sm:mt-8'>
          <div>
            <p className='text-2xl sm:text-3xl text-violet-700 font-bold'>5000+</p>
            <h2>STUDENTS </h2>
          </div>
          <div>
            <p className='text-2xl sm:text-3xl text-violet-700 font-bold'>400+</p>
            <h2>LECTURE</h2>
          </div>
          <div>
            <p className='text-2xl sm:text-3xl text-violet-700 font-bold'>5</p>
            <h2>PROGRAMS</h2>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="flex-1 w-full flex justify-center">
        <img
          src="./07.jpg"
          alt="STC"
          className="max-w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  )
}

export default StatsSection
