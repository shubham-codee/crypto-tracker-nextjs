"use client";

import { useThemeStore } from "@/stores/themeStore";
import React from "react";

function ThemeSelect() {
  const { theme, setTheme } = useThemeStore();

  return (
    <>
      <div >
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="cursor-pointer bg-white dark:bg-slate-900 text-black dark:text-slate-200 p-2 rounded border border-gray-300 dark:border-slate-700 transition-colors"
        >
          <option className="cursor-pointer" value="light">light</option>
          <option className="cursor-pointer" value="dark">dark</option>
          <option className="cursor-pointer" value="auto">auto</option>
        </select>
      </div>
    </>
  );
}

export default ThemeSelect;
