import React, { useEffect, useState } from 'react'
import { User } from './User';
import { User_Detail } from './User_Detail';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';

export const Donors = () => {
  const [storedData, setStoredData] = useState([]);
  const [current_data,setcurrent_data]= useState(null)
  useEffect(() => {
    const storedData = localStorage.getItem('keyName');
    if (storedData) {
      setStoredData(JSON.parse(storedData));
    }
  }, []);
  console.log(storedData)
  
  const show_detail_handle = (data)=>{
    console.log('data',data)
    setcurrent_data(data)

  }

  return (
    <Container style={{marginTop:"80px"}} >
      {current_data ? (
        <User_Detail name={current_data.name}
        last_name={current_data.last_name}
        Blood_Group={current_data.blood_Group}
        email={current_data.email}
        city={current_data.city}
        Phone_Number={current_data.number}/>
    
      ):(
   <div className='mt-6 flex-wrap '>
       {
        storedData.map((res,index)=>{
          return <User key={index}
          click_handle={show_detail_handle} name={res.userData.first_name}
          last_name={res.userData.last_name}
          city={res.userData.city}
          blood_Group={res.userData.Blood_Group}
          number={res.userData.number}
           email={res.userData.email}/>
        })
       }
      </div>
      )

      }
     </Container>
  )
}
