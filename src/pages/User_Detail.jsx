import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const User_Detail = (props) => {

  const navigate = useNavigate()
  const Back_func = ()=>{
    navigate('/Donor')
  }
  return (
    <Container style={{fontSize:"20px"}}>
        <Grid Container className='flex justify-center'>
            <Grid item xl={12} sx={{textAlign:"center"}}>
            <img  style={{height:"100px",height:"100px", display: "block", margin: "auto"}} src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
            <h1><span className='font-bold'>Full Name:</span> {props.name}<span className='ps-2'>{props.last_name}</span></h1> 
             <h1><span className='font-bold'>Blood Group:</span>{props.Blood_Group}</h1>
             <h1><span className='font-bold'>Email:</span>{props.email}</h1>  
             <h1><span className='font-bold'>City:</span>{props.city}</h1>  
             <h1><span className='font-bold'>Phone Number:</span>{props.Phone_Number}</h1>
             <Button onClick={Back_func} sx={{color:"white",backgroundColor:"red",
             '&:hover': {
              backgroundColor: "black", // Change to your desired hover color
            },}}>Back</Button>       
            </Grid>
        </Grid>
    </Container>
  )
}
