'use client'

import { Link } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

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
      style={{ backgroundImage: "url('/background.png')" }}
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat p-4"
    >
      
      <section className="relative w-full max-w-xs overflow-hidden rounded-2xl border-2 border-neutral-900 bg-neutral-900 shadow-xl">
        {/* Cover image */}
        <div
          style={{ backgroundImage: "url('/cover.png')" }}
          className="h-40 bg-cover bg-center bg-no-repeat"
        />

        {/* Avatar */}
        <div className="absolute flex items-end justify-between px-4 top-28 h-24 w-full">
          <div className='overflow-hidden w-24 h-24 rounded-2xl border-2 border-neutral-900 bg-neutral-800 shadow-lg'>
            <img
              src="/profile.png"
              alt="Rishav's profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-fit items-center py-3 gap-2 text-neutral-200">
            <FaXTwitter size={18} color="" />
            <FaGithub size={18} color="" />

            <button onClick={SwitchTheme} className="rounded-xl bg-neutral-200 px-4 text-neutral-900">
              Follow
            </button>
          </div>
        </div>

        {/* Profile content */}
        <div className="flex min-h-50 pt-10 flex-col justify-center space-y-2 px-4 text-xs text-neutral-200">
          <div className='tracking-wider'>
            <h1 className="text-lg font-bold leading-6">Negative</h1>
            <p className="text-neutral-400">@negative</p>
          </div>

          <p className="text-neutral-300">
            I am a design engineer,
            who can code frontend of web and mobile apps with clean UI.
          </p>

          <div className="flex gap-4">
            <span>
              <span className="text-neutral-400">583 </span>
              following
            </span>

            <span>
              <span className="text-neutral-400">43.7k </span>
              followers
            </span>
          </div>

          <div className='flex items-center gap-1'>
            <Link size={11} />
            <a
              href="https://pacet.com"
              target="_blank"
              rel="noreferrer"
              className="w-fit text-blue-400 transition-colors hover:text-blue-300"
            >
              Portfolio.negativ.in
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

const Pattern = () => {
  return (
    <div>
      <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
      <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(270deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
      <div className="absolute z-0 inset-0 m-auto bg-[repeating-linear-gradient(225deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
    </div>
  )
}