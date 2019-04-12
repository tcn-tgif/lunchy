import { createMuiTheme } from '@material-ui/core/styles';

// Override MUI Theme variables globally here.
// See: https://material-ui.com/customization/themes/
const theme = createMuiTheme({
  // Example: Change the root font size for entire app to 10px. REM values are now calculated from 10px.
  // typography: {
  //   fontSize: 13,
  // },
  palette: {
    primary: {
      light: '#6781a7',
      main: '#395578',
      dark: '#062d4c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff9a59',
      main: '#cd6b2c',
      dark: '#963e00',
      contrastText: '#fff',
    },
  },
});

export default theme;
