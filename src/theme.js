import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      colors: {
         text: '#2D2F36',
         button: '#E5218F',
         white: '#fff',
      }
   },
   space: [0, 2, 4, 6, 8, 16, 32, 64, 128, 256],
   typography: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontStyle: 'normal',
      fontSize: 16,
      fontWeights: {
         normal: 400,
         extraBold: 800,
      },
      lineHeights: 1,
   },
   // borders: {
   //    none: 'none',
   //    normal: '1px solid',
   // },
   // radii: {
   //    none: '0',
   //    normal: '4px',
   //    cards: '34px',
   //    round: '100%',
   // },
});