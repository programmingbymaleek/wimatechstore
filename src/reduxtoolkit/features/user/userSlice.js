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
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_, thunkApi) => {
    try {
      // Adjust endpoint & options as needed
      const response = await api.post("/auth/refresh-token", null, {
        withCredentials: true, // send cookies if refresh token is stored there
      });
      return response.data; // Expected { user, token }
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
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
    // Register User
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.loading = false;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = action.payload || "Registration failed";
      state.loading = false;
    });

    // Login User
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.loading = false;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload || "Login failed";
      state.loading = false;
    });

    // Refresh Token
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.loading = false;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
