import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  userOrderHistory: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    getUserOrderHistory: (state, action) => {
      state.userOrderHistory = action.payload;
    },
  },
});

export const { setCurrentUser, getUserOrderHistory } = userSlice.actions;
export const userReducer = userSlice.reducer;
