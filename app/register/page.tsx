"use client";

import { registerSchema } from "@/lib/validations/registerSchema";
import { useFavouriteStore } from "@/stores/favouriteStore";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<{
    name?: string;
    email?: string;
    password?: string;
    server?: string;
  }>({});
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();
  const initializeFavourites = useFavouriteStore(
    (state) => state.initializeFavourites
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();

      const result = registerSchema.safeParse(formData);

      if (result.success) {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const data = await res.json();
          setError((prev) => ({
            ...prev,
            server: data.message || "Registration Failed",
          }));
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
        const fieldErrors = result.error.flatten().fieldErrors;

        setError((prev) => ({
          ...prev,
          name: fieldErrors.name?.[0],
          email: fieldErrors.email?.[0],
          password: fieldErrors.password?.[0],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className={`min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900`}
      >
        <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6 text-center">
            Register
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-500"
                onChange={handleChange}
              />
              {error.name && (
                <p className="text-red-500 text-sm">{error.name}</p>
              )}
            </div>
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
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-slate-400">
            Already have an account?
            <Link
              href="/login"
              className="ml-1 font-medium text-blue-600 hover:text-blue-500 dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-200"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
