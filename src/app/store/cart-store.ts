import { create } from "zustand";

interface CartStore {
  cartItems: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addItem: (item: Item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: (item: Item) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem !== item),
    })),
}));
