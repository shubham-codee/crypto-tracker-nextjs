import { create } from "zustand";

interface FavouriteState {
  favourites: string[];
  toggleFavourite: (coinSymbol: string) => void;
  isFavourite: (coinSymbol: string) => boolean;
  initializeFavourites: () => void;
}

export const useFavouriteStore = create<FavouriteState>((set, get) => ({
  favourites: [],

  toggleFavourite: async (coinSymbol) => {
    const currFavourites = get().favourites;
    let updatedFavourites;

    if (currFavourites.includes(coinSymbol)) {
      await fetch("/api/favourites", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ coinSymbol }),
      });
      updatedFavourites = currFavourites.filter(
        (currCoin) => currCoin != coinSymbol
      );
    } else {
      await fetch("/api/favourites", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ coinSymbol }),
      });
      updatedFavourites = [...currFavourites, coinSymbol];
    }

    set({ favourites: updatedFavourites });
  },

  isFavourite: (coinSymbol) => get().favourites.includes(coinSymbol),

  initializeFavourites: async () => {
    try {
      const response = await fetch("/api/favourites", { method: "GET" });
      if (response.ok) {
        const { data } = await response.json();
        set({ favourites: data });
      }
    } catch (error) {
      console.log("favourite store error: ", error);
    }
  },
}));
