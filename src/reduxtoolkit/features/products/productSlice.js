import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../restapi/apiClient";

const initialState = {
  products: [],
  latestProduct: [],
  // topTenProducts: [],
  loading: false,
  error: "",
};
//create actions
export const fetchAllProducts = createAsyncThunk(
  "products/fetchproducts",
  async (_, thunkApi) => {
    try {
      const response = await api.get("getproducts");
      const products = response.data;
      return products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchLatestProducts = createAsyncThunk(
  "products/fetchLatestProducts",
  async (_, thunkApi) => {
    try {
      const response = await api.get("fetchLatestProducts");
      const products = response.data;
      return products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.products = [];
    });
    builder.addCase(fetchLatestProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLatestProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.latestProduct = action.payload;
    });
    builder.addCase(fetchLatestProducts.rejected, (state, action) => {
      state.loading = false;
      state.latestProduct = [];
      state.error = action.payload;
    });
  },
});

// export const { setProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
