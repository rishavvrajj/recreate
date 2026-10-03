'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { FaCircleDot } from 'react-icons/fa6';
import { LuCircleDot } from 'react-icons/lu';

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
    <div className='flex flex-col gap-8 items-center justify-center min-h-screen w-full bg-[#8B8E93]'>
      <div className='h-32 w-72 rounded-3xl bg-[#F4F3F1] p-4'>
        <div className='h-1/2 w-full flex items-start justify-between'>
          <div>
            <h1 className='text-xs font-bold'>Organization Performance</h1>
            <p className='text-xs font-bold'><span className='text-neutral-600'>Goal done:</span> 90%</p>
          </div>
          <div className='w-fit h-fit p-2 px-4 bg-[#EEB58B] font-bold rounded-4xl text-xs'>Excellent</div>
        </div>
        <div className='flex items-center justify-between h-1/2 w-full'>
        <h1 className='text-xl font-extrabold'>97%</h1>
        <p className='flex items-center justify-center gap-2'>
          <LuCircleDot size={24} fill='black' className='text-black'/>
          <LuCircleDot size={24} fill='black' className='text-black'/>
          <LuCircleDot size={24} fill='black' className='text-black'/>
          <LuCircleDot size={24} fill='black' className='text-black'/>
          <LuCircleDot size={24} fill='black' className='text-black'/>
        </p>
        </div>
      </div>
    </div>
  )
}