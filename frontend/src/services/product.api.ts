// src/services/product.api.ts
import api from "./api";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  stock: number;
  imageUrl?: string;
}

// Buscar todos os produtos
export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};

// Buscar produto por id
export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

// Criar produto (admin)
export const createProduct = async (data: Omit<Product, "id">, token: string): Promise<Product> => {
  const response = await api.post<Product>("/products", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Atualizar produto (admin)
export const updateProduct = async (id: number, data: Partial<Product>, token: string): Promise<Product> => {
  const response = await api.put<Product>(`/products/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteProduct = async (id: number, token: string): Promise<void> => {
  await api.delete(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
