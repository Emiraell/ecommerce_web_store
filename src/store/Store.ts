import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./features/products";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// using redux persist tpprevent data loss on refresh

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  productReducer: productSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
