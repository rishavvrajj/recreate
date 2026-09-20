import { ArrowUpRight } from "lucide-react"

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between uppercase font-mono text-zinc-800 h-[8vh] px-4 cursor-pointer">
      <div className="w-[10vw] capitalize">
        hori kyoko
      </div>
      <div className="flex justify-center items-center space-x-4 w-[30vw]">
        <a href="">Home</a>
        <span>/</span>
        <a href="">Works</a>
        <span>/</span>
        <a href="">About</a>
      </div>
      <div className="group flex w-[10vw] justify-end items-center">
        <button className="flex p-1 text-sm rounded-sm px-2 hover:cursor-pointer bg-black text-white">
        Contact
        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={16} />
        </button>
      </div>
    </nav>
  )
}