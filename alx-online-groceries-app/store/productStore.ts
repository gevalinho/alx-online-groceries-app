import { create } from "zustand";

interface Product {
  id: string;
  name: string;
  info: string;
  price: number;
  image: any;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  setProducts: (products: Product[]) => void;
  setSearchQuery: (query: string) => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filteredProducts: [],
  searchQuery: "",

  setProducts: (products) => set({ products, filteredProducts: products }),

  setSearchQuery: (query) => {
    const allProducts = get().products;
    const filtered = allProducts.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    set({ searchQuery: query, filteredProducts: filtered });
  },
}));
