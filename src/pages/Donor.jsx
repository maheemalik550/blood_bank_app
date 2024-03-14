import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../config/firebase_Method';
import Autocomplete from '@mui/material/Autocomplete';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Alert, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { set_Show_user } from '../store/slice/user_auth_slice';
import Swal from 'sweetalert2';
import { CloseFullscreen } from '@mui/icons-material';

const options1 = ['karachi', 'lahore', 'islamabad'];
const options2 = ['A','A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

export const Donor = () => {
  const State = useSelector((state) => state.user_auth.set_all_users);
  console.log("state",State)
  const navigate = useNavigate();
  const [localState,setLocalState] = useState([])
  const [value, setValue] = useState(options1[0]);
  const [inputValue, setInputValue] = useState('');
  const [value2, setValue2] = useState(options2[0]);
  const [inputValue2, setInputValue2] = useState('');
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    setLocalState(State);
    
  }, [State]);

 

  const handleSearch = () => {
  // navigate("/Donor/Donors");
  const check_fun = localState.filter((elem)=>{
  return  elem.userData.Blood_Group === value2 && elem.userData.city === value
  })
  console.log("final",check_fun)
  if (check_fun.length > 0) {
    navigate("/Donor/Donors");
  }else{
    //  <Alert severity="error">This is an error Alert.</Alert>
    Swal.fire({
      icon: 'error',
      title: 'no donors were found matching your criteria',
      text: 'Please try again.',
    });
    console.log("no user Found")
  }

  dispatch(set_Show_user(check_fun))
  localStorage.setItem('keyName', JSON.stringify(check_fun));
  };
  console.log(localState) 
  
  

  return (
    <div className='h-[100dvh] mt-11 grid place-items-center'>
      <Box className='space-y-6' sx={{
        textAlign: "center",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="city-autocomplete"
            options={options1}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select city" />}
          />
        </div>
        <div  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}>
          <Autocomplete
            value={value2}
            onChange={(event, newValue) => {
              setValue2(newValue);
            }}
            inputValue={inputValue2}
            onInputChange={(event, newInputValue) => {
              setInputValue2(newInputValue);
            }}
            id="blood-group-autocomplete"
            options={options2}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Select Blood Group" />}
          />
        </div>
        <Button onClick={handleSearch}
         variant="contained" sx={{ backgroundColor: "darkgreen" }}>
          <PersonSearchIcon />
          Find
        </Button>
      </Box>
    </div>
  );
};
