export default function StatsSection() {
    return (
        <section className="w-full px-8 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-48 py-36">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">98%</h1>
                    <h3 className="text-2xl text-zinc-600">Satisfied clients</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">08</h1>
                    <h3 className="text-2xl text-zinc-600">Award winner</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">14+</h1>
                    <h3 className="text-2xl text-zinc-600">Industries served</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">60+</h1>
                    <h3 className="text-2xl text-zinc-600">Projects completed</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">12</h1>
                    <h3 className="text-2xl text-zinc-600">Years of experience</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-9xl font-bold leading-none">8M+</h1>
                    <h3 className="text-2xl text-zinc-600">Fundraised for clients</h3>
                </div>
            </div>
        </section>
    )
}
