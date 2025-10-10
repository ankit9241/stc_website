import React from 'react'
import { Box, Typography } from '@mui/material'
import Header from '@/components/DomainPage/Header'
import About from '@/components/DomainPage/About'
import MemberSection from '@/components/DomainPage/MemberSection'
import domains from '@/DataStore/store'

const page = () => {
  return (
    <Box 
      sx= {{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
        {/* <Box
          sx={{
            position : 'absolute',
            top : '25rem',
            left : '-32rem',
            background: "radial-gradient(circle, rgba(176,162,40,0.5) 0%, rgba(0,0,0,0) 70%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        <Header 
        
          title={domains.analytica_arena.title}
          subtitle= {domains.analytica_arena.branch}
          imageUrl= {domains.analytica_arena.cardUrl}
          fromColor= "#e5d011"
          toColor="#f64242"
          to='left'
          prvDomain='/wings/tatva/subclubs/appistry'
          nextDomain='/wings/tatva/subclubs/synapse'

        />
        
        
        {/* <Box
          sx={{
            position : 'absolute',
            top : '80rem',
            left : '-30rem',
            background: "radial-gradient(circle, rgba(178,98,49,0.4) 0%, rgba(0,0,0,0) 40%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        <About
          title={domains.analytica_arena.title}
          about={domains.analytica_arena.description}
          message={domains.analytica_arena.message}
          fromColor= "#e5d011"
          toColor="#f64242"
          to=''
        />
        {/* <Box
          sx={{
            position : 'absolute',
            zIndex: '5',
            top : '100rem',
            right : '-32rem',
            background: "radial-gradient(circle, rgba(178,98,49,0.4) 0%, rgba(0,0,0,0) 60%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        <Box sx={{ my: 8 }}>
          <MemberSection
            members={domains.analytica_arena.team.map((member, index) => ({
            id: `member-${index + 1}`,
            name: member.name,
            role: member.position,
            avatar: member.imgUrl,
            achievements: [
            `Active contributor to Analytical Arena's success`,
            'Participated in multiple web development projects',
            'Helped organize workshops and events'
            ]
          }))}
          />
        </Box>
    </Box>
  )
}

export default page