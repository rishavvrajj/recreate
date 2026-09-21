export default function NavBar() {
    return (
        <nav className='flex items-center justify-between px-8 h-[5vh] bg-neutral-800 text-sm text-white'>
            <div className="w-30 hover:cursor-pointer">Negative</div>
            
            <div className="flex justify-center space-x-8 w-80">
                <a className="hover:cursor-pointer hover:text-white/80 lowercase" href="">Work</a>
                <a className="hover:cursor-pointer hover:text-white/80 lowercase" href="">Philiosphy</a>
                <a className="hover:cursor-pointer hover:text-white/80 lowercase" href="">Service</a>
                <a className="hover:cursor-pointer hover:text-white/80 lowercase" href="">Contact</a>
            </div>

            <div className="flex justify-end w-30">
                <button className="hover:cursor-pointer hover:text-white/80">Sign in</button>
            </div>
        </nav>
    )
}