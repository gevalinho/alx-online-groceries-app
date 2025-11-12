import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: any;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (newItem) => {
    const existingItem = get().items.find((item) => item.id === newItem.id);
    if (existingItem) {
      set({
        items: get().items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        ),
      });
    } else {
      set({ items: [...get().items, newItem] });
    }
  },

  removeFromCart: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),

  clearCart: () => set({ items: [] }),
}));
