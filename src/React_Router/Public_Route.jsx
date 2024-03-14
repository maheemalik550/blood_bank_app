import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {  Profile } from "../pages/Profile";

export const Public_Routes = () => {
  const user_auth_state = useSelector((state) => state.user_auth);
  return !user_auth_state.user_auth ? <Outlet /> :  <Profile/>;
};
