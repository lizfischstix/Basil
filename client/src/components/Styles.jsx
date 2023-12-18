
import { createTheme } from '@mui/material/styles';
import '@fontsource/andika';
import '@fontsource/lobster-two';

const CostomTheme = createTheme({
    palette: {
        green: {
            main: '#3c5318',
            light: '#637546',
            dark: '#2a3a10',
        },
        pink: {
            main: '#f3d9d0',
            light: '#f5e0d9',
            dark: '#aa9791',
        },
        text: {
            main: '#212121',
            light: '#4d4d4d',
            dark: '#171717',
        },
        background: {
            default:'#f3d9d0',
        }
    },
    typography: {
        fontFamily: 'Andika, sans-serif',
        h1: {    
            fontFamily:'lobster-two, sans-serif',
            fontSize: '3rem',
            fontWeight: 800,
    },
        h2, h3: {
            fontFamily: 'lobster-two, sans-serif',
        }
}});


export default CustomTheme;
