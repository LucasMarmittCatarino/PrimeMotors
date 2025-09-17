import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export function login(name: string, password: string) {
  return api.post("/auth/login", { name, password });
}

export function getProfile(token: string) {
  return api.get("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export default api;