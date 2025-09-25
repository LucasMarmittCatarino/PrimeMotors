import api from "./api";

// Tipagem do usuário retornado
export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "client";
  phone?: string;
  smartphone?: string;
  birthday?: string;
  cpf?: string;
  cnpj?: string;
  cep?: string;
  street?: string;
  number?: string;
  complement?: string;
  city?: string;
  state?: string;
  newsletter?: boolean;
}


// Signup (registro)
export const signup = async (name: string, email: string, password: string) => {
  const response = await api.post<{ user: User; token: string }>("/auth/register", {
    name,
    email,
    password,
  });
  return response.data; // aqui é { user, token }
};


// Login
export const login = async (email: string, password: string) => {
  const response = await api.post<{ user: User; token: string }>("/auth/login", {
    email,
    password,
  });
  return response.data;
};

// Função para buscar usuário autenticado
export const getMe = async (token: string) => {
  const response = await api.get<User>("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Criação de admin (apenas para admins logados)
export const signupAdmin = async (name: string, email: string, password: string) => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.post<{ user: User; token: string }>(
    "/users/register-admin",
    { name, email, password }, // não precisa enviar role
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
