import axios from "axios";

// Base URL do seu backend
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
