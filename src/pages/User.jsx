import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'

export const User = (props) => {
  const set_data_handle = ()=>{
    props.click_handle(props)
}

  return (
    <div style={{boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)"
     ,borderRadius:"5px",padding:"15px"}}>
      <div onClick={set_data_handle} className='flex'>
      <div>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </div>
        <div 
        style={{ paddingLeft: '10px', paddingRight: "10px", width:"250px"}}>
          <h2>{props.name}<span className='ps-2'>{props.last_name}</span></h2>
          <p>Blood Group: {props.blood_Group}</p>
        </div>


        </div>
    </div>

  )
}
