export default function NavBar() {
    return (
        <nav className='flex items-center justify-between mx-8 h-[5vh] border-b border-[#252525] text-[#252525] text-sm font-semibold tracking-widest'>
            <div className="w-full text-nowrap hover:cursor-pointer">Monday, September 21, 2026 3:03 AM</div>
            
            <div className="flex justify-center space-x-8 w-full">
                <a className="hover:cursor-pointer hover:text-black/80 lowercase" href="">Nexvyn</a>
            </div>

            <div className="flex justify-end w-full">
                <button className="hover:cursor-pointer hover:text-black/80">hello@nexvyn.dev</button>
            </div>
        </nav>
    )
}