"use client";

import { useFavouriteStore } from "@/stores/favouriteStore";
import { MdStar, MdStarBorder } from "react-icons/md";

function FavouriteStar({ coinSymbol }: { coinSymbol: string }) {
  const { isFavourite, toggleFavourite } = useFavouriteStore();

  return (
    <div onClick={() => toggleFavourite(coinSymbol)}>
      {isFavourite(coinSymbol) ? (
        <MdStar className="w-6 h-6 text-yellow-400 hover:scale-120 transition duration-300 cursor-pointer active:scale-80" />
      ) : (
        <MdStarBorder className="w-6 h-6 text-gray-400 hover:text-yellow-400 transition duration-300 cursor-pointer active:scale-80" />
      )}
    </div>
  );
}

export default FavouriteStar;
