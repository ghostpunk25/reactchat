import { ColorButton } from "./PinkBtn.style";

export const PinkBtn = ({ width, type = 'button', text }) => {
   return (
      <>
         <ColorButton variant="contained" type={type}
            sx={{
               width: width
            }}>
            {text}
         </ColorButton>
      </>
   );
};