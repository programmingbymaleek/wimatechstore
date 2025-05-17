import axios from "axios";
import store from "../reduxtoolkit/appStore/store";
import { logout } from "../reduxtoolkit/features/user/userSlice";
import { refreshToken } from "../reduxtoolkit/features/user/userSlice";
export const api = axios.create({
  // baseURL: "https://restapieccommerce.onrender.com",
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

//Requeset interceptor to add token to headers.
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; //use stored token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 🔄 Here's how the next flow works called (Response interceptor to handle token expiration and refresh):
// ✅ User logs in

// You save:
// localStorage.setItem('token', accessToken);
// localStorage.setItem('refresh_token', refreshToken);

// 📦 User makes an API call using your api instance
// api.get('/user-profile') // or any protected route

// 🧠 Request Interceptor Adds Access Token
// config.headers['Authorization'] = `Bearer ${token}`;
// Automatically attaches token to every request.

// ❌ If access token is expired
// Server replies with 401 Unauthorized.

//And then.....

// 🔁 Response Interceptor kicks in

// Detects the 401.

// Checks for a refresh token in localStorage.

// Sends a request to /refresh-token to get a new access token.

// If successful:

// Stores new tokens.

// Retries the original failed request automatically with the new access token.

// ✅ User never notices — their action continues like nothing happened.

// ❌ If refresh token also fails (e.g., expired or revoked):

// User is redirected to /login.

//Response interceptor to handle token expiration and refresh
// Handle token refresh on 401 responses
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const resultAction = await store.dispatch(refreshToken());

        if (refreshToken.fulfilled.match(resultAction)) {
          const newToken = resultAction.payload.token;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        } else {
          store.dispatch(logout());
          return Promise.reject(resultAction.payload || "Refresh failed");
        }
      } catch (refreshError) {
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
