"use client";

import { useThemeStore } from "@/stores/themeStore";
import { useEffect } from "react";

function ThemeProvider() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme !== "auto") {
      document.documentElement.dataset.theme = theme;
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    document.documentElement.dataset.theme = mediaQuery.matches
      ? "dark"
      : "light";

    function handleChange(e: MediaQueryListEvent) {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  return null;
}

export default ThemeProvider;
