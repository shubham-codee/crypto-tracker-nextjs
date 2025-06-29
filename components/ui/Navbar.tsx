"use client";

import React, { useState } from "react";
import HamburgerMenu from "../sections/HamburgerMenu";
import FavouritesSidebar from "../sections/FavouritesSidebar";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const router = useRouter();

  function handleClick() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  async function handleLogoutClick() {
    await fetch("/api/logout", { method: "POST" });
    clearUser();
    router.push("/");
  }

  return (
    <>
      <div className="flex justify-between items-center h-20 px-5 md:px-8 shadow-md bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-600">
        <div className="text-3xl font-bold text-gray-800 dark:text-slate-100 tracking-wide">
          <Link href={`/`}>LOGO</Link>
        </div>
        <div className="hidden lg:flex text-base font-medium space-x-6 items-center">
          <ThemeSelect />
          {user ? (
            <>
              <div className="text-gray-700 dark:text-slate-200">
                Hello, {user.name}
              </div>
              <div
                className="cursor-pointer text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300"
                onClick={handleClick}
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
              <Link
                href={`/login`}
                className="cursor-pointer text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300"
              >
                Login
              </Link>
              <Link
                href={`/register`}
                className="cursor-pointer text-green-600 dark:text-emerald-400 hover:text-green-700 dark:hover:text-emerald-300"
              >
                Register
              </Link>
            </>
          )}
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
