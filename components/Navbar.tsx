"use client";

import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import FavouritesSidebar from "./FavouritesSidebar";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleClick() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <>
      <div className="flex justify-between h-20 items-center p-4 shadow-lg">
        <div className="text-3xl font-bold">LOGO</div>
        <div className="hidden lg:flex text-lg w-3/6 justify-around font-semibold ">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Company</div>
          <div className="cursor-pointer">Service</div>
          <div className="cursor-pointer">Blog</div>
          <div className="cursor-pointer" onClick={handleClick}>
            ⭐ Favourites
          </div>
        </div>
        <div className="block lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
      <FavouritesSidebar isOpen={isSideBarOpen} handleClose={handleClick} />
    </>
  );
};

export default Navbar;
