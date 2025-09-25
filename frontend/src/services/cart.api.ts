import api from "./api";

export interface CartItem {
  id: number;
  quantity: number;
  Product: {
    id: number;
    title: string;
    price: number;
    imageUrl?: string;
    stock: number;
  };
}

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token não encontrado");
  return { Authorization: `Bearer ${token}` };
};

// Buscar carrinho do usuário
export const getCart = async (): Promise<CartItem[]> => {
  const response = await api.get("/cart", {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Adicionar ao carrinho
export const addToCart = async (productId: number, quantity = 1): Promise<CartItem> => {
  const response = await api.post(
    "/cart",
    { productId, quantity },
    { headers: getAuthHeaders() }
  );
  return response.data;
};

// Atualizar quantidade
export const updateCartItem = async (id: number, quantity: number): Promise<CartItem> => {
  const response = await api.put(
    `/cart/${id}`,
    { quantity },
    { headers: getAuthHeaders() }
  );
  return response.data;
};

// Remover item
export const removeFromCart = async (id: number): Promise<void> => {
  await api.delete(`/cart/${id}`, {
    headers: getAuthHeaders(),
  });
};
