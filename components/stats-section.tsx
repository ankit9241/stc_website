import React from 'react'

const StatsSection = () => {
  return (
    <div className="flex p-16 items-center h-[90vh] justify-between  gap-8 bg-gray-50 rounded-2xl shadow-md">
      {/* left section */}
      <div className="flex-1">
        <h3 className="text-violet-600 font-bold mb-2">About STC</h3>
        <h1 className="text-7xl font-semibold mb-4 text-gray-800 leading-tight">
          SHAPING MINDS,<br /> INSPIRING FUTURES
        </h1>
        <p className="text-gray-600 text-xl font-light leading-relaxed">
          Student Technical Council is a reimagined and upgraded version of the former Technology Club, established with the vision of creating a centralized, well-structured platform that caters to the diverse academic and professional aspirations of students. Recognizing the need for more specialized focus areas, the Student Senate was formed to streamline operations and maximize impact by dividing its responsibilities into three dedicated verticals.<br /><br />
        </p>

        <div className='flex justify-start items-center gap-8 mt-8'>
          <div>
            <p className='text-3xl text-violet-700 font-bold'>5000+</p>
            <h2>STUDENTS </h2>
          </div>
          <div>
            <p className='text-3xl text-violet-700 font-bold'>400+</p>
            <h2>LECTURE</h2>
          </div>
          <div>
            <p className='text-3xl text-violet-700 font-bold'>5</p>
            <h2>PROGRAMS</h2>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="flex-1 flex justify-center">
        <img
          src="./07.jpg"
          alt="STC"
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}

export default StatsSection
