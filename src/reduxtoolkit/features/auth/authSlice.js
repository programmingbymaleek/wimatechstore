import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../restapi/apiClient";
import { setToken, clearToken } from "../../../restapi/tokenService";
import { setUser, clearUser } from "../user/userSlice";

const initialState = {
  accessToken: null,
  isAuthenticated: false,
  loading: false,
  error: "",
};

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await api.post("/auth/register", credentials);
      const { user, token } = response.data;
      setToken(token);
      thunkApi.dispatch(setUser(user));
      thunkApi.dispatch(setAccessToken(token));
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data?.message || "Registration failed"
      );
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await api.post("/auth/login", credentials);
      const { user, token } = response.data;
      setToken(token);
      thunkApi.dispatch(setUser(user));
      thunkApi.dispatch(setAccessToken(token));
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data?.message || "Login failed"
      );
    }
  }
);

// LOGOUT
export const logOutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await api.post("/auth/logout");
      clearToken();
      thunkApi.dispatch(clearUser());
      thunkApi.dispatch(clearAccessToken());
    } catch (error) {
      return thunkApi.rejectWithValue(
        error?.response?.data?.message || "Logout failed"
      );
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logOutUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
