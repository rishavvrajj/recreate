export default function NavBar() {
    return (
        <nav className='flex items-start justify-between mx-8 h-[18vh] w-full text-sm font-semibold tracking-widest'>
            <div className="text-8xl">Izumi miyamura</div>
            <div className="space-x-40 py-4">
                <a href="">About</a>
                <a href="">Latest Work</a>
                <a href="">Archive</a>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}