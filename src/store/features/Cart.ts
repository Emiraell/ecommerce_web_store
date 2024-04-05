import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "./products";

// cart prouct type
type cartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  image: string;
  totalPrice: number;
  brand: string;
};

//  initialState type/interface
interface cartInfo {
  cart: cartProduct[];
  totalItem: number;
}

// initialState
const initialState: cartInfo = { cart: [], totalItem: 0 };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add product/item to cart
    addToCart: (state, action: PayloadAction<product>) => {
      let product = action.payload;

      // check if item exist in cart before adding it
      let itemExist = state.cart.find((item) => item.id === product.id);
      if (itemExist) {
        // increment the quantity and add the price id item exist
        itemExist.quantity++;
        itemExist.totalPrice += product.price;
      } else {
        // add item at the start of the list if item exist
        state.cart.unshift({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
          category: product.category,
          image: product.images[0],
          totalPrice: product.price,
          brand: product.brand,
        });
      }
      // increment the total number of item in the cart
      state.totalItem++;
    },
    removeItem: (state, action): any => {
      let product = action.payload;

      // check if item exist before removing it from the list
      let itemExist = state.cart.find((item) => item.id === product.id);
      if (
        itemExist &&
        itemExist.totalPrice !== product.price &&
        itemExist.quantity !== 1
      ) {
        // decrement the quantity and subtract the price if item exist and its greater than 1
        itemExist.quantity = itemExist.quantity - 1;
        itemExist.totalPrice -= product.price;
      } else {
        // remove item if item is equal to 1
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }
      state.totalItem--;
    },
  },
});
// export functions
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
