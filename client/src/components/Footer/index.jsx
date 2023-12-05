import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

function Copyright() {
  return (
   
    <Typography variant="body2" color="text.secondary" justifyContent="center">
      {'Copyright © '}
      <Link color="inherit" href="https://basil-budget-e685e272efd5.herokuapp.com/">
        Basil 🌿 
       </Link>{}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
   
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box justifyContent='center'
        sx={{
          display: 'flex',
          flexDirection: 'fluid',
        }}
      >
        <CssBaseline />
        
          
        
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}