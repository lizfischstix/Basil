
import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Graphic from '../assets/Images/Basil-laptop.png'
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
              src={Graphic}
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
                <Typography variant="h3">👋 Hey there! We are Basil.</Typography>
                <Typography variant="body1">
                  Our revolutionary new budgeting web app is a seamless financial companion designed for simplicity and
                  efficiency. Unleash control over your finances with an intuitive interface that effortlessly guides you
                  through budgeting, expense tracking, and goal setting. Our user-friendly platform transforms the daunting
                  task of financial management into an enjoyable experience. Gain clear insights into your spending habits
                  and effortlessly achieve your financial goals. Whether you're a seasoned budgeter or just starting your
                  financial journey, our app adapts to your needs. Say goodbye to financial stress and hello to a brighter
                  financial future. Try our simple-to-use budgeting web app today and redefine your relationship with money.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 2, md: 3, xl: 4 }} columns={{ xs: 2, md: 6, xl: 12 }} justifyContent={'center'}>
        <Box
          sx={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'center', // Center the items horizontally
            textAlign: 'center',
            '& > :not(style)': {

              m: 4,
              p: 2,
              width: 260,
              height: 255,

            },
          }}
        >
          <Paper varient='elevation'>"Absolutely love this budgeting app! It's user-friendly, visually appealing, and has transformed my financial habits. The intuitive features make budgeting a breeze, providing insightful analytics. A must-have for anyone seeking financial control!" - Sophia R.</Paper>
          <Paper varient='elevation'>"Impressive! This app simplifies budgeting like never before. Alex-friendly interface, powerful tools, and insightful reports. My financial game has never been stronger!" - Alex T.</Paper>
          <Paper varient='elevation'>"Five stars for this brilliant budgeting app! Its simplicity and effectiveness makes using it FUN! From tracking expenses to setting goals, it's the financial companion everyone needs. A total game-changer!" -Olivia H.</Paper>
          <Paper varient='elevation'>"Basil changed my life! This app is a game-changer. It effortlessly guides you through budgeting, offers clear insights, and motivates financial growth. A must for stress-free money management!" -Emily C.</Paper>
        </Box>
      </Grid>
   </>
  );
};

export default Home;
