import { create } from "zustand";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  clearCart: () => void;
  addQuantity: (item: Item, quantity: number) => void;
  lessQuantity: (item: Item) => void;
}

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  images: string[];
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItem: (item: Item) =>
    set((state) => ({
      cartItems: [
        ...state.cartItems,
        { ...item, quantity: item.quantity || 1 },
      ],
    })),
  removeItem: (item: Item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
    })),
  clearCart: () => set({ cartItems: [] }),
  addQuantity: (item: Item, quantity: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
      ),
    })),
  lessQuantity: (item: Item) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    })),
}));
