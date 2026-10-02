'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

export default function page() {

  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light")

    const handleClick = (e: MediaQueryListEvent) => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleClick)

    return () => mediaQuery.removeEventListener("change", handleClick)

  }, [])

  const SwitchTheme = () => {
    switch (theme) {
      case "light": {
        setTheme("dark")
        return;
      }
      case "dark": {
        setTheme("light")
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark")
        return;
      }
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen w-full relative'>
      <div onClick={SwitchTheme} className='p-4 rounded-xl cursor-pointer relative flex items-center justify-center hover:cursor-pointer hover:rotate-12 transition-transform duration-200'>
        <BiSun className='absolute dark:scale-0 dark:rotate-45 inset-0 transition-all duration-300 w-8 h-8' />
        <BiMoon className='absolute scale-0 dark:scale-100 inset-0 transition-all duration-300 w-8 h-8' />
      </div>
    </div>
  )
}