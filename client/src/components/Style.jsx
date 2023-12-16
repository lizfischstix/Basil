import { createTheme, ThemeProvider } from '@mui/material';
import { darkGreen, lightGreen } from '@mui/material/colors';
import Lobser2 from 'client/src/assets/Fonts/LobsterTwo-Bold.ttf'
const theme = createTheme({
    palette: {
        primary: darkGreen,
        secondary: lightGreen,
    }
    typography: {

    }
  },


});

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
