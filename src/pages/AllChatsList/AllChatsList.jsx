import { Box, Container, Avatar, Button, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { context } from 'context/context';
import { useNavigate } from "react-router-dom";
import { StyledBadgeOn, StyledBadgeOff } from './AllChatsList.style';

export const AllChatsList = () => {
   const ctx = useContext(context);
   const navigate = useNavigate();

   const handleChatOpen = (profile) => {
      ctx.getProfileChat(profile);
      ctx.getBackLink('/chatslist');
      navigate('/chat');
   }

   useEffect(() => {
      ctx.getBackLink('/catalog');
   }, []);

   return (
      <>
         {ctx.allChats.length !== 0
            ? <Box>
               {ctx.allChats.map(({ img, chat, id, online, name }) => (
                  <Button key={id} onClick={() => handleChatOpen({ img, id, online, name })}
                     sx={{
                        textTransform: 'none',
                        width: '100%',
                        textAlign: 'left',
                        py: '9px',
                        borderBottom: '1px solid #BEC7AF',
                        color: '#000'
                     }}>
                     <Container  >
                        <Box
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px'
                           }}>
                           {online
                              ? <StyledBadgeOn
                                 overlap="circular"
                                 anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                 variant="dot"
                              >
                                 <Avatar alt="Remy Sharp" src={img}
                                    sx={{
                                       width: '60px',
                                       height: '60px'
                                    }} />
                              </StyledBadgeOn>
                              : <StyledBadgeOff
                                 overlap="circular"
                                 anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                 variant="dot"
                              >
                                 <Avatar alt="Remy Sharp" src={img}
                                    sx={{
                                       width: '60px',
                                       height: '60px'
                                    }} />
                              </StyledBadgeOff>}
                           <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              <Box sx={{ m: '0px', fontWeight: '800', }} component='p'>{name}</Box>
                              <Box sx={{ m: '0px', }} component='p'>{Object.values(chat[0])}</Box>
                           </Box>
                        </Box>
                     </Container>
                  </Button>
               ))
               }
            </Box >
            : <Typography variant='h4'
               sx={{
                  textAlign: 'center',
                  pt: '50px',
                  opacity: '0.8'
               }}>
               Chat list is empty
            </Typography>
         }
      </>
   );
};