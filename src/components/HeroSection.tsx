import { Star } from 'lucide-react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function HeroSection() {
    return (
        <section className='bg-black/5 mx-20 text-[#252525]'>
            <NavBar />
            <div className='flex flex-col items-center justify-center mx-8 h-[60vh]'>
                <div className="flex items-start justify-between w-full">
                    <div className="w-60 h-100">
                        <div className='flex flex-col items-start justify-between h-full'>
                            <div className='space-y-2'>
                                <img className='h-60 w-45' src="/profile.png" alt="" />
                                <div className='space-y-2'>
                                    <h1 className='text-lg font-semibold underline underline-offset-4'>ネクスヴィン</h1>
                                    <p className='text-sm text-[#818181]'>Nexvyn <br />reverse-engineer <br /> design, dev, reverse</p>
                                </div>
                            </div>
                            <p className='text-sm text-[#4f4e4e] font-semibold text-justify'>Hi, I'm Nexvyn. I'm a design engineer who cares about the details.</p>
                        </div>
                    </div>
                    <div className="w-108 h-100 flex flex-col items-start justify-between space-y-2">
                        <div className='w-full space-y-2'>
                            <h1 className='flex items-center justify-between'>
                                <span className='text-md italic font-semibold tracking-widest'>nexvyn/ui</span>
                                <span className='flex items-center gap-1 text-sm font-semibold tracking-widest'><Star className='' fill='' size={12} />202</span>
                            </h1>
                            <img className='border-[#a0a0a0] w-full h-70 border-2 rounded-lg' src="/p1.png" alt="" />
                        </div>
                        <p className='text-sm text-justify text-[#4f4e4e] font-semibold'>Animated UI components built with spring physics and fluid interactions. Crafted for shadcn/ui and Radix primitives. Drop-in components that make every state change feel natural.</p>
                    </div>
                    <div className="w-108 h-100 flex flex-col items-start justify-between space-y-2">
                        <div className='w-full space-y-2'>
                            <h1 className='flex items-center justify-between'>
                                <span className='text-md italic font-semibold tracking-widest'>rune icons</span>
                                <span className='flex items-center gap-1 text-sm font-semibold tracking-widest'><Star className='' fill='' size={12} />522</span>
                            </h1>
                            <img className='border-[#a0a0a0] w-full h-70 border-2 rounded-lg' src="/p2.png" alt="" />
                        </div>
                        <p className='text-sm text-justify text-[#4f4e4e] font-semibold'>Open-source icon library with 900+ icons, each available in five distinct styles. Built for fast searching, reshaping, and copying icons as SVG or JSX.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
