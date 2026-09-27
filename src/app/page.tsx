'use client'

import { useTheme } from "next-themes";
import {
  BsClaude,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsSlack,
  BsSpotify,
} from "react-icons/bs"

const icons = [
  { title: "Claude", icon: <BsClaude className="size-12 text-indigo-600" /> },
  { title: "Google", icon: <BsGoogle className="size-12 text-blue-600" /> },
  { title: "Github", icon: <BsGithub className="size-12 text-zinc-900 dark:text-zinc-100" /> },
  { title: "Linkedin", icon: <BsLinkedin className="size-12 text-blue-600" /> },
  { title: "Instagram", icon: <BsInstagram className="size-12 text-pink-600" /> },
  { title: "Slack", icon: <BsSlack className="size-12 text-violet-600" /> },
  { title: "Spotify", icon: <BsSpotify className="size-12 text-emerald-600" /> },
]

export default function Page() {

  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <Pattern />
      <div className="relative flex flex-col justify-between h-76 w-80 overflow-hidden rounded-xl border border-neutral-300/40 dark:border-neutral-800/40 bg-neutral-200/80 dark:bg-stone-950 shadow-lg">
        <div className="flex flex-col justify-between h-52 dark:bg-stone-900/30 bg-neutral-100 m-1 border border-neutral-200/30 dark:border-neutral-800/40 rounded-xl">
          <div className="relative h-2/5 mx-4 mask-b-from-70% mask-t-from-70% mask-r-from-70% mask-l-from-70%">
            <Pattern />
            <div className="relative flex h-full items-center justify-center gap-4 overflow-hidden px-4 py-6">
              {icons.map((item) => (
                <div
                  key={item.title}
                  className="flex h-9 w-9 items-center animate-marquee justify-center text-neutral-500 backdrop-blur-sm"
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-4 h-3/5 flex flex-col justify-evenly items-start space-y-3">
            <h1 className="text-md font-bold tracking-wide leading-tight text-neutral-900 dark:text-neutral-100">
              Building intelligent products for the next generation of the web.
            </h1>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 tracking-wide">
              Explore powerful AI tools and digital experiences designed to make complex technology simple, useful, and accessible.
            </p>
          </div>
        </div>
        <div className="px-2 flex flex-col justify-between items-start space-y-2 py-4">
          <div className="flex justify-between w-full gap-2">
            <span className="px-2 text-xs font-medium text-neutral-800 dark:text-neutral-200">
              $ 199<span className="text-neutral-600 dark:text-neutral-500">/hr</span>
            </span>
            <span className="px-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              AI Development
            </span>
          </div>
          <button onClick={handleThemeChange} className="rounded-lg w-full cursor-pointer bg-neutral-900 dark:bg-neutral-300 px-4 py-2 text-sm font-medium text-neutral-50 dark:text-neutral-950 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-400">
            Start a Project
          </button>
        </div>
      </div>
    </div>
  )
}

const Pattern = () => {
  return (
    <div className="absolute inset-0 m-auto rounded-[28px] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed opacity-60" />
  )
}