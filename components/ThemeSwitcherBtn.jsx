// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, Sun } from "lucide-react"; // Clean up redundant aliases
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true); // Avoid rendering before hydration
  }, []);

  if (!mounted) return null; // Render nothing on the server

  return (
    <button
      aria-label="Toggle Theme"
      className="w-fit p-2 rounded-md dark:text-green-600 text-green-600 hover:scale-110 active:scale-100 duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
