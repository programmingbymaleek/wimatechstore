import axios from "axios";
export const api = axios.create({
  baseURL: "https://restapieccommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

//Requeset interceptor to add token to headers.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token; //use stored token
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
api.interceptors.response.use(
  (response) => response, //If successful, do nothing
  //if error like 401 then run this callback
  async (error) => {
    const originalRequest = error.config;
    //check if the error is due to token expiration (401 unauthorized)
    if (error.response.data === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      try {
        const response = await axios.post("/refresh-token", { refreshToken });
        const { token, refreshToken: newRefreshToken } = response.data;
        //save the new token and refresh token
        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refreshToken);

        //retry the original request with the new token
        originalRequest.headers.Authorization = token;
        return axios(originalRequest);
      } catch (error) {
        console.log("Token refreh failed, logging out");
        //Handle failed refresh
        window.localStorage.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
