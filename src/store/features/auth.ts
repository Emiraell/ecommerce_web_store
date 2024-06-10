import { createSlice } from "@reduxjs/toolkit";

export interface auth {
  userName: string;
  password: string;
  userIn: boolean;
}

const userInfo = sessionStorage.getItem("user");

let userAuth;
try {
  userAuth = userInfo && JSON.parse(userInfo);
} catch (err) {
  console.log(err);
}
const initialState: auth = userAuth || {
  userName: "",
  password: "",
  userIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.password = action.payload.password;
      state.userIn = true;
      sessionStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state) => {
      state.userName = "";
      state.password = "";
      state.userIn = false;
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("products");
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("totalItem");
      sessionStorage.removeItem("totalPrice");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
