import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: { name: [] },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      // if (action.payload.map())
      state.name = action.payload.products as any;
    });
  },
});

export const getProducts = createAsyncThunk("get/products", async () => {
  // const res = fetch("https://dummyjson.com/products");
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
  return data;
});
export default productSlice.reducer;
