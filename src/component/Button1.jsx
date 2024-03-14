import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from "@mui/material";

export const Button1 = (props) => {
  return ( 
    <Button onClick={props.onClick} 
    style={{ backgroundColor: 'red',marginTop:"10px"}}
    variant="contained"><PersonAddIcon/>{props.text}</Button>
  )
}
