import { ArrowDownLeft, ArrowDownRight } from 'lucide-react'
import Footer from './Footer'
import NavBar from './NavBar'

export default function HeroSection() {
    return (
        <section className=''>
            <NavBar />
            <div className='flex items-end justify-between px-8 h-[35vh] w-full space-y-2 bg-[#BCBDB5]'>
                <div className='h-50 w-full mb-12 -ml-8 '>
                    <img className='scale-y-[-1]' src="png.png" alt="" />
                </div>
                <div className='flex flex-col items-end justify-end space-y-4'>
                    <h1 className='text-white text-3xl font-bold leading-none tracking-widest'>03-2</h1>
                    <h2 className='text-white text-5xl font-bold leading-none tracking-widest flex items-end gap-8'><ArrowDownLeft size={36} /> 中国人中国</h2>
                    <h2 className='text-black text-9xl font-bold leading-26'>Negative</h2>
                </div>
            </div>
            <div className='flex items-center justify-center px-8 space-x-12 h-[55vh] bg-[#E6E6DA]'>
                <div className='h-[30vh] w-[30vw] leading-26 flex items-end justify-center text-9xl text-[#BCBDB5] font-bold'>
                    03
                </div>
                <div className='h-[30vh] w-[30vw] font-semibold space-y-4 flex flex-col items-start justify-end'>
                    <h6 className='text-xs'>
                        <span>A.&nbsp;&nbsp; THE SEED FEELING AT EASE <br /></span>
                        <span>B.&nbsp;&nbsp; SHAPE OF DESIRE <br /></span>
                        <span>C.&nbsp;&nbsp; PERFECT GRAPHIC DESIGN</span>
                    </h6>
                    <p className='text-xs'>
                        Maintaining a desired mental state, but not every spring rule
                        will arrive as scheduled, so just wait quietly. The more
                        restless you become, the more energy gets lost.
                    </p>
                </div>
                <div className='h-[30vh] w-[30vw] flex items-end justify-end'>
                    <div className='m-0 p-0 flex items-end justify-center w-1/2 h-full'>
                        <ArrowDownRight className='block text-[#BCBDB5] -m-12 p-0' size={212} />
                    </div>
                    <div className='w-1/2 whitespace-pre-line space-y-8 font-bold'>
                        <h6 className='text-end text-md'>
                            01. 混成界分
                        </h6>
                        <p className='text-xs text-justify'>
                            Maintain a desired mental
                            state, but not every spring
                            rainfall will arrive as
                            scheduled, so just wait
                            quietly.
                        </p>
                    </div>
                </div>
                <div className='flex h-[30vh] w-[30vw]'>
                    <div className='h-full w-1/2'>
                        <img src="/image.png" alt="" />
                    </div>
                    <div className='w-1/2 px-4 flex flex-col items-end justify-end space-y-8'>
                        <h1 className='text-sm font-medium'><span className='font-bold'>Seed</span><br /> <p className='font-semibold text-[9px] tracking-tight leading-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></h1>
                        <h1 className='text-sm font-medium'><span className='font-bold'>Seed</span><br /> <p className='font-semibold text-[9px] tracking-tight leading-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p></h1>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
