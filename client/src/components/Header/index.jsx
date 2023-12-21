import { Typography } from '@mui/material';
import { Box, flexbox, fontFamily, typography } from '@mui/system';
import React from 'react';
import { Animated } from 'react-animated-css';
import '@fontsource/lobster-two';
import Banner from '../../assets/Images/BasilHeader.png';


const Header = () => {
  const CustomGrn = '#2a3a10';
  return (
   
      <Box
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Animated animationIn='fadeInRightBig'>
          <Typography variant='h1' style={{ fontFamily: 'Lobster Two, sans-serif', color: CustomGrn }}>
            Basil
          </Typography>
        </Animated>
      </Box>
   
  );
};

export default Header;
