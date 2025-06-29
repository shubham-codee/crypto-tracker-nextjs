"use client";

import { useFavouriteStore } from "@/stores/favouriteStore";
import { useUserStore } from "@/stores/userStore";
import { useEffect } from "react";

function ClientAuthProvider() {
  const { setUser, clearUser } = useUserStore();
  const { initializeFavourites } = useFavouriteStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user", { method: "GET" });

        if (response.ok) {
          const { data } = await response.json();
          setUser(data);
          initializeFavourites();
        } else {
          clearUser();
        }
      } catch (error) {
        console.log("fetch user: ", error);
        clearUser();
      }
    };

    fetchUser();
  }, [setUser]);
  return null;
}

export default ClientAuthProvider;
