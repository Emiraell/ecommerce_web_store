import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.unshift(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
