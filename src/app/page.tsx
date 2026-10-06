'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const categories = [
  {
    title: "Web Design",
    description: "Craft engaging, user-friendly websites",
    tags: ["Landing Page", "Portfolio", "Dashboard"],
    color: "bg-cyan-200/60",
    tagColor: "bg-cyan-300/40",
  },
  {
    title: "Product Design",
    description: "Design useful and delightful digital products",
    tags: ["UX Research", "Wireframes", "Prototypes"],
    color: "bg-orange-200/70",
    tagColor: "bg-orange-300/50",
  },
  {
    title: "Development",
    description: "Build fast, scalable web applications",
    tags: ["React", "Next.js", "TypeScript"],
    color: "bg-violet-200/70",
    tagColor: "bg-violet-300/50",
  },
  {
    title: "Business Analytics",
    description: "Turn complex data into clear insights",
    tags: ["Tableau", "Reports", "KPIs"],
    color: "bg-emerald-200/70",
    tagColor: "bg-emerald-300/50",
  },
];

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
      style={{ backgroundImage: "url('/background-2.png')" }}
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat p-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex h-full w-56 flex-col items-center justify-between rounded-xl bg-neutral-50 text-neutral-900 border border-neutral-200 p-2"
          >
            <div
              className={`flex h-full gap-4 w-full flex-col items-start justify-between rounded-lg p-3 ${category.color}`}
            >
              <div>
                <h2 className="text-lg font-extrabold">{category.title}</h2>

                <p className="mt-1 text-sm leading-5 text-neutral-700">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-lg px-2 py-1 text-xs ${category.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button className="flex w-full items-center justify-between p-0.5 py-2 text-sm font-medium">
              Explore

              <span className="rounded-md bg-neutral-200 p-1">
                <BiRightArrowAlt size={18} />
              </span>
            </button>
          </div>
        ))}
      </div>
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