import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { database } from '../config/firebase';

export const Profile = () => {
  const [userData, setUserData] = useState({});

 

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Center the image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1f6EU_eK2cqwR_316AhdmPIKU6L9p2Sk78uqqC_1esg&s"
          alt=""
          style={{ margin: 'auto' }}
        />
       <Typography variant="h6">
     <strong>Name:</strong> {userData.first_name}
    </Typography>
    <Typography variant="h6">
      <strong>Last Name:</strong> {userData.last_name}
    </Typography>
    <Typography variant="h6">
      <strong>Email:</strong> {userData.email}
    </Typography>
    <Typography variant="h6">
      <strong>Blood Group:</strong> {userData.Blood_Group}
    </Typography>
    
      
      </Box>
    </Box>
  );
};
