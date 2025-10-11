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
            background: "radial-gradient(circle, rgba(22,30 ,172,0.5) 0%, rgba(0,0,0,0) 70%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        
        <Header 
        
          title={domains.synapse.title}
          subtitle= {domains.synapse.branch}
          imageUrl= {domains.synapse.cardUrl}
          fromColor= "#118ce5"
          toColor="#9142f6"
          to='left'
          prvDomain='/wings/tatva/subclubs/analytical-arena'
          nextDomain='/wings/tatva/subclubs/hackshield'


        />

        {/* <Box
          sx={{
            position : 'absolute',
            top : '80rem',
            left : '-30rem',
            background: "radial-gradient(circle, rgba(22,30 ,172,0.4) 0%, rgba(0,0,0,0) 40%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        <About
          
          title={domains.synapse.title}
          about={domains.synapse.description}
          message={domains.synapse.message}
          fromColor= "#118ce5"
          toColor="#9142f6"
          to=''
        />

                <Box sx={{ my: 8 }}>
                  <MemberSection
                    members={domains.synapse.team.map((member, index) => ({
                    id: `member-${index + 1}`,
                    name: member.name,
                    role: member.position,
                    avatar: member.imgUrl,
                    achievements: [
                    `Active contributor to Synapse's success`,
                    'Participated in multiple web development projects',
                    'Helped organize workshops and events'
                    ]
                  }))}
                  />
                </Box>

        {/* <Box
          sx={{
            position : 'absolute',
            zIndex: '5',
            top : '100rem',
            right : '-32rem',
            background: "radial-gradient(circle, rgba(22,30 ,172,0.4) 0%, rgba(0,0,0,0) 60%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        {/* <Team
          teamData={domains.synapse.team}
        /> */}
        
    </Box>
  )
}

export default page