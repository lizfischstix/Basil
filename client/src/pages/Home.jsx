
import React from 'react';
import { Box, Grid, Paper, Typography, Button, ThemeProvider } from '@mui/material';
import LapTop from '../assets/Images/Basil-laptop.png';
import PlantGif from '../assets/Images/KatieVosPlant.gif';

const Home = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} m={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'row' }, // Adjust for different screen sizes
              alignItems: { xs: 'center', sm: 'space-Around' }, // Center items for xs, align to the start for sm
              marginBottom: 2,
            }}
          >
            {/* Image */}
            <img
              src={LapTop}
              alt="laptop open to Basil"
              style={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                objectFit: 'cover',
              }}

            />

            {/* Text Box */}
            <Box alignContent={'end'}
              sx={{
                textAlign: { xs: 'center', sm: 'end' },
                marginTop: { xs: 2, sm: 0 },
              }}
            >
              <Paper elevation={3} style={{ maxHeight: '100vh', overflow: 'auto', padding: 3 }}>
                <Typography variant='h4' style={{ fontFamily: 'Lobster Two, sans-serif' }}>👋 Hey there! We are Basil.</Typography>
                <Typography variant='body' style={{ fontFamily: 'Andika, sans-serif' }}> We love helping people take charge of their financial future!
                  <br />
                  Interested?  Learn more aboout us <a href='/about'><Button variant='contained' color='success' >HERE</Button> </a></Typography>
              </Paper>
            </Box>
            {/* Image */}
            <img
              src={PlantGif}
              alt="Illustrated Gif of plants"
              style={{
                width: '100%',
                maxWidth: 400,
                height: 'auto',
                objectFit: 'cover',
              }}

            />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      pb: 3
      }} 
   >
      <Typography variant='h3' style={{ fontFamily: 'lobster Two, sans-serif', }}>
        Check out what Basil users are saying!
      </Typography>
    </Box >

      <Grid container spacing={{ xs: 2, md: 3, xl: 4 }} columns={{ xs: 2, md: 6, xl: 12 }} justifyContent={'center'}>
        <Box
          sx={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'end', // Center the items horizontally
            textAlign: 'center',
            '& > :not(style)': {

              m: 4,
              p: 2,
              width: 260,
              height: 255,

            },
          }}
        >
          <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>"Absolutely love this budgeting app! It's user-friendly, visually appealing, and has transformed my financial habits. The intuitive features make budgeting a breeze, providing insightful analytics. A must-have for anyone seeking financial control!" - Sophia R.</Paper>
          <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>"Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.</Paper>
          <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>"Five stars for this brilliant budgeting app! Its simplicity and effectiveness makes using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.</Paper>
          <Paper varient='elevation' style={{ fontFamily: 'Andika, sans-serif' }}>"Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.</Paper>
        </Box>
      </Grid>
   </>
  );
};

export default Home;
