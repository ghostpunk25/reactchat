import { Box, Container, Typography, useTheme } from '@mui/material';
import { useForm } from "react-hook-form";
import { PinkBtn } from 'components/PinkBtn/PinkBtn';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { context } from 'context/context';
import { CustInp, AirbnbSlider, OrigRadio, CustRadio, OrigCheck, CustCheck } from './CreateProfile.style';

export const CreateProfile = ({ getUser }) => {
   const [value, setValue] = useState([0, 0]);
   const navigate = useNavigate();
   const ctx = useContext(context);
   const theme = useTheme();

   function valueLabelFormat(value) {
      const units = ['m'];
      return `${value} ${units[0]}`;
   };

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         fullName: '',
         name: '',
         country: '',
         radio: 'Male',
         checkbox: [],
      }
   });
   const onSubmit = data => {
      ctx.getUser({ ...data, range: value })
      navigate("/catalog");
   };

   return (
      <Box component='section'
         sx={{
            pb: '21px'
         }}>
         <Container maxWidth="lg"
            sx={{
               px: '18px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}>
            <Typography component="h1"
               sx={{
                  fontWeight: theme.typography.fontWeights.extraBold,
                  fontSize: '28px',
                  lineHeight: '38px',
                  mb: '33px'
               }} >
               Create profile
            </Typography>
            <Box component='form' onSubmit={handleSubmit(onSubmit)} >
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     mb: '14px'
                  }}>
                  <Box component='label'
                     sx={{
                        fontWeight: '800',
                        lineHeight: '133.9%',
                        mb: '5px'
                     }} htmlFor="c_1">
                     Full name
                  </Box>
                  {errors.fullName
                     ? <CustInp placeholder='Full Name'
                        style={{
                           border: '2px solid red'
                        }}
                        id='c_1' name='fullName' {...register("fullName", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                     : <CustInp placeholder='Full Name' id='c_1' name='fullName'
                        {...register("fullName", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                  }
               </Box>
               {errors.fullName
                  && <Box
                     sx={{
                        color: 'red'
                     }}>
                     This field is required, must be filled in Latin
                  </Box>
               }
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     mb: '14px'
                  }}>
                  <Box component='label'
                     sx={{
                        fontWeight: '800',
                        lineHeight: '133.9%',
                        mb: '5px'
                     }} htmlFor="c_2">
                     Your name
                  </Box>
                  {errors.name
                     ? <CustInp placeholder='Name'
                        style={{ border: '2px solid red' }}
                        id='c_2' name='name' {...register("name", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                     : <CustInp placeholder='Name' id='c_2' name='name'
                        {...register("name", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                  }
               </Box>
               {errors.name
                  && <Box
                     sx={{
                        color: 'red'
                     }}>
                     This field is required, must be filled in Latin
                  </Box>
               }
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     mb: '14px'
                  }}>
                  <Box component='label'
                     sx={{
                        fontWeight: '800',
                        lineHeight: '133.9%',
                        mb: '5px'
                     }} htmlFor="c_2">
                     Your country
                  </Box>
                  {errors.country
                     ? <CustInp placeholder='Country'
                        style={{ border: '2px solid red' }} id='c_3' name='country'
                        {...register("country", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                     : <CustInp placeholder='Country' id='c_3' name='country'
                        {...register("country", { required: true, pattern: /^[A-Za-z]+( [A-Za-z]+)*$/i })} />
                  }
               </Box>
               {errors.country
                  && <Box
                     sx={{
                        color: 'red'
                     }}>
                     This field is required, must be filled in Latin
                  </Box>
               }
               <Box
                  sx={{
                     mb: '14px'
                  }}>
                  <Box component='p'
                     sx={{
                        fontWeight: '800',
                        lineHeight: '133.9%',
                        m: 0,
                        mb: '5px'
                     }}>
                     Your gender
                  </Box>
                  <Box
                     sx={{
                        padding: '3px',
                        display: 'flex',
                        border: '2px solid #828282',
                        borderRadius: '30px',
                        alignItems: 'center',
                        width: '304px'
                     }}>
                     <Box >
                        <label htmlFor="c_4">
                           <OrigRadio id='c_4' {...register("radio")} type="radio" value="Male" />
                           <CustRadio>Male</CustRadio>
                        </label>
                     </Box>
                     <Box>
                        <label htmlFor="c_5">
                           <OrigRadio id='c_5' {...register("radio")} type="radio" value="Female" />
                           <CustRadio>Female</CustRadio>
                        </label>
                     </Box>
                  </Box>
               </Box>
               <Box sx={{ mb: '38px' }}>
                  <Box component='p'
                     sx={{
                        fontWeight: theme.typography.fontWeights.extraBold,
                        lineHeight: '133.9%',
                        m: 0,
                        mb: '5px'
                     }}>
                     Your hobbies
                  </Box>
                  <Box
                     sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '304px',
                        gap: '10px'
                     }}>
                     <Box>
                        <label htmlFor="c_6">
                           <OrigCheck id='c_6' {...register("checkbox")} type="checkbox" value="Music" />
                           <CustCheck>Music</CustCheck>
                        </label>
                     </Box>
                     <Box>
                        <label htmlFor="c_7">
                           <OrigCheck id='c_7' {...register("checkbox")} type="checkbox" value="Sports" />
                           <CustCheck>Sports</CustCheck>
                        </label>
                     </Box>
                     <Box>
                        <label htmlFor="c_8">
                           <OrigCheck id='c_8' {...register("checkbox")} type="checkbox" value="Travel" />
                           <CustCheck>Travel</CustCheck>
                        </label>
                     </Box>
                     <Box>
                        <label htmlFor="c_9">
                           <OrigCheck id='c_9' {...register("checkbox")} type="checkbox" value="Movies" />
                           <CustCheck>Movies</CustCheck>
                        </label>
                     </Box>
                  </Box>
               </Box>
               <Box>
                  <Typography component="h1"
                     sx={{
                        fontWeight: '800',
                        fontSize: '28px',
                        lineHeight: '38px',
                        textAlign: 'center',
                        mb: '20px'
                     }} >
                     Search distance
                  </Typography>
                  <Box
                     sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '13px',
                        lineHeight: '18px'
                     }}>
                     <span>0 m</span>
                     <span>1000 m</span>
                  </Box>
                  <Box
                     sx={{
                        maxWidth: '298px',
                        mx: 'auto'
                     }}>
                     <AirbnbSlider
                        value={value}
                        valueLabelDisplay="auto"
                        valueLabelFormat={valueLabelFormat}
                        max={1000}
                        name='range'
                        onChange={handleChange}
                     />
                  </Box>
               </Box>
               <PinkBtn text={'Create profile'} type="submit" width='304px' />
            </Box>
         </Container>
      </Box>
   );
};