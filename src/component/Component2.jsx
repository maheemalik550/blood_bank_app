import { Box, Grid } from '@mui/material'
import React from 'react'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { useNavigate } from 'react-router-dom';
const Component2 = () => {
 
  return (
   <Grid container className='grid place-items-center justify-around'>
    <Grid items xl={4} >
     <Box  sx={{padding:"80px",backgroundColor:"red",margin:"10px",maxWidth: '100%', height: 'auto', objectFit: 'contain'
     ,borderRadius:"20px",textAlign:"center",color:"white"}}>
        <VolunteerActivismIcon sx={{color:"white"}}/>
        <h2>Save lives by <br /> donatng blood</h2>
     </Box>
      </Grid>
      <Grid items xl={4}>
      <Box sx={{padding:"80px",backgroundColor:"red",margin:"10px",maxWidth: '100%', height: 'auto', objectFit: 'contain'
      ,borderRadius:"20px",textAlign:"center",color:"white"}}>
        <FavoriteIcon sx={{color:"white"}}/>
        <h2>Support Your<br />Compunity help</h2>
     </Box>
      </Grid>
      <Grid items xl={4}>
      <Box sx={{padding:"80px",backgroundColor:"red",margin:"10px",
      maxWidth: '100%', height: 'auto', objectFit: 'contain',borderRadius:"20px",textAlign:"center",color:"white"}}>
        <Diversity1Icon sx={{color:"white"}}/>
        <h2>Receive Personal  <br /> health benifits</h2>
     </Box>
      </Grid>
   </Grid>
  )
}

export  {Component2}