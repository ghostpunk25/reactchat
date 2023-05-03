import { CircularProgress, Box } from '@mui/material';

export const Spinner = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            alignItems: 'center',
         }}>
         <CircularProgress />
      </Box>
   );
}