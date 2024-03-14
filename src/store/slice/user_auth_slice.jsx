import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  auth_check_loading: true,
  user_auth: false,
  user_data: {
    role: "seller",
  },
  set_all_users:[],
  show_user:[],
};

const user_auth_slice = createSlice({
  name: "user-auth",
  initialState: initial_state,
  reducers: {
    set_user_auth: (state, actions) => {
      const { payload } = actions;
      state.user_auth = payload.auth;
      //   state.user_data = payload.data;
      state.auth_check_loading = false;
    },
    set_users:(state,actions)=>{
      state.set_all_users = actions.payload
    },
    set_Show_user:(state,actions)=>{
      state.show_user = actions.payload
    },
  },
});

export const { set_user_auth,set_users,set_Show_user } = user_auth_slice.actions;
export default user_auth_slice.reducer;

