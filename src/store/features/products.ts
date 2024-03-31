import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: { name: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      action.payload.products.map((product: any) => {
        if (product.catergory === "smartphones") {
          state.name.push(product);
        }
      });
    });
  },
});

export const getProducts = createAsyncThunk("get/products", async () => {
  // const res = fetch("https://dummyjson.com/products");
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
});
export default productSlice.reducer;
