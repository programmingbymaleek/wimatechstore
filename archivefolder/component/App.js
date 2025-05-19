// App.jsx
import { useEffect, useState } from "react";
import api, { setAccessToken } from "./component/apiClient";
import RegisterForm from "./component/RegisterForm";

function App() {
  const [token, setToken] = useState(null);
  console.log(token)

  useEffect(() => {
    const tryRefresh = async () => {
      try {
        const res = await api.post("/auth/refresh-token"); // from HttpOnly cookie
        const newToken = res.data.token;
        setToken(newToken);
        setAccessToken(newToken);
        console.log("Token refreshed!");
      } catch (err) {
        console.log(err.message)
        console.warn("No refresh token or expired. User needs to login.");
        setToken(null);
      }
    };

    tryRefresh();
  }, []);

  return (
    <div>
      <h2 style={{"textAlign":"center"}}>Secure Register Form</h2>
      <RegisterForm />
    </div>
  );
}

export default App;
