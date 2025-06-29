"use-client";

import { ObjectId } from "mongodb";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  _id: ObjectId;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
