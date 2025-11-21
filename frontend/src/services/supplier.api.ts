// src/services/supplier.api.ts
import api from "./api";

export interface Supplier {
  id: number;
  name: string;
  contact: string;
}

// Buscar todos os fornecedoress
export const getSuppliers = async (): Promise<Supplier[]> => {
  const response = await api.get<Supplier[]>("/suppliers");
  return response.data;
};

// Buscar fornecedores por id
export const getSupplierById = async (id: number): Promise<Supplier> => {
  const response = await api.get<Supplier>(`/suppliers/${id}`);
  return response.data;
};

// Criar fornecedores (admin)
export const createSupplier = async (data: Omit<Supplier, "id">, token: string): Promise<Supplier> => {
  const response = await api.post<Supplier>("/suppliers", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Atualizar fornecedores (admin)
export const updateSupplier = async (id: number, data: Partial<Supplier>, token: string): Promise<Supplier> => {
  const response = await api.put<Supplier>(`/suppliers/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Excluir fornecedores (admin)
export const deleteSupplier = async (id: number, token: string): Promise<void> => {
  await api.delete(`/suppliers/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
