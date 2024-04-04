import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Product from "../../pages/shopAll/Product";

export const productSlice = createSlice({
  name: "products",
  initialState: { name: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // if (action.payload.map())
      state.name = action.payload as any;
    });
  },
});

export const getProducts = createAsyncThunk("get/products", async () => {
  // const res = fetch("https://dummyjson.com/products");
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  let updatedData = data.products.map((Product: any) => ({
    ...Product,
    quantity: 1,
  }));
  console.log(" updated", updatedData);
  return updatedData;
});
export default productSlice.reducer;
