'use client'

import Grid from '@/components/Grid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function page() {
  const { theme, setTheme } = useTheme()

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
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
        return
      }
      case "dark": {
        setTheme("light")
        return
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark")
        return
      }
    }
  }

  return (
    <main
      // style={{ backgroundImage: "url('/background-2.png')" }}
      className={'flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat dark:bg-neutral-950 bg-neutral-50'}
    >
      {/* <Pattern /> */}

      <div className='absolute h-134 w-full flex items-center justify-center'>
        <div className='absolute w-full h-px top-0 bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-900 dark:via-neutral-600 dark:to-neutral-900'></div>
        <div className='absolute w-full h-px bottom-0 bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-900 dark:via-neutral-600 dark:to-neutral-900'></div>
      </div>

      <Grid />
      <button className='absolute top-0 right-0' onClick={SwitchTheme}>Switch</button>
    </main>
  )
}

const Pattern = () => {
  return (
    <div>
      <div className="fixed z-0 inset-0 m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_4px,transparent_0,transparent_50%)] bg-size-[32px_32px] bg-fixed opacity-60" />
      {/* <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(270deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
      <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(225deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" /> */}
    </div>
  )
}