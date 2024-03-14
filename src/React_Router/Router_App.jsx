import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Home } from "../pages/Home";
import { Layout } from "../component/Layout";
import { Public_Routes } from "./Public_Route";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

import { set_user_auth } from "../store/slice/user_auth_slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import {  Profile } from "../pages/Profile";
import { Private_Routes } from "./Private_Routes";
import { Donor } from "../pages/Donor";
import { Donors } from "../pages/Donors";
import { User } from "../pages/User";
// import { Logout } from "../pages/logout";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<Home/>} />

      <Route element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route element={<Private_Routes />}>
        <Route path="/Profile" element={<Profile />} />
        {/* <Route path="/Login" element={<Logout/>}/> */}
        <Route path="/Donor" element={<Donor/>} />
        <Route path="/Donor/Donors" element={<Donors/>} />
        <Route path="/user" element={<User/>} />
      </Route>
    </Route>
  )
)

export const Router_App = () => {
  const dispatch = useDispatch();
  const user_auth_state = useSelector((state) => state.user_auth);
  console.log(user_auth_state.user_auth)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const uid = user.uid;
        console.log(uid)
        dispatch(set_user_auth({ data: {}, auth: true }));
        console.log(!user_auth_state.user_auth)
        console.log("Public",!user_auth_state.user_auth)
        console.log(user_auth_state.user_auth &&
          user_auth_state.user_data.role === "seller")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(set_user_auth({ data: {}, auth: false }));
      }
    });
  }, []);

  return (
    <>
      {user_auth_state.auth_check_loading ? (
        <div className="h-[100dvh] grid place-items-center">
          <CircularProgress />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};
