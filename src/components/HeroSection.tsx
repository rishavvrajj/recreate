import NavBar from './NavBar'
import Footer from './Footer'

export default function HeroSection() {
    return (
        <div className='flex flex-col justify-between w-full min-h-screen'>
            <NavBar />
            <div className='flex w-full h-[87vh] px-4'>
                <div className='flex flex-col items-start justify-center w-1/2 space-y-16'>
                    <div className='flex items-start'>
                        <div className='text-[20vh] whitespace-nowrap capitalize leading-none'>hori kyoko</div><span className='text-3xl py-12 font-bold'>&copy;</span>
                    </div>
                    <div className='flex'>
                        <p className='w-1/2 text-center font-medium'>[ Intro ]</p>
                        <p className='w-1/2 px-2 text-xs font-medium tracking-normal'>
                            Kyoko Hori is a popular and hardworking high school student who balances school life with caring for her family. After discovering Izumi Miyamura’s hidden personality, the two form a meaningful connection that gradually develops into love.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-end w-1/2 h-[90vh] space-y-8'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl'>/001</h1>
                        <div className='h-106 w-106 bg-black'>
                            <img src="/image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
