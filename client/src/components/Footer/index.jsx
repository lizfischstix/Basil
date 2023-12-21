import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Container, Link, Box, Button, Dialog } from '@mui/material';
import IGBTN from '../../assets/Images/SocialIcons/Instagram-button.png';
import SPOTIFYBTN from '../../assets/Images/SocialIcons/Spotify-button.png';
import LNKDINBTN from '../../assets/Images/SocialIcons/LinkedIn-button.png';
import ImageButton from '../ImgBtn/index';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" justifyContent="center">
      {'Copyright © '}
      <Link color="inherit" href="https://basil-budget-e685e272efd5.herokuapp.com/">
        Basil 🌿
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();


const footer = function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column', // Set flexDirection to 'column'
          alignItems: 'center', // Center the content vertically
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content horizontally
            // position: 'fixed',  // Fixed position at the bottom
            bottom: 0,          // Stick to the bottom
            width: '100%',      // Full width
          }}
        >
          <Container maxWidth="sm">
            {/* Stack Copyright component on top */}
            <div style={{ marginBottom: '10px', textAlign: 'center' }}>
              <Copyright />
            </div>
            <Container sx={{
              display: 'flex',
              justifyContent: 'center', // Center the content horizontally
            }}>
              <ImageButton imageSource={IGBTN} />
              <ImageButton imageSource={LNKDINBTN} />
              <ImageButton imageSource={SPOTIFYBTN} />
            </Container>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default footer;