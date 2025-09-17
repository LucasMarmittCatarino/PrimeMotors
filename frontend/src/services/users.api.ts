import api from "./api";

export type User = {
  id: string;
  name: string;
  role: string;
};

export function getUsers() {
  return api.get<User[]>("/users");
}

export function updateUser(id: string, payload: Partial<User>) {
  return api.put<User>(`/users/${id}`, payload);
}

export function deleteUser(id: string) {
  return api.delete(`/users/${id}`);
}
