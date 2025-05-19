import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true, // IMPORTANT! Send cookies with every request
});

//Requeset interceptor to add token to headers.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // your access token storage
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

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await api.post("/auth/refresh-token"); // no body, cookie sent automatically
        const newToken = res.data.token;
        localStorage.setItem("token", newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // retry original request
      } catch (err) {
        // Refresh token invalid or expired
        // Perform logout or redirect to login
        localStorage.removeItem("token");
        // Optionally dispatch logout redux action here
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
