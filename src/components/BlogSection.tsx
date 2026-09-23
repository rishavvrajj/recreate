export default function BlogSection() {
    return (
        <div className="w-full flex-col h-screen px-12 flex items-start justify-between">
            <h1 className="font-[clashdisplay] text-8xl">Blog & articles</h1>
            <div className="grid grid-cols-3 h-full w-full items-center gap-6">
                <div className="py-4 space-y-4 flex flex-col justify-center">
                    <div className="h-4/5 w-full overflow-hidden">
                        <img className="" src="/f1.webp" alt="" />
                    </div>
                    <p className="text-2xl font-bold">How to use data-driven design for better user outcomes</p>
                </div>
                <div className="py-4 space-y-4 flex flex-col justify-center">
                    <div className="h-4/5 w-full overflow-hidden">
                        <img className="" src="/f2.webp" alt="" />
                    </div>
                    <p className="text-2xl font-bold">How to tell if it’s time for a website redesign</p>
                </div>
                <div className="py-4 space-y-4 flex flex-col justify-center">
                    <div className="h-4/5 w-full overflow-hidden">
                        <img className="" src="/f3.webp" alt="" />
                    </div>
                    <p className="text-2xl font-bold">5 common UX design mistakes and how to avoid them</p>
                </div>
            </div>
        </div>
    )
}
