import api from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "client";
}

// Função para atualizar qualquer campo do usuário
export const updateUser = async (id: number, data: Partial<User>, token: string) => {
  const response = await api.put<User>(`/users/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
