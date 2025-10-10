import { Box, Typography } from '@mui/material'
import React from 'react'
import MemberCard from '@/components/MemberCard'
import AppConfig from '@/config/appConfig';
import Image from 'next/image';

type TeamMember = {
    name: string;
    position: string;
    imgUrl: string;
  };
  
type TeamProps = {
    teamData: TeamMember[];
};


const Team : React.FC<TeamProps> = ({teamData}) => {
  return (

    <Box
        sx={{
            minHeight : '100vh',
            display : 'flex',
            flexDirection : 'column',
            justifyItems : 'center',
            alignItems : 'center',
            gap : '2rem',
            textAlign : 'center',
            
        }}
    
    >

        <Typography className='audiowide-font'
            sx={{
                fontSize : '4rem'
            }}
        >
            Team
        </Typography>

        <Box
            sx={{
                
                display: 'flex',
                flexWrap : 'wrap-reverse',
                justifyContent : 'center',
                alignItems : 'center',
                
                gap: '4rem',
                zIndex : '10',

                padding : '0 4rem'
            }}
        >

            {teamData.map((memberData, index) => (
                <MemberCard key={`${memberData.name}-${index}`} memberData={memberData} />
            ))}
            
        </Box>

        <Image
            className="absolute right-10 bottom-52"
            src = {AppConfig.imageUrls.StarPatt}
            alt = "Milkyway2"

            width={800}
            height={200}
        />
    </Box>
  )
}

export default Team