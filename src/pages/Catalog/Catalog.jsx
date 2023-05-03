import { Box, Button, Container } from '@mui/material';
import { Modal } from 'components/Modal/Modal';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getCatalogList } from 'sevices/fakeAPI';
import { context } from 'context/context';
import { PinkButtonSmall, BorderButtonSmall } from './Catalog.style';
import Grid from '@mui/material/Unstable_Grid2';

export const Catalog = () => {
   const [modal, setModal] = useState(false);
   const [profileId, setProfileId] = useState(null);
   const ctx = useContext(context);
   const navigate = useNavigate();

   useEffect(() => {
      ctx.getBackLink('/');
      if (ctx.profilesList.length !== 0) {
         return;
      };
      window.localStorage.setItem('user', JSON.stringify(ctx.user));
      getCatalogList().then(ctx.getProfilesList);
   }, []);

   const profileBlock = () => {
      ctx.blockProfilesList(profileId);
      setModal(false);
   };

   const handleClickOpen = id => {
      setModal(true);
      setProfileId(id);
   };

   const handleClose = close => {
      setModal(close);
   };

   const handleChatOpen = (profile) => {
      ctx.getProfileChat(profile);
      ctx.getBackLink('/chatslist');
      navigate('/chat');
   };

   const handleDetailsDataProfile = profile => {
      ctx.getProfileChat(profile);
   };

   return (
      <Box sx={{ pb: '24px' }}>
         <Container maxWidth="sm" sx={{ px: '18px', }}>
            <Grid container sx={{ rowGap: '30px', }}>
               {ctx.profilesList.map(({ id, img, gender, name, online }) => (
                  <Grid key={id} xs={6}
                     sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: '0px',
                     }}>
                     <Box>
                        <Button onClick={() => handleDetailsDataProfile({ img, id, name, online })}>
                           <Link to={`${id}`}>
                              <Box component='img'
                                 sx={{
                                    borderTopLeftRadius: '20px',
                                    borderTopRightRadius: '20px',
                                    maxWidth: '100%'
                                 }} src={img} alt={gender} />
                           </Link>
                        </Button>
                     </Box>
                     <Box
                        sx={{
                           display: 'flex',
                           gap: '10px',
                           width: '150px',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                           '@media (max-width: 350px)': {
                              flexWrap: 'wrap-reverse',
                              justifyContent: 'center',
                           },
                        }}>
                        <BorderButtonSmall onClick={() => handleClickOpen(id)}>Block</BorderButtonSmall>
                        <PinkButtonSmall onClick={() => handleChatOpen({ img, id, name, online })}>Chat</PinkButtonSmall>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </Container>
         <Modal modalOpen={modal} handleClose={handleClose} profileBlock={profileBlock} />
      </Box >
   );
};