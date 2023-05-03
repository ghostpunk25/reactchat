import { styled, Button } from '@mui/material';

export const ColorButton = styled(Button)`
background-color:  ${p => p.theme.palette.colors.button};
padding: 14px 39px;
font-weight: ${p => p.theme.typography.fontWeights.extraBold};
font-size: 18px;
line-height: 24px;
border-radius: 100px;
text-transform: none;
&:hover{
   background-color: #892a5f !important;
}
`