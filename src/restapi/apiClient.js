import axios from "axios";
import { setToken, getToken, clearToken } from "./tokenService";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true, // IMPORTANT! Send cookies with every request
});

//Requeset interceptor to add token to headers.
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
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
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Prevent infinite loop
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;
      try {
        const res = await api.post(
          "/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        const { token } = res.data;
        setToken(token);

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;

        return api(originalRequest); // Retry original request
      } catch (err) {
        clearToken();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
