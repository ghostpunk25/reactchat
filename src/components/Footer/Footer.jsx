import { Box, Container } from '@mui/material';
import { FooterLink } from './Footer.style';

export const Footer = ({ visible }) => {
   return (
      <>
         {!visible
            ? <Box component='footer'>
               <Container maxWidth='lg'
                  sx={{
                     display: 'flex',
                     py: '10px',
                     justifyContent: 'center',
                     gap: '10px',
                     flexWrap: 'wrap'
                  }}>
                  <FooterLink>Privacy Policy</FooterLink>
                  <FooterLink>Terms & Conditions</FooterLink>
                  <FooterLink>Contact Us</FooterLink>
               </Container>
            </Box>
            : null
         }
      </>
   );
};