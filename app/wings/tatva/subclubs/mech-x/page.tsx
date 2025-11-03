import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/DomainPage/Header'
import About from '@/components/DomainPage/About'
import MemberSection from '@/components/DomainPage/MemberSection'
import domains from '@/DataStore/store'
import AppConfig from '@/config/appConfig'

const page = () => {
  return (
    <Box 
      sx={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Header
        title="MECH-X"
        subtitle="ROBOTICS CLUB"
        imageUrl={AppConfig.imageUrls.MechXBox2}
        fromColor="#14a44d"
        toColor="#0d6efd"
        to="left"
        prvDomain="/wings/tatva/subclubs/tech-hub"
        nextDomain="/wings/tatva/subclubs/webwiser"
      />

      <About
        title="MECH-X"
        about="Mech-X is the robotics club that focuses on building and programming robots through competitions and practical learning experiences. Join us to explore the exciting world of robotics and automation."
        message="Join us and be part of the robotics revolution! 🤖⚡"
        fromColor="#14a44d"
        toColor="#0d6efd"
        to="bottom"
      />

      <Box sx={{ my: 8 }}>
        <MemberSection
          members={domains.mech_x.team.map((member, index) => ({
            id: `member-${index + 1}`,
            name: member.name,
            role: member.position,
            avatar: member.imgUrl,
          }))}
        />
      </Box>
    </Box>
  )
}

export default page