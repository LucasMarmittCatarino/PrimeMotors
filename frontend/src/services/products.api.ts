import api from "./api";

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export function getProducts(query?: string) {
  return api.get<Product[]>("/products", { params: { q: query } });
}

export function createProduct(payload: Omit<Product, "id">) {
  return api.post<Product>("/products", payload);
}

export function updateProduct(id: string, payload: Partial<Product>) {
  return api.put<Product>(`/products/${id}`, payload);
}

export function deleteProduct(id: string) {
  return api.delete(`/products/${id}`);
}
