import api from "./api";
import type { User } from "./auth.api";

export interface Product {
  id: number;
  title: string;
  imageUrl?: string;
  stock?: number;
}

export interface OrderItem {
  id: number;
  quantity: number;
  Product: Product;
  priceAtPurchase?: number; // opcional
}

export interface Order {
  id: number;
  total: number;
  status: "pending" | "completed" | "canceled";
  OrderItems: OrderItem[];
  User?: User; // só se precisar mostrar info do usuário
}

export interface AdminInfo {
  totalItemsSold: number;
  topProduct?: {
    totalSold: number;
    Product: Product;
  };
  lowStockProducts: Product[];
}

// Checkout
export const checkout = async (): Promise<Order> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.post<Order>(
    "/orders/checkout",
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Lista pedidos do usuário
export const getMyOrders = async (): Promise<Order[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.get<Order[]>("/orders/my-orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Lista todos pedidos (admin)
export const getAllOrders = async (): Promise<Order[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.get<Order[]>("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Informações iniciais ao admin
export const getHomeAdminInfo = async (): Promise<AdminInfo> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.get<AdminInfo>("/orders/admin-home-info", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};
