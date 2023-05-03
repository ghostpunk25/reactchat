import { Box, Container, Avatar, Button, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { context } from 'context/context';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Modal } from 'components/Modal/Modal';
import { StyledBadgeOn, StyledBadgeOff, Border } from './Chat.style';
import chatBtnBig from 'img/common/chatBtnBig.svg';

export const Chat = () => {
   const theme = useTheme();
   const [modal, setModal] = useState(false);
   const navigate = useNavigate();
   const ctx = useContext(context);
   const { register, handleSubmit, resetField } = useForm();
   const onSubmit = data => {
      resetField("user")
      ctx.getChat({ ...ctx.profileChat, chat: [data] });
   };
   const [index, setIndex] = useState(null);

   const profileBlock = () => {
      ctx.blockProfilesList(ctx.profileChat.id);
      setModal(false);
      navigate('/catalog');
   }

   const handleClickOpen = () => {
      setModal(true);
   };

   const handleClose = close => {
      setModal(close);
   };


   useEffect(() => {
      let message

      if (ctx.profileChat) {
         const index = ctx.allChats.findIndex(item => item.id === ctx.profileChat.id)
         setIndex(index)

         if (ctx.profileChat.online === true && index === -1) {
            setIndex(null)
            message = setTimeout(() => {
               ctx.getChat({ ...ctx.profileChat, chat: [{ profile: 'Hi sweety! I’m boring...' }] })
            }, 2000);
         };
      };

      window.localStorage.setItem('allChats', JSON.stringify(ctx.allChats));
      window.localStorage.setItem('profileChat', JSON.stringify(ctx.profileChat));

      ctx.getChatFooter(true);

      return () => clearTimeout(message);
   }, [ctx.allChats]);

   return (
      <Border>
         <Container maxWidth="md"
            sx={{
               display: 'flex',
               flexDirection: 'column',
               flex: '1 1 auto',
               px: '18px',
            }}>
            <Box
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'space-between',
                  pb: '30px',
                  mb: '29px'
               }}>
               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '13px'
                  }}>
                  {ctx.profileChat.online
                     ? <StyledBadgeOn
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                     >
                        <Avatar alt="Remy Sharp" src={ctx.profileChat.img}
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
                        <Avatar alt="Remy Sharp" src={ctx.profileChat.img}
                           sx={{
                              width: '60px',
                              height: '60px'
                           }} />
                     </StyledBadgeOff>
                  }
                  <Box component='p'
                     sx={{
                        fontWeight: theme.typography.fontWeights.extraBold,
                        lineHeight: '22px',
                        letterSpacing: '0.5px'
                     }}>
                     {ctx.profileChat.name}
                  </Box>
               </Box>
               <Button onClick={handleClickOpen}
                  sx={{
                     textTransform: 'none',
                     color: theme.palette.colors.button,
                     fontWeight: theme.typography.fontWeights.extraBold,
                     lineHeight: '22px',
                     letterSpacing: '0.5px'
                  }}>
                  Block
               </Button>
            </Box>
            <Box sx={{ flex: '1 1 100%', }}>
               <Box
                  sx={{
                     maxHeight: '45vh',
                     display: 'flex',
                     flexDirection: 'column',
                     gap: '29px',
                     pb: '20px',
                     overflow: 'auto'
                  }}>
                  {ctx.allChats.length !== 0
                     ? ctx.allChats[index]?.chat.map(({ profile }) => profile && (
                        <Box key={`${Math.random()}_${profile}`}
                           sx={{
                              display: 'flex',
                              gap: '10px'
                           }}>
                           <Avatar alt="Remy Sharp" src={ctx.profileChat.img}
                              sx={{
                                 width: '42px',
                                 height: '42px'
                              }} />
                           <Box
                              sx={{
                                 background: '#F7BBDD',
                                 borderRadius: '0px 15px 15px 15px',
                                 p: '10px 18px',
                                 display: 'inline-flex',
                                 alignSelf: 'flex-start'
                              }}>
                              {profile}
                           </Box>
                        </Box>
                     ))
                     : null
                  }
                  {ctx.allChats.length !== 0
                     ? ctx.allChats[index]?.chat.map(({ user }) => user && (
                        <Box key={`${Math.random()}_${user}`}
                           sx={{
                              background: '#DEEACB',
                              borderRadius: '15px 0px 15px 15px',
                              p: '10px 18px',
                              display: 'inline-flex',
                              alignSelf: 'flex-end'
                           }}>
                           {user}
                        </Box>
                     ))
                     : null
                  }
               </Box>
            </Box>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}
               sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
                  py: '20px'
               }}>
               <Box component='input' placeholder='Enter your message' {...register("user", { required: true, })}
                  sx={{
                     width: '100%',
                     padding: '11.5px 18px',
                     background: 'none',
                     border: '2px solid #828282',
                     borderRadius: '100px',
                     fontSize: '18px',
                     lineHeight: '24px',
                  }} />
               <Button type="submit">
                  <img src={chatBtnBig} alt="chatBtnBig" />
               </Button>
            </Box>
         </Container>
         <Modal modalOpen={modal} handleClose={handleClose} profileBlock={profileBlock} />
      </Border >
   );
};