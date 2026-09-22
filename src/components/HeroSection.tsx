import Footer from './Footer'
import NavBar from './NavBar'

export default function HeroSection() {
    return (
        <section className='min-h-screen w-full px-8 flex flex-col items-center justify-between bg-[#F2F1ED]'>
            <NavBar />
            <div className='flex items-end w-full h-[64vh]'>
                <div className='w-1/2 h-100'></div>
                <div className='w-1/4 h-90 mb-0.5'>
                    <img className='mb-1' src="/profile.png" alt="" />
                </div>
            </div>
            <Footer />
        </section>
    )
}
