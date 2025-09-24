// src/hooks/useAuth.ts
import { useState, useEffect } from "react";

export interface AuthUser {
  id: number;
  name: string;
  role: "admin" | "client";
}

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  return { user, setUser, logout };
};
