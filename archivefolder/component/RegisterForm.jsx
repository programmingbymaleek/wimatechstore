import { useState } from "react";
import api from "./apiClient";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await api.post("/auth/register", {
       "emailAddress": email,
        "userName":displayName,
        "password":password,
        "confirmPassword":confirmPassword,
      });
      console.log(res)

      setMessage("Registered successfully!");
    } catch (err) {
      console.error(err);
      setMessage("Registration failed.");
    }
  };

  return (
    <form className="register-form-container" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <input
        name="displayName"
        placeholder="Display Name"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        required
      />
      <input
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
};

export default RegisterForm;
