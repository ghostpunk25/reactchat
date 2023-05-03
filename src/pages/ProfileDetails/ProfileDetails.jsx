import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileById } from "sevices/fakeAPI";
import { Box, Container } from '@mui/material';
import { Modal } from 'components/Modal/Modal'
import { context } from "context/context";
import { useNavigate } from 'react-router-dom';
import { BtnChat, Btn } from "./ProfileDetails.style";
import chatBtn from 'img/ProfileDetails/chatBigBtn.svg';
import prevBtn from 'img/ProfileDetails/prevBtn.svg';
import nextBtn from 'img/ProfileDetails/nextBtn.svg';

export const ProfileDetails = () => {
   const { profileId } = useParams();
   const [profile, setProfile] = useState({});
   const [modal, setModal] = useState(false);
   const ctx = useContext(context);
   const navigate = useNavigate();

   useEffect(() => {
      ctx.getBackLink('/catalog');
      getProfileById(+profileId).then(setProfile);
      window.localStorage.setItem('profileChat', JSON.stringify(ctx.profileChat));

      return () => window.localStorage.removeItem('profileChat');

   }, [profileId]);

   const profileBlock = () => {
      ctx.blockProfilesList(+profileId);
      setModal(false);
      navigate('/catalog');
   }

   const handleClickOpen = () => {
      setModal(true);
   };

   const handleClose = close => {
      setModal(close);
   };

   const handleChatOpen = () => {
      ctx.getProfileChat(profile);
      ctx.getBackLink('/chatslist');
      navigate('/chat');
   };

   return (
      <Box sx={{ pb: '77px' }}>
         <Container maxWidth='mg'
            sx={{
               px: '18px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               overflow: 'hidden'
            }}>
            <Box
               sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '304px',
               }}>
               <Box component='button'
                  sx={{
                     background: 'none',
                     border: 'none',
                     cursor: 'pointer',
                     position: 'absolute',
                     top: '50%',
                     left: '-40px',
                     p: '0',
                     '& :hover': {
                        transform: 'scale(0.98)',
                        transition: 'transform 0.3s ease',
                     },
                  }}>
                  <img src={prevBtn} alt="prevBtn" />
               </Box>
               <Box component='button'
                  sx={{
                     background: 'none',
                     border: 'none',
                     cursor: 'pointer',
                     position: 'absolute',
                     top: '50%',
                     right: '-40px',
                     p: '0',
                     '& :hover': {
                        transform: 'scale(0.98)',
                        transition: 'transform 0.3s ease',
                     },
                  }}>
                  <img src={nextBtn} alt="nextBtn" />
               </Box>
               <Box component='img' src={profile?.img} alt={profile?.gender}
                  sx={{
                     maxWidth: '100%',
                     borderRadius: '40px'
                  }} />
            </Box>
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px',
                  width: '100%',
               }}>
               <BtnChat onClick={handleChatOpen}><img src={chatBtn} alt="chatBtn" /></BtnChat>
               <Btn onClick={handleClickOpen}>Block the user</Btn>
            </Box>
         </Container>
         <Modal modalOpen={modal} handleClose={handleClose} profileBlock={profileBlock} />
      </Box>
   );
};