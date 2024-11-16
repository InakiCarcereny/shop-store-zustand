import { create } from "zustand";

interface CounterStore {
  count: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
}

export const useStore = create<CounterStore>((set) => ({
  count: 0,
  increaseCounter: () => set((state) => ({ count: state.count + 1 })),
  decreaseCounter: () => set((state) => ({ count: state.count - 1 })),
}));
