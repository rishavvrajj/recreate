export default function WorkSection() {
    return (
        <div className="px-8 flex flex-col items-start justify-between w-full">
            <h1 className="font-[ClashDisplay] text-8xl text-zinc-900 py-2">Selected Works</h1>
            <div className="grid grid-cols-2 h-full w-full py-8 gap-16">
                <div className="flex flex-col justify-between space-y-2">
                    <div className="h-full w-full">
                        <img src="/card1.webp" alt="" />
                    </div>
                    <h6 className="text-xl font-bold">Vortex</h6>
                    <p className="space-x-2 text-sm text-zinc-600">
                        <span>Dashboard</span>
                        <span>/</span>
                        <span>Website</span>
                        <span>/</span>
                        <span>Development</span>
                    </p>
                </div>
                <div className="flex flex-col justify-between space-y-2">
                    <div className="h-full w-full">
                        <img src="/card2.webp" alt="" />
                    </div>
                    <h6 className="text-xl font-bold">Cloudly</h6>
                    <p className="space-x-2 text-sm text-zinc-600">
                        <span>Web app</span>
                        <span>/</span>
                        <span>Website</span>
                        <span>/</span>
                        <span>Development</span>
                    </p>
                </div>
                <div className="flex flex-col justify-between space-y-2">
                    <div className="h-full w-full">
                        <img src="/card3.webp" alt="" />
                    </div>
                    <h6 className="text-xl font-bold">Cloudly</h6>
                    <p className="space-x-2 text-sm text-zinc-600">
                        <span>Web design</span>
                        <span>/</span>
                        <span>Website</span>
                        <span>/</span>
                        <span>Development</span>
                    </p>
                </div>
                <div className="flex flex-col justify-between space-y-2">
                    <div className="h-full w-full">
                        <img src="/card4.webp" alt="" />
                    </div>
                    <h6 className="text-xl font-bold">Cloudly</h6>
                    <p className="space-x-2 text-sm text-zinc-600">
                        <span>App design</span>
                        <span>/</span>
                        <span>Website</span>
                        <span>/</span>
                        <span>Development</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
