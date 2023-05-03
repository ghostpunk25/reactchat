import { Button, DialogContent, DialogContentText, DialogTitle, Box, useTheme } from '@mui/material';
import { ModalScreen, PinkButton, BorderButton, BtnClose } from './Modal.style';

export const Modal = ({ modalOpen, handleClose, profileBlock }) => {
   const theme = useTheme();

   return (
      <div>
         <ModalScreen
            open={modalOpen}
            onClose={() => handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <Button onClick={() => handleClose(false)}
               sx={{
                  mb: '16px',
                  p: '0px',
                  justifyContent: 'flex-end',
                  alignSelf: 'flex-end',
                  minWidth: '18px',
                  transform: 'translate(20px, 0px)'
               }}>
               <BtnClose></BtnClose>
            </Button>
            <DialogTitle id="alert-dialog-title"
               sx={{
                  mb: '14px',
                  fontWeight: theme.typography.fontWeights.extraBold,
                  fontSize: '18px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  p: '0px',
               }}>
               Are you sure you want to block this user?
            </DialogTitle>
            <DialogContent
               sx={{
                  mb: '14px',
                  p: '0px',
               }}>
               <DialogContentText id="alert-dialog-description"
                  sx={{
                     lineHeight: '24px',
                     color: '#000',
                     textAlign: 'center',
                  }}>
                  This user will be added to   your blocklist
               </DialogContentText>
            </DialogContent>
            <Box
               sx={{
                  display: 'flex',
                  gap: '18px',
                  flexDirection: 'column',
                  width: '100%',
                  mx: 'auto',
               }}>
               <PinkButton onClick={profileBlock}>Block</PinkButton>
               <BorderButton onClick={() => handleClose(false)} >Cancel</BorderButton>
            </Box>
         </ModalScreen>
      </div >
   );
};