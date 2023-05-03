import { styled } from "@mui/material";

export const BtnChat = styled('button')(() => ({
   background: 'none',
   border: 'none',
   cursor: 'pointer',
   transition: 'transform 0.3s ease',
   transform: 'translate(0px, -40px)',
   alignSelf: 'center',
   '&:hover': {
      transform: 'scale(1.1) translate(0px, -40px)',
   }
}));

export const Btn = styled('button')`
border: 2px solid  ${p => p.theme.palette.colors.button};
background: none;
padding: 12.5px 22px;
font-weight: ${p => p.theme.typography.fontWeights.extraBold};
font-size: 18px;
line-height: 24px;
border-radius: 100px;
text-transform: none;
color: ${p => p.theme.palette.colors.button};
width: 304px;
cursor: pointer;
margin: 0px auto;
transition: all 0.3s ease;
&:hover{
   background-color: #892a5f !important;
}
`