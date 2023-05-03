import { Box, Container, Typography, useTheme } from '@mui/material';
import { PinkBtn } from 'components/PinkBtn/PinkBtn';
import { Link } from 'react-router-dom';
import girls from 'img/Main/girls.png';
import logo from 'img/common/LOGO.svg';

export const Main = ({ user }) => {
   const theme = useTheme();

   return (
      <Box component='section'
         sx={{
            padding: '75px 0px 55px'
         }}>
         <Container maxWidth="lg"
            sx={{
               px: '18px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
            <Box sx={{ mb: '75px' }}>
               <Box component='img' src={girls} alt="girls"
                  sx={{
                     maxWidth: '100%'
                  }} />
            </Box>
            <Box component='h1'
               sx={{
                  mb: '51px',
                  mt: '0px'
               }}>
               <Box component='img' src={logo} alt="logo" />
            </Box>
            <Typography
               sx={{
                  mb: '51px',
                  fontWeight: theme.typography.fontWeights.extraBold,
                  fontSize: '18px',
                  lineHeight: '25px',
                  textAlign: 'center'
               }}>
               Find a suitable person for chatting,  real meetups and relationship
            </Typography>
            <Link to={user ? '/catalog' : '/create'}>
               <PinkBtn width={'304px'} text={'Get Started'} />
            </Link>
         </Container>
      </Box >
   );
};