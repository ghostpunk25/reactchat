import { styled, Button } from '@mui/material';
import blockBtn from '../../img/common/blockBtn.svg';
import chatBtn from '../../img/common/chatBtn.svg';

export const PinkButtonSmall = styled(Button)`
background-color:  ${p => p.theme.palette.colors.button};
padding: 0px 12px 0px 30px;
font-weight: ${p => p.theme.typography.fontWeights.extraBold};
font-size: 13px;
line-height: 16px;
border-radius: 100px;
text-transform: none;
color:#fff;
height: 30px;
position: relative;
&:hover{
   background-color: #892a5f !important;
}
&:before{
   content: '';
   background: url(${chatBtn});
   width: 14px;
   height: 13px;
   position: absolute;
   top:8px;
   left:11px;
}
`
export const BorderButtonSmall = styled(Button)`
border: 2px solid  ${p => p.theme.palette.colors.button};
padding: 0px 10px 0px 26px;
${p => p.theme.typography.fontWeights.extraBold};
font-size: 13px;
line-height: 16px;
border-radius: 100px;
text-transform: none;
color: ${p => p.theme.palette.colors.button};
height: 30px;
&:hover{
   background-color: #892a5f !important;
}
&:before{
   content: '';
   background: url(${blockBtn});
   width: 11px;
   height: 11px;
   position: absolute;
   top:7px;
   left:8px;
}
`