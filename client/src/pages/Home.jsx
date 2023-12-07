
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Graphic from '../assets/Images/basil-laptop.png'
const Home = () => {
  return (
    <Grid container spacing={{ xs: 4, md: 3 }} justifyContent="center">
      {/* Image and Text Section */}
      <Grid item xs={6} md={10}>
        <Box
          sx={{
            display: 'flex',
            Direction: 'row',
            alignItems: 'space around',
            marginBottom: 0,
          }}
        >
          {/* Image */}
          <img
            src={Graphic}
            alt="laptop open to Basil"
            style={{ width: '100%', maxWidth: 400, height: 'auto' }}
          />

          {/* Text Box */}
          <Box
            sx={{
              marginTop: 0,
              textAlign: 'block',
            }}
          >
            <Box />
            <Grid />
            <Grid container spacing={{ xs: 4, md: 3 }} justifyContent={'block'}>
              <Grid item xs={6} md={10}>
                <Box>
                  <Typography variant="h3"> 👋 Hey there! We are Basil. </Typography>
                  <Typography variant="body">
                    Our revolutionary new budgeting web app is a seamless financial companion designed for simplicity and efficiency.
                    Unleash control over your finances with an intuitive interface that effortlessly guides you through budgeting, expense tracking, and goal setting. Our user-friendly platform transforms the daunting task of financial management into an enjoyable experience. Gain clear insights into your spending habits and effortlessly achieve your financial goals. Whether you're a seasoned budgeter or just starting your financial journey, our app adapts to your needs. Say goodbye to financial stress and hello to a brighter financial future. Try our simple-to-use budgeting web app today and redefine your relationship with money.

                  </Typography>
                </Box>
              </Grid>
            </Grid>
            </Box>
          </Box>
      </Grid>

      {/* Paper Components Section */}
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 4,
              p: 2,
              width: 260,
              height: 255,
            },
          }}
        >
          <Paper elevation={3}>
            "Absolutely love this budgeting app! It's user-friendly, visually
            appealing, and has transformed my financial habits. The intuitive
            features make budgeting a breeze, providing insightful analytics. A
            must-have for anyone seeking financial control!" - Sophia R.
          </Paper>
          <Paper elevation={3}>"Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.</Paper>
          <Paper elevation={3}>"Five stars for this brilliant budgeting app! Its simplicity and effectiveness makes using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.</Paper>
          <Paper elevation={3}>"Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.</Paper>
          {/* Add more Paper components as needed */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
