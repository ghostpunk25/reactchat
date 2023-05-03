import { styled, Slider } from '@mui/material';
import { theme } from '../../theme';

export const CustInp = styled('input')`
border: 2px solid #828282;
border-radius: 100px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
background: none;
padding: 11.5px 19px;
&::placeholder{
   color: ${p => p.theme.palette.colors.text};
}
`
export const AirbnbSlider = styled(Slider)(() => ({
   color: '#828282',
   height: 3,
   padding: '15px 0px 0px !important',
   marginBottom: '79px',
   '& .MuiSlider-thumb': {
      height: 20,
      width: 20,
      backgroundColor: theme.palette.colors.button,
      '& .airbnb-bar': {
         height: 9,
         width: 1,
         marginLeft: 0,
         marginRight: 0,
      },
   },
   '& .MuiSlider-track': {
      height: 3,
   },
   '& .css-1binxvx-MuiSlider-valueLabel, & .css-1m3ixlw': {
      background: 'none',
      color: theme.palette.colors.text,
   },
}));


export const OrigRadio = styled('input')`
width: 0px;
height: 0px;
opacity: 0;
position: absolute;
z-index: -1;
&:checked + span::before{
      transition: opacity 0.5s ease;
      opacity: 1;
   }
`
export const CustRadio = styled('span')`
border-radius: 25px;
padding: 10.5px 54px;
position: relative;
overflow: hidden;
display: inline-flex;
cursor: pointer;
&:before{
   content: '';
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #BEC7AF;
   z-index: -1;
   transition: opacity 0.5s ease;
}
`

export const OrigCheck = styled('input')`
width: 0px;
height: 0px;
opacity: 0;
position: absolute;
z-index: -1;
&:checked + span::before {
   transition: opacity 0.5s ease;
   opacity: 1;
 }
`
export const CustCheck = styled('span')`
border: 2px solid #828282;
  border-radius: 20px;
  padding: 8px 20px;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  cursor: pointer;
  &::before {
   content: '';
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: #BEC7AF;
   z-index: -1;
   transition: opacity 0.5s ease;
 }
`

