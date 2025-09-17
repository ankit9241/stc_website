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
    <section className="flex items-center justify-center gap-[115px] px-[100px] py-[120px]">
      <div className="relative h-[621px] w-[530px] flex-shrink-0">
        <div className="absolute left-0 top-0 h-[730px] w-[450px]">
            <Image 
                src="/images/hackathon-collage.jpg"
                alt="Student with laptop"
                layout="fill"
                objectFit="cover"
            />
        </div>
        
      </div>
      <div className="flex w-[500px] flex-col items-start gap-8">
        <h3 className="text-sm font-bold uppercase tracking-[2.80px] text-[#443CD5]">
          Our Values
        </h3>
        <h2 className="text-5xl font-bold leading-[57.60px] text-[#222222]">
          THE CORE VALUES THAT SHAPE US
        </h2>
        <div className="flex flex-col items-start gap-10">
          {coreValuesData.map((value, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="relative h-[79px] w-[85px] bg-[#443CD50D] p-4">
                <Image src={value.icon} alt={value.title} layout="fill" objectFit="contain" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="text-lg font-bold text-[#222222]">{value.title}</h4>
                <p className="w-[390px] text-base text-[#222222B2]">
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