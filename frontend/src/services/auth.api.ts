import api from "./api";

export type LoginResponse = {
  id: any;
  token: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
};

export function login(name: string, password: string) {
  return api.post<LoginResponse>("/auth/login", { name, password });
}

export function signup(name: string, password: string, role: string) {
  return api.post<LoginResponse>("/users", { name, password, role });
}

export function getProfile(token: string) {
  return api.get("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
