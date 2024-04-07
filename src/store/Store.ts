import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/products";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./features/Cart";
import { authSlice } from "./features/auth";

export const store = configureStore({
  reducer: {
    productReducer: productSlice.reducer,
    cartReducer: cartSlice.reducer,
    userReducer: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// dispatch and selector
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
