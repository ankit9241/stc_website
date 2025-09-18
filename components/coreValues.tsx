import React from 'react'
import Image from 'next/image'

const coreValuesData = [
    {
        icon: '/coreValues1.svg',
        title: 'EXCELLENCE',
        description: 'Pursuing the highest standards in education and research with our cutting edge technology and expert lecturers.',
    },
    {
        icon: '/coreValues2.svg',
        title: 'DIVERSITY',
        description: 'Fostering inclusivity, celebrating differences, and respecting worldwide cultures in and beyond the academic ground.',
    },
    {
        icon: '/coreValues3.svg',
        title: 'INNOVATION',
        description: 'Encouraging creativity and pushing boundaries within the campus by giving them the best environment for ideas.',
    },
]

const CoreValues = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[115px] px-4 sm:px-6 lg:px-[100px] py-12 lg:py-[120px]">
      {/* Image: hidden on small screens, visible on desktops */}
      <div className="hidden lg:flex relative h-[720px] w-[530px] flex-shrink-0">
        <div className="absolute left-0 top-0 h-[720px] w-[450px]">
            <Image 
                src="/images/hackathon-collage.jpg"
                alt="Student with laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
            />
        </div>
        
      </div>
      {/* Content */}
      <div className="flex w-full lg:w-[500px] max-w-2xl flex-col items-start gap-8">
        <span className="inline-block text-sm font-bold tracking-wider text-blue-600 mb-3 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            OUR VALUES
          </span>
          <h2 className="mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Our <span className="text-blue-600">Core Values</span> that Shape us.
          </h2>
        <div className="flex flex-col items-start gap-6">
          {coreValuesData.map((value, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="relative h-[79px] w-[85px] bg-[#443CD50D] p-4">
                <Image 
                  src={value.icon} 
                  alt={value.title} 
                  fill 
                  className="object-contain"
                  sizes="(max-width: 768px) 85px, 85px"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-lg font-bold text-[#222222]">{value.title}</h4>
                <p className="text-base text-[#222222B2] max-w-prose">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues