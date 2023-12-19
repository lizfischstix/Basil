import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Container, Link, Box, Button, Dialog } from '@mui/material';
import IGBTN from '../../assets/Images/SocialIcons/Instagram-button.png';
import SPOTIFYBTN from '../../assets/Images/SocialIcons/Spotify-button.png';
import LNKDINBTN from '../../assets/Images/SocialIcons/Linkedin-button.png';
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
          flexDirection: 'column',
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
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
          <Container sx={{display:'flex',
            
          }}>
    <ImageButton imageSource={IGBTN} />
    <ImageButton imageSource={LNKDINBTN} />
    <ImageButton imageSource={SPOTIFYBTN} />
    </Container>
          </Box>
        </Box>
     
    </ThemeProvider>
  )
}
export default footer;