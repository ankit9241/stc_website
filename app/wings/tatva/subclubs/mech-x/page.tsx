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
            position: 'absolute',
            top: '25rem',
            left: '-32rem',
            background: "radial-gradient(circle, rgba(20,83,45,0.5) 0%, rgba(0,0,0,0) 70%)",
            width: '60rem',
            height: '60rem'
          }}
        /> */}

        <Header
          title="MECH-X"
          subtitle="ROBOTICS CLUB"
          imageUrl={domains.tech_news.cardUrl}
          fromColor="#14a44d"
          toColor="#0d6efd"
          to="left"
          prvDomain="/wings/tatva/subclubs/tech-hub"
          nextDomain="/wings/tatva/subclubs/webwiser"
        />

        {/* <Box
          sx={{
            position: 'absolute',
            top: '80rem',
            left: '-30rem',
            background: "radial-gradient(circle, rgba(20,83,45,0.4) 0%, rgba(0,0,0,0) 40%)",
            width: '60rem',
            height: '60rem'
          }}
        /> */}
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
                    achievements: [
                    `Active contributor to Mech-X's success`,
                    'Participated in multiple web development projects',
                    'Helped organize workshops and events'
                    ]
                  }))}
                  />
                </Box>

        {/* <Team
          teamData={[
            {
              name: "Coordinator Name",
              position: "Coordinator",
              imgUrl: domains.tech_news.team[0].imgUrl
            },
            {
              name: "Sub-Coordinator Name",
              position: "Sub-Coordinator",
              imgUrl: domains.tech_news.team[1].imgUrl
            },
            {
              name: "Member 1",
              position: "Member",
              imgUrl: domains.tech_news.team[2].imgUrl
            },
            {
              name: "Member 2",
              position: "Member",
              imgUrl: domains.tech_news.team[3].imgUrl
            }
          ]}
        /> */}
    </Box>
  )
}

export default page
