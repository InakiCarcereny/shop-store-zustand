import { create } from "zustand";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  clearCart: () => void;
}

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItem: (item: Item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: (item: Item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
