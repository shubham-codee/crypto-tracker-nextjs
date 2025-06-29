"use client";

import { loginSchema } from "@/lib/validations/loginSchema";
import { useFavouriteStore } from "@/stores/favouriteStore";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    server?: string;
  }>({});
  const setUser = useUserStore((state) => state.setUser);
  const initializeFavourites = useFavouriteStore(
    (state) => state.initializeFavourites
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();

      const result = loginSchema.safeParse(formData);

      if (result.success) {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.message || "Login failed");
          return;
        } else {
          const responseForUser = await fetch("/api/user", { method: "GET" });
          if (responseForUser.ok) {
            const { data } = await responseForUser.json();
            setUser(data);
            initializeFavourites();
            router.push("/");
          } else {
            const data = await responseForUser.json();
            setError((prev) => ({
              ...prev,
              server: data.message || "User fetch failed",
            }));
          }
        }
      } else {
        console.log("error");
        const fieldErrors = result.error.flatten().fieldErrors;

        setError((prev) => ({
          ...prev,
          email: fieldErrors.email?.[0],
          password: fieldErrors.password?.[0],
        }));
        console.log(error);
      }
    } catch (error) {
      console.log("login page: ", error);
    }
  }

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900`}
      >
        <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6 text-center">
            Log In
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-500"
                onChange={handleChange}
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500"
                onChange={handleChange}
              />
              {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
            </div>
            {error.server && <p className="text-red-500">{error.server}</p>}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-sky-400"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-slate-400">
            Don&apos;t have an account?
            <Link
              href="/register"
              className="ml-1 font-medium text-blue-600 hover:text-blue-500 dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-200"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
