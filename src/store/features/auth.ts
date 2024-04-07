import { createSlice } from "@reduxjs/toolkit";

export interface auth {
  userName: string;
  password: string;
  userIn: boolean;
}

const userInfo = localStorage.getItem("user");

let userAuth;
try {
  userAuth = userInfo && JSON.parse(userInfo);
} catch (err) {}
const initialState: auth = { userName: "", password: "", userIn: false };

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
      state.userName = "";
      state.password = "";
      state.userIn = false;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
