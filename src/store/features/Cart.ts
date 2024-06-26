/* eslint-disable prefer-const */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "./products";

// cart prouct type
export type cartProduct = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  image: string;
  subTotal: number;
  brand: string;
};

//  initialState type/interface
interface cartInfo {
  cart: cartProduct[];
  totalItem: number;
  totalPrice: number;
}

// get product from local storage
const allCartItems = sessionStorage.getItem("cart");
const itemsTotal = sessionStorage.getItem("totalItem");
const itemsTotalPrice = sessionStorage.getItem("totalPrice");

// check if items exist in local storage
let cartItem;
let totalCartItem;
let totalCartPrice;
try {
  cartItem = allCartItems && JSON.parse(allCartItems);
  totalCartItem = itemsTotal && JSON.parse(itemsTotal);
  totalCartPrice = itemsTotalPrice && JSON.parse(itemsTotalPrice);
} catch (err) {
  cartItem = [];
  totalCartItem = 0;
}

// initialState
const initialState: cartInfo = {
  cart: (cartItem as cartProduct[]) || [],
  totalItem: (totalCartItem as number) || 0,
  totalPrice: (totalCartPrice as number) || 0,
};
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
        itemExist.quantity += action.payload.quantity;
        itemExist.subTotal += action.payload.subTotal;
      } else {
        // add item at the start of the list if item exist
        state.cart.unshift({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: action.payload.quantity,
          description: product.description,
          category: product.category,
          image: product.images[0],
          subTotal: action.payload.subTotal,
          brand: product.brand,
        });
      }
      // save cart products in local storage
      sessionStorage.setItem("cart", JSON.stringify(state.cart));

      // increment the total number of item in the cart
      state.totalItem += action.payload.quantity;

      // save total item in local storage
      sessionStorage.setItem("totalItem", JSON.stringify(state.totalItem));

      // total price
      state.totalPrice += product.subTotal;
      sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    removeItem: (state, action) => {
      let product = action.payload;

      // check if item exist before removing it from the list
      let itemExist = state.cart.find((item) => item.id === product.id);
      if (
        itemExist &&
        itemExist.subTotal !== product.price &&
        itemExist.quantity > 1
      ) {
        // decrement the quantity and subtract the price if item exist and its greater than 1
        itemExist.quantity--;
        itemExist.subTotal -= product.price;
      } else {
        // remove item if item is equal to 1
        state.cart = state.cart.filter((item) => item.id !== product.id);
      }

      // save cart products in local storage
      sessionStorage.setItem("cart", JSON.stringify(state.cart));

      // decrement the total number of item in the cart
      state.totalItem--;

      // save total item in local storage
      sessionStorage.setItem("totalItem", JSON.stringify(state.totalItem));

      // total price
      state.totalPrice -= action.payload.price;
      sessionStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
  },
});
// export functions
export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
