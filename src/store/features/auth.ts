import { createSlice } from "@reduxjs/toolkit";

export interface auth {
  userName: string | null;
  password: string | null;
  userIn: boolean;
}

const userInfo = localStorage.getItem("user");

let userAuth;
try {
  userAuth = userInfo && JSON.parse(userInfo);
} catch (err) {}
const initialState: auth = { userName: null, password: null, userIn: false };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
      state.userIn = true;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.userName = null;
      state.password = null;
      state.userIn = false;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export default authSlice.reducer;
