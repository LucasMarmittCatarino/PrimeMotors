export interface CartItemLocal {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

// Chave usada no localStorage
const CART_KEY = "localCart";

export const getLocalCart = (): CartItemLocal[] => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveLocalCart = (items: CartItemLocal[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const addToLocalCart = (item: CartItemLocal) => {
  const cart = getLocalCart();
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveLocalCart(cart);
};

export const removeFromLocalCart = (id: number) => {
  const cart = getLocalCart().filter(item => item.id !== id);
  saveLocalCart(cart);
};

export const updateLocalCartQuantity = (id: number, quantity: number) => {
  const cart = getLocalCart();
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity = quantity;
    saveLocalCart(cart);
  }
};
