import { styled, Badge } from '@mui/material';

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