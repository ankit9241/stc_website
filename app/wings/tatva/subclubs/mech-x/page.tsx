import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/DomainPage/Header'
import About from '@/components/DomainPage/About'

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
        imageUrl=""
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
    </Box>
  )
}

export default page