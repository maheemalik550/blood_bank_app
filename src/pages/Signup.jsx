import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {  create_account, read_all_users, read_user_data, write_user_data } from "../config/firebase_Method";
import { set_user_auth } from "../store/slice/user_auth_slice";
import { Custom_Button } from "../component/Custom_Button";
import { Custom_Input_Field } from "../component/Custom_Input_Field";
import Swal from "sweetalert2";


export const Signup = () => {
  const state = useSelector((state=>state.user_auth))
  console.log(state.user_auth)
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    const { email, password } = data;
    create_account(email, password)
      .then((res) => {
        const user_id = res.user.uid;
        write_user_data(user_id, data).then((res) => {
          dispatch(set_user_auth({ data, auth: true }));
          read_user_data(user_id); 
          read_all_users()   
        });
      })
      .catch((error) => {
        Swal.fire(error.message);
        console.log(error);
      });
  };

  return (
    <div className="mt-11 flex flex-wrap justify-center bg-bg_color h-[100dvh]  place-items-center">
      <Box 
        component="form"
        onSubmit={submit_handle}
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Register
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            required={true}
            id="Blood_Group"
            label="Blood_Group"
            onChange={change_handle}
            placeholder="Enter your Blood_Group"
            type="text"
          />
           <Custom_Input_Field
            required={true}
            id="city"
            label="city"
            onChange={change_handle}
            placeholder="Enter your city"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="number"
            label="number"
            onChange={change_handle}
            placeholder="Enter Phone Number"
            type="number"
          />
          <Custom_Input_Field
            required={true}
            id="first_name"
            label="First Name"
            onChange={change_handle}
            placeholder="Enter First Name"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="last_name"
            label="Last Name"
            onChange={change_handle}
            placeholder="Enter Last Name"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="email"
            label="Email"
            onChange={change_handle}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            required={true}
            id="password"
            label="Password"
            onChange={change_handle}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Register</Custom_Button>

        <div className="text-center">
          Don't have account{" "}
          <Link to="/login" className="text-primary underline">
            Login Now
          </Link>
        </div>
      </Box>
      <Box  >
        <img height={"100%"} src="https://media.istockphoto.com/id/1335544846/photo/senior-human-hand-holding-red-paper-heart-shape-and-red-blood-drop-symbol-on-bandage-for.jpg?s=612x612&w=0&k=20&c=gVXGcm6WOvo-HNqMFztk6QdaQBUr3vDeU1mOfiDrLuI=" alt="" />
      </Box>
    </div>
  );
};
