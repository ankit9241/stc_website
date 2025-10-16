import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/DomainPage/Header";
import About from "@/components/DomainPage/About";
import MemberSection from "@/components/DomainPage/MemberSection";
import domains from "@/DataStore/store";

const page = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* <Box
          sx={{
            position: 'absolute',
            top: '25rem',
            left: '-32rem',
            background: "radial-gradient(circle, rgba(82,78,156,0.5) 0%, rgba(0,0,0,0) 70%)",
            width: '60rem',
            height: '60rem'
          }}
        /> */}

      <Header
        title={domains.pixelerate.title}
        subtitle={domains.pixelerate.branch}
        imageUrl={domains.pixelerate.cardUrl}
        fromColor="#c8c2f0"
        toColor="#6f67ff"
        to="left"
        prvDomain="/wings/tatva/subclubs/webwiser"
        nextDomain="/wings/tatva/subclubs/appistry"
      />

      {/* <Box
          sx={{
            position: 'absolute',
            top: '80rem',
            left: '-30rem',
            background: "radial-gradient(circle, rgba(155,148,198,0.4) 0%, rgba(0,0,0,0) 40%)",
            width: '60rem',
            height: '60rem'
          }}
        /> */}
      <About
        title={domains.pixelerate.title}
        about={domains.pixelerate.description}
        message={domains.pixelerate.message}
        fromColor="#c8c2f0"
        toColor="#6f67ff"
        to="bottom"
      />

      <Box sx={{ my: 8 }}>
        <MemberSection
          members={domains.pixelerate.team.map((member, index) => ({
            id: `member-${index + 1}`,
            name: member.name,
            role: member.position,
            avatar: member.imgUrl,
            achievements: [
              `Active contributor to Pixelerate's success`,
              "Participated in multiple web development projects",
              "Helped organize workshops and events",
            ],
          }))}
        />
      </Box>

      {/* <Box
          sx={{
            position : 'absolute',
            zIndex: '5',
            top : '100rem',
            right : '-32rem',
            background: "radial-gradient(circle, rgba(82,78 ,156,0.4) 0%, rgba(0,0,0,0) 60%)",
            width : '60rem',
            height : '60rem'
          }}
        /> */}
      {/* <Team
          teamData={domains.pixelerate.team}
        /> */}
    </Box>
  );
};

export default page;
