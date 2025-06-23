"use client";

import React, { useState, useEffect } from "react";
import FavouritesSidebar from "./FavouritesSidebar";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleSidebarOpenClick() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden", "lg:overflow-visible");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);
  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <div className="cursor-pointer">
          <span
            className={`bg-black block h-0.5 w-6 rounded-sm my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 rounded-sm my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black block h-0.5 w-6 rounded-sm my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>{" "}
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"
            onClick={handleClick}
          ></div>
        )}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } h-35 w-35 fixed top-0 right-0 transform transition-transform duration-400 ease-out flex flex-col justify-around rounded-md rounded-bl-xl bg-white shadow-2xl
          p-2 z-30`}
        >
          <div className="hover: cursor-pointer hover:bg-gray-200 m-1 rounded-xl p-1">
            Homepage
          </div>
          <div className="hover:cursor-pointer hover:bg-gray-200 m-1 rounded-xl p-1">
            About
          </div>
          <div
            className="hover: cursor-pointer hover:bg-gray-200 m-1 rounded-xl p-1"
            onClick={handleSidebarOpenClick}
          >
            ⭐ Favourites
          </div>
        </div>
      </button>
      <FavouritesSidebar
        isOpen={isSideBarOpen}
        handleClose={handleSidebarOpenClick}
      />
    </>
  );
};

export default HamburgerMenu;
