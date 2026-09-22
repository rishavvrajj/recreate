import NavBar from './NavBar'

export default function HeroSection() {
    return (
        <section className='h-screen w-full px-8 flex flex-col items-center'>
            <NavBar />
            <div className='h-[36vh] w-full text-[16rem] flex items-center leading-52 tracking-tight font-extrabold'>
                <span className='font-[ClashDisplay] text-zinc-900'>StudioM</span>
            </div>
            {/* <Footer /> */}
            <div className='flex w-full h-[54vh] py-8'>
                <div className='w-1/2 flex items-center mb-36'>
                    <p className='w-1/2 font-semibold text-base text-zinc-800'>A dynamic digital agency committed to enhancing user experiences by leveraging the latest advancements in technology, ensuring innovative and impactful solutions.</p>
                </div>
                <div className='h-full w-1/2 flex'>
                    <div className='flex flex-col w-2/5 space-y-4'>
                        <a className='text-lg font-bold text-zinc-900' href="">Brand Stratery</a>
                        <a className='text-lg font-bold text-zinc-700' href="">Product Design</a>
                        <a className='text-lg font-bold text-zinc-700' href="">Devlopment</a>
                        <a className='text-lg font-bold text-zinc-700' href="">Motion Design</a>
                    </div>
                    <div className='h-full w-full overflow-hidden'>
                        <img className='w-full h-full object-cover' src="/bg.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}