import { Grid } from '@mui/material'
import React from 'react'

export const Component3 = () => {
  return (
    <Grid container className="h-[100vh] grid place-items-center justify-around">
      <Grid item xl={6} sx={{ marginLeft: "20px",paddingRight:"20px" }}>
        <h1 style={{ fontSize: "2rem", maxWidth: '100%' }}>The delivered  blood  process  </h1>
        <p style={{ maxWidth: '100%' }}>meeting international quality standards
         throughout  blood collection, screening, 
        <br /> storage, cross-matching   using the technologically 
        <br /> advanced equipment..</p>
      </Grid>
      <Grid item xl={6}>
        <img src="https://www.sbmf.org/wp-content/uploads/2023/08/20230802_SBM_WhoCanDonateBlood-1080x600.jpg" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} alt="" />
      </Grid>
    </Grid>
  )
}
