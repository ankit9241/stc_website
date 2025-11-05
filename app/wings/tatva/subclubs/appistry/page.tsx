'use client'
import React from 'react'
import { Box } from '@mui/material'
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
            background: "radial-gradient(circle, rgba(66,168,145,0.5) 0%, rgba(0,0,0,0) 70%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        
        <Header 
          title={domains.appistry.title}
          subtitle= {domains.appistry.branch}
          imageUrl= {domains.appistry.cardUrl}
           fromColor= "#12E7B5"
          toColor="#09A9BB"
          to={{
            whatsappLink: domains.appistry.whatsappLink,
            direction: 'left'
          }}
          prvDomain='/wings/tatva/subclubs/pixelerate'
          nextDomain='/wings/tatva/subclubs/analytical-arena'

        />
        
        {/* <Box
          sx={{
            top : '80rem',
            left : '-30rem',
            background: "radial-gradient(circle, rgba(49,178,139,0.4) 0%, rgba(0,0,0,0) 40%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        <About
            
          title={domains.appistry.title}
          about={domains.appistry.description}
          message={domains.appistry.message}
          fromColor= "#12E7B5"
          toColor="#09A9BB"
          to=''
        />


        {/* <Box
          sx={{
            position : 'absolute',
            zIndex: '5',
            top : '100rem',
            right : '-32rem',
            background: "radial-gradient(circle, rgba(49,178,139,0.4) 0%, rgba(0,0,0,0) 60%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        <Box sx={{ my: 8 }}>
          <MemberSection
            members={domains.appistry.team.map((member, index) => ({
            id: `member-${index + 1}`,
            name: member.name,
            role: member.position,
            avatar: member.imgUrl,
            achievements: [
            `Active contributor to Appistry's success`,
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