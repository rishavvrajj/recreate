export default function NavBar() {
    return (
        <nav className='flex items-center justify-between w-full h-[10vh] py-4 text-sm text-zinc-900 font-semibold tracking-widest'>
            <div className="text-3xl font-extrabold">StudioM</div>
            <div className="text-md space-x-12">
                <a href="">Projects</a>
                <a href="">Services</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}