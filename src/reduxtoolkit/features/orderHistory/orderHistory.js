import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrderHistoryFromFireBase } from "../../../utilis/firebase.utils";

// Thunk for fetching order history
export const fetchOrderHistory = createAsyncThunk(
  "orderHistory/fetchOrderHistory",
  async (uid, thunkAPI) => {
    try {
      const data = await getOrderHistoryFromFireBase(uid);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the reducer for use in the store
export default orderHistorySlice.reducer;
