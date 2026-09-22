export default function ClientSection() {
  return (
    <section className='w-full h-screen px-8 flex flex-col items-center justify-evenly'>
        <h1 className='font-[ClashDisplay] text-8xl text-left w-full text-zinc-900 py-2'>Latest Clients</h1>
        <div className='grid grid-cols-5 w-full h-1/2'>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l1.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l2.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l3.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l4.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l5.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l3.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l2.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l1.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l5.svg" alt="" />
            </div>
            <div className='flex items-center justify-center h-full w-full border border-zinc-400'>
                <img src="/l4.svg" alt="" />
            </div>
        </div>
    </section>
  )
}
