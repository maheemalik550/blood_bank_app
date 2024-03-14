import { Button, Grid } from "@mui/material";
import React from "react";
import { Component2 } from "../component/Component2";
import { Component3 } from "../component/Component3";
import { Button1 } from "../component/Button1";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const Navigate = useNavigate()
  return <>
  <div style={{paddingTop:"70px"}} className="h-[100dvh] grid place-items-center justify-around ">
    <Grid container className="h-[100dvh] grid place-items-center justify-around ">
      <Grid sx={{marginLeft:"20px"}} items xl={6}>
      <h1 style={{fontSize:"2rem", maxWidth: '100%', height: 'auto', objectFit: 'contain'}}>Find blood donors in your area</h1>
       <p  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}>blood donors near your location. Our smart system  will find blood donors
       <br /> closer to you and will 
       <br /> connect you in a matter of minutes at zero cost.</p>
    <Button1 
    onClick={()=>Navigate('/signup')}
     text='Become a Doner'/>
      </Grid>
      <Grid items xl={6}>
      <img src="https://i.pinimg.com/564x/5c/6f/03/5c6f039477981324d84cc338f93f832d.jpg" style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} alt="" />
      </Grid>
    </Grid>
    <Component2/>
    <Component3/>
  </div>
  </>;
};
