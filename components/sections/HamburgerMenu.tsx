"use client";

import React, { useState, useEffect } from "react";
import FavouritesSidebar from "./FavouritesSidebar";
import { AiOutlineClose } from "react-icons/ai";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import ThemeSelect from "../ui/ThemeSelect";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  function handleSidebarOpenClick() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  async function handleLogoutClick() {
    await fetch("/api/logout", { method: "POST" });
    clearUser();
  }

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
        className="z-50 flex flex-col justify-center items-center active:scale-90 cursor-pointer"
      >
        <span
          className={`bg-black dark:bg-slate-200 h-0.5 w-6 my-0.5 rounded-sm transform transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-slate-200 h-0.5 w-6 my-0.5 rounded-sm transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black dark:bg-slate-200 h-0.5 w-6 my-0.5 rounded-sm transform transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={handleClick}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-slate-900 shadow-xl p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleClick}
          className="text-2xl absolute top-[1.875rem] right-[1.125rem] cursor-pointer"
          aria-label="Close menu"
        >
          <AiOutlineClose className="text-2xl cursor-pointer transition-transform duration-300 hover:rotate-90 active:scale-90 hover:text-red-500 dark:hover:text-red-400 text-gray-700 dark:text-slate-200" />
        </button>
        <div className="space-y-4 text-lg font-medium mt-12">
          <ThemeSelect />
          {user ? (
            <>
              <div className="text-gray-700 dark:text-slate-200">
                Hello, {user.name}
              </div>
              <div
                className="cursor-pointer text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300"
                onClick={handleSidebarOpenClick}
              >
                ⭐ Favourites
              </div>
              <div
                className="cursor-pointer text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                onClick={handleLogoutClick}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  href={`/login`}
                  className="cursor-pointer text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href={`/register`}
                  className="cursor-pointer text-green-600 dark:text-emerald-400 hover:text-green-700 dark:hover:text-emerald-300"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      <FavouritesSidebar
        isOpen={isSideBarOpen}
        handleClose={handleSidebarOpenClick}
      />
    </>
  );
};

export default HamburgerMenu;
