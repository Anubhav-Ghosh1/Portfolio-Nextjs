"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? <MdLightMode className="text-yellow-500" /> : <MdDarkMode className="text-gray-900" />}
    </button>
  );
}
