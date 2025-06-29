"use client";

import { useFavouriteStore } from "@/stores/favouriteStore";
import React, { useEffect } from "react";

type FavouritesSidebarProps = {
  isOpen: boolean;
  handleClose: () => void;
};

function FavouritesSidebar({ isOpen, handleClose }: FavouritesSidebarProps) {
  const { favourites, toggleFavourite } = useFavouriteStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        ></div>
      )}
      <div
        className={`
        fixed top-0 right-0 h-full w-3/4 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white dark:bg-slate-900 shadow-lg z-50 transform transition-transform duration-400 ease-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Favorites ⭐{" "}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-transform duration-200 ease-in-out text-2xl font-semibold cursor-pointer"
          >
            X
          </button>
        </div>

        <div className="p-4 pb-6 space-y-3 h-full overflow-y-auto">
          {favourites.length === 0 ? (
            <p className="text-gray-500 dark:text-slate-400">
              No favorites yet
            </p>
          ) : (
            favourites.map((coin) => (
              <div
                key={coin}
                className="flex justify-between items-center bg-gray-100 dark:bg-slate-800 px-3 py-2 rounded"
              >
                <span className="capitalize text-slate-900 dark:text-slate-100">
                  {coin}
                </span>
                <button
                  onClick={() => toggleFavourite(coin)}
                  className="text-gray-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 transition-transform duration-200 ease-in-out text-2xl font-semibold cursor-pointer"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default FavouritesSidebar;
