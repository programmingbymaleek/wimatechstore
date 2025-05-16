import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../restapi/apiClient";

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, thunkApi) => {
    try {
      const response = await api.post("/auth/register", userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      thunkApi.fulfillWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, thunkApi) => {
    try {
      const response = await api.post("/auth/login", userData);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      const { user, token } = action.payload;
      state.loading = false;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token); // persit the token through out the application
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.loading = false;
      state.user = user;
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
