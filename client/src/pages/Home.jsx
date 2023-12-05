import React from 'react';
import { Box, Paper} from '@mui/material';


const Home = () => {

  return (
    <>
      <h3 className="container text-center">
        Welcome!
      </h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            ml: 35,
            p: 2,
            width: 260,
            height: 255,
          },
        }}
      >
        <Paper variant='elevation'>"Absolutely love this budgeting app! It's user-friendly, visually appealing, and has transformed my financial habits. The intuitive features make budgeting a breeze, providing insightful analytics. A must-have for anyone seeking financial control!" - Sophia R.</Paper>
        <Paper variant='elevation'>"Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.</Paper>
        <Paper variant='elevation'>"Five stars for this brilliant budgeting app! Its simplicity and effectiveness makes using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.</Paper>
        <Paper variant='elevation'>"Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.</Paper>
      </Box>
    </>
  );  
};

export default Home;