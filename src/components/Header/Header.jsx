import { Box, Container, MenuItem, Menu, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { context } from 'context/context';
import back from 'img/Header/back.svg';
import logo from 'img/common/LOGO.svg';
import userIcon from 'img/Header/user.svg';

export const Header = ({ user, backLink }) => {
   const ctx = useContext(context);
   const [anchorEl, setAnchorEl] = useState(null);
   const navigate = useNavigate();


   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const delUser = () => {
      ctx.deleteUser();
      navigate('/');
   };

   return (
      <Box component='header'
         sx={{
            background: ' #474A54',
            py: '17px',
            mb: '41px'
         }}>
         <Container maxWidth='lg'
            sx={{
               px: '18px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between'
            }}>
            <Link to={backLink}><img src={back} alt="back" /></Link>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            {user
               ? <div>
                  <Button
                     id="basic-button"
                     aria-controls={open ? 'basic-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                     sx={{
                        p: '0px',
                     }}
                  >
                     <img src={userIcon} alt="user" />
                  </Button>
                  <Menu
                     id="basic-menu"
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                  >
                     <MenuItem>{ctx.user.name}</MenuItem>
                     <MenuItem onClick={delUser}>Delete</MenuItem>
                  </Menu>
               </div>
               : <Button disabled variant="text" sx={{ p: '0px', opacity: '0' }}>
                  <img src={userIcon} alt="user" />
               </Button>
            }
         </Container>
      </Box>
   );
};