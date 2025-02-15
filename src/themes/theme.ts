import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { blue, grey, purple } from '@mui/material/colors';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[500],
          contrastText: 'white',
          contrastTextChannel: grey[800],
        },
        secondary: {
          main: purple[500],
          contrastText: 'white',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: grey[800],
        },
        secondary: {
          main: blue[500],
          contrastText: 'white',
        },
      },
    },
  },
});
