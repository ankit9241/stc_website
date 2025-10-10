import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/DomainPage/Header'
import Team from '@/components/DomainPage/Team'
import About from '@/components/DomainPage/About'
import MemberSection from '@/components/DomainPage/MemberSection'
import domains from '@/DataStore/store'

const page = () => {
  return (
    <Box 
      sx= {{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
        {/* <Box         //gradient color shade
          sx={{
            position : 'absolute',
            top : '25rem',
            left : '-32rem',
            background: "radial-gradient(circle, rgba(82,78,156,0.5) 0%, rgba(0,0,0,0) 70%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        
        <Header
          title={domains.webwiser.title}
          subtitle={domains.webwiser.branch}
          imageUrl={domains.webwiser.cardUrl}
          stats={{
            activeMembers: 150,
            contestsHeld: 24,
            totalSessions: 45,
            projectsCompleted: 32,
            satisfactionRate: 98,
            upcomingEvents: 5
          }}
          fromColor="#4541f7"
          toColor="#c742f6"
          to='left'
          prvDomain='/wings/tatva/subclubs/tech-hub'
          nextDomain='/wings/tatva/subclubs/pixelerate'

        />
        {/* <Box
          sx={{
            position : 'absolute',
            top : '80rem',
            left : '-30rem',
            background: "radial-gradient(circle, rgba(193,59,184,0.4) 0%, rgba(0,0,0,0) 40%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
        <About 
          title={domains.webwiser.title}
          about= {domains.webwiser.description}
          message={domains.webwiser.message}
          fromColor= "#4541f7"
          toColor="#c742f6"
          to="left"
        />

          <Box sx={{ my: 8 }}>
            <MemberSection
              members={domains.webwiser.team.map((member, index) => ({
                id: `member-${index + 1}`,
                name: member.name,
                role: member.position,
                avatar: member.imgUrl,
                achievements: [
                  `Active contributor to WebWiser's success`,
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
            background: "radial-gradient(circle, rgba(193,59,184,0.4) 0%, rgba(0,0,0,0) 60%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}

        
        {/* <Team
          teamData={domains.webwiser.team}
        /> */}
        
    </Box>
  )
}

export default page