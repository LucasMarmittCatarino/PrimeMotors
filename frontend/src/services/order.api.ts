import api from "./api";

export interface OrderItem {
  id: number;
  ProductId: number;
  quantity: number;
  priceAtPurchase: number;
  Product: {
    id: number;
    title: string;
    imageUrl?: string;
  };
}

export interface Order {
  id: number;
  total: number;
  status: "pending" | "completed" | "canceled";
  OrderItems: OrderItem[];
}

// Checkout
export const checkout = async (): Promise<Order> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Usuário não autenticado");

  const response = await api.post<Order>(
    "/orders/checkout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};


// Listar pedidos do usuário
export const getMyOrders = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>("/orders/my-orders");
  return response.data;
};

// Listar todos os pedidos (admin)
export const getAllOrders = async (): Promise<Order[]> => {
  const response = await api.get<Order[]>("/orders");
  return response.data;
};
