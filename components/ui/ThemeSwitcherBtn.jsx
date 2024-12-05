// app/components/ThemeSwitcher.tsx
"use client";

import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
console.log(theme)
  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <button className={`w-fit p-2 rounded-md dark:text-green-600 text-green-600 hover:scale-110 active:scale-100 duration-300 `}
    onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}>
{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
};
