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
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  // ✅ Add or update item
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

  // ✅ Remove item
  removeFromCart: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),

  // ✅ Increase quantity
  increaseQty: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }),

  // ✅ Decrease quantity (stops at 1)
  decreaseQty: (id) =>
    set({
      items: get().items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }),

  // ✅ Clear all items
  clearCart: () => set({ items: [] }),

  // ✅ Compute total
  getTotal: () =>
    get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ),
}));
