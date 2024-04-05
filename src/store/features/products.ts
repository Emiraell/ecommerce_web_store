import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// single product type/interface
export type product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity: number;
};

// initailState type/interface
export interface products {
  products: product[] | null;
  status: string;
}

// get products using local storage
const allProducts = localStorage.getItem("products");

let items;
try {
  items = allProducts && (JSON.parse(allProducts) as product[]);
} catch (err) {
  items = [] as product[];
}

// initialState
const initialState = {
  products: (items as product[]) || [],
  status: "" as string,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<product[]>) => {
          // set product if request is successful
          state.products = action.payload;
          state.status = "success";

          // store item in localStorage
          localStorage.setItem("products", JSON.stringify(state.products));
        }
      )
      .addCase(getProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
        state.products = [...state.products];
      });
  },
});

// get products
export const getProducts = createAsyncThunk("get/products", async () => {
  // get products making a request
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  // update the data by adding a quantity
  let updatedData = data.products.map((Product: any) => ({
    ...Product,
    quantity: 1,
  }));
  return updatedData;
});
export default productSlice.reducer;
