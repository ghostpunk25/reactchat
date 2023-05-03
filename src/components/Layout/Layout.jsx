import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Box } from '@mui/material';

export const Layout = ({ children, user, backLink, visible }) => {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh'
         }}>
         <Header user={user} backLink={backLink} />
         <Box sx={{ flex: '1 1 auto' }}>
            {children}
         </Box>
         <Footer visible={visible} />
      </Box>
   );
};