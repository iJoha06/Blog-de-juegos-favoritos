import create from 'zustand';

export type CategoryType = 'accion' | 'aventura' | 'terror';

interface FavoriteItem {
  id: string;
  name: string;
  type: CategoryType;
  imageURL?: string; 
}

interface FavoriteGame {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
}

const useFavoriteStore = create<FavoriteGame>((set) => ({
  favorites: [],
  addFavorite: (item) =>
    set((state) => ({ favorites: [...state.favorites, item] })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));

export default useFavoriteStore;
