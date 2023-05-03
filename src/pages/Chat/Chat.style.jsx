import { Badge, Box, styled } from '@mui/material';

export const StyledBadgeOn = styled(Badge)(() => ({
   '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
   },
}));

export const StyledBadgeOff = styled(Badge)(() => ({
   '& .MuiBadge-badge': {
      backgroundColor: 'red',
   },
}));

export const Border = styled(Box)`
display: flex;
flex-direction: column;
position: relative;
height: 100%;
&:before{
   content: '';
   position: absolute;
   top: 90px;
   left: 0px;
   width: 100%;
   height: 2px;
   background: #BEC7AF;
}
&:after{
   content: '';
   position: absolute;
   bottom: 100px;
   left: 0px;
   width: 100%;
   height: 2px;
   background: #BEC7AF;
}
`