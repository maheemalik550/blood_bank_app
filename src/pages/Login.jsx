import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Custom_Input_Field } from "../component/Custom_Input_Field";
import { Custom_Button } from "../component/Custom_Button";
import { login_account, read_user_data, write_user_data } from "../config/firebase_Method";
import { set_user_auth } from "../store/slice/user_auth_slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export const Login = () => {
  const [data, setData] = useState({});

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  console.log(data);
  const {email,password} = data
  console.log("email",email,"password",password)

  const submit_handle = (e) => {
    e.preventDefault()
    const {email,password} = data
   console.log("email",email,"password",password)
    login_account(email,password)
    .then((res) => {
      const user_id = res.user.uid;
      console.log(user_id)
      write_user_data(user_id, data).then((res) => {
        useDispatch(set_user_auth({ data, auth: true }));
        read_user_data(user_id);
        
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "invalid crediential",
      });
      console.log(error);
    });
  };

  return (
    <div className="bg-bg_color mt-11 h-[100dvh] grid place-items-center">
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
          Login
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            label="Email"
            required={true}
            id="email"
            onChange={change_handle}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            label="Password"
            required={true}
            id="password"
            onChange={change_handle}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Login</Custom_Button>
        <div className="text-center">
          <Link to="/signup" className="text-primary underline">
            Register now
          </Link>
        </div>
      </Box>
    </div>
  );
};
