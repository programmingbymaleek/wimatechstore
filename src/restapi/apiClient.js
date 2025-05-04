import axios from "axios";
export const api = axios.create({
  baseURL: "https://restapieccommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
