import { Dialog, Button, styled } from '@mui/material';

export const ModalScreen = styled(Dialog)(() => ({
   '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper, & .css-uhb5lp': {
      borderRadius: '20px',
      flex: '0 1 304px',
      padding: '14px 37px 41px',
   }
}));

export const PinkButton = styled(Button)`
background-color: ${p => p.theme.palette.colors.button};
padding: 14.5px 24px;
font-weight: ${p => p.theme.typography.fontWeights.extraBold};
font-size: 18px;
line-height: 24px;
border-radius: 100px;
text-transform: none;
color:#fff;
width: 100%;
&:hover{
   background-color: #892a5f !important;
}
`
export const BorderButton = styled(Button)`
border: 2px solid  ${p => p.theme.palette.colors.button};
padding: 12.5px 22px;
font-weight: ${p => p.theme.typography.fontWeights.extraBold};
font-size: 18px;
line-height: 24px;
border-radius: 100px;
text-transform: none;
color: ${p => p.theme.palette.colors.button};
width: 100%;
margin: 0px;
&:hover{
   background-color: #892a5f !important;
}
`

export const BtnClose = styled('span')`
   width: 18px;
   height: 18px;
   position: relative;
   &:before {
      content: '';
      width: 2px;
      height: 20px;
      background: #B2BBA3;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: rotate(-45deg);
   }
   &:after {
      content: '';
      width: 2px;
      height: 20px;
      background: #B2BBA3;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: rotate(45deg);
   }
`