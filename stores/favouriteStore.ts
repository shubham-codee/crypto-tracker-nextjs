import { create } from "zustand";

interface FavouriteState {
  favourites: string[];
  toggleFavourite: (symbol: string) => void;
  isFavourite: (symbol: string) => boolean;
  initializeFavourites: () => void;
}

export const useFavouriteStore = create<FavouriteState>((set, get) => ({
  favourites: [],

  toggleFavourite: (symbol) => {
    const currFavourites = get().favourites;

    let updatedFavourites = currFavourites.includes(symbol)
      ? currFavourites.filter((currCoin) => currCoin != symbol)
      : [...currFavourites, symbol];

    set({ favourites: updatedFavourites });
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  },

  isFavourite: (symbol) => get().favourites.includes(symbol),

  initializeFavourites: () => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      const parsedFavourites = JSON.parse(storedFavourites);
      set({ favourites: parsedFavourites });
    }
  },
}));
