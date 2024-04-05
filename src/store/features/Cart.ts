import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface propss {
  cart: any[];
  total: number;
}
const initialState: propss = { cart: [], total: 0 };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product = action.payload;
      // state.cart?.map((produc) => {
      let itemExist = state.cart.find((item) => item.id === product.id);
      if (itemExist) {
        itemExist.quantity++;
        itemExist.totalPrice += product.price;
      } else {
        state.cart.unshift({
          id: product.id,
          tittle: product.title,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
          category: product.category,
          image: product.images[0],
          totalPrice: product.price,
          brand: product.brand,
        });
      }
      // });
      // state.cart.unshift(action.payload);
    },
    removeItem: (state, action): any => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
