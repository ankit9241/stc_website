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
          position: "absolute",
          top: "25rem",
          left: "-32rem",
          background:
            "radial-gradient(circle, rgba(255,55,18,0.5) 0%, rgba(0,0,0,0) 70%)",
          width: "60rem",
          height: "60rem",
        }}
      /> */}

      <Header
        title={domains.code_red.title}
        subtitle={domains.code_red.branch}
        imageUrl={domains.code_red.cardUrl}
        fromColor="#e51111"
        toColor="#e842f6"
        to="left"
        prvDomain="/wings/tatva/subclubs/hackshield"
        nextDomain="/wings/tatva/subclubs/tech-hub"
      />
      {/* <Box
        sx={{
          position: "absolute",
          top: "80rem",
          left: "-30rem",
          background:
            "radial-gradient(circle, rgba(178,49,49,0.4) 0%, rgba(0,0,0,0) 40%)",
          width: "60rem",
          height: "60rem",
        }}
      /> */}
      <About
        title={domains.code_red.title}
        about={domains.code_red.description}
        message={domains.code_red.message}
        fromColor="#e51111"
        toColor="#e842f6"
        to=""
      />
      {/* <Box
        sx={{
          position: "absolute",
          zIndex: "5",
          top: "100rem",
          right: "-32rem",
          background:
            "radial-gradient(circle, rgba(178,49,49,0.4) 0%, rgba(0,0,0,0) 60%)",
          width: "60rem",
          height: "60rem",
        }}
      /> */}
      <Box sx={{ my: 8 }}>
        <MemberSection
          members={domains.code_red.team.map((member, index) => ({
          id: `member-${index + 1}`,
          name: member.name,
          role: member.position,
          avatar: member.imgUrl,
          achievements: [
          `Active contributor to Code Red's success`,
          'Participated in multiple web development projects',
          'Helped organize workshops and events'
          ]
        }))}
        />
      </Box>

    </Box>
  );
};

export default page;

