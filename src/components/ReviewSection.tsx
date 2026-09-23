import { Star } from "lucide-react";

const Stars = () => (
    <div className="flex space-x-2">
        <Star size={16} fill="black" />
        <Star size={16} fill="black" />
        <Star size={16} fill="black" />
        <Star size={16} fill="black" />
        <Star size={16} fill="black" />
    </div>
);

// Border classes per cell to recreate the 3×2 grid lines
export default function ReviewSection() {
    return (
        <section className="w-full h-full px-16 flex flex-col items-center justify-evenly space-y-8">
            <h1 className="font-[ClashDisplay] text-8xl text-left w-full text-zinc-900 py-2">
                Client reviews
            </h1>
            <div className="grid grid-cols-3 w-full">

                {/* Card 1 - Harper Jackson */}
                <div className="border-b border-r border-zinc-300">
                    <div className="flex flex-col items-start justify-between h-80 py-12">
                        <Stars />
                        <div className="w-3/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">I am working with Viragǒ studio️ was a pleasure.</h1>
                            <p className="text-xs text-zinc-800">"Their team turned our vision into a digital masterpiece, with stunning design and seamless functionality. We're thrilled with the results."</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p1.png" alt="Harper Jackson" />
                            <div>
                                <h1 className="text-lg text-zinc-900">Harper Jackson</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - Samantha L */}
                <div className="border-b border-zinc-300">
                    <div className="flex flex-col items-start justify-between h-80 p-12">
                        <Stars />
                        <div className="w-4/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">They took our ideas and turned them into a stunning reality</h1>
                            <p className="text-xs text-zinc-800">The expertise and dedication of this agency were evident from day one. Our project was completed on time, and the quality was exceptional.</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p2.png" alt="Samantha L" />
                            <div>
                                <h1 className="text-lg text-zinc-900">Samantha L</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 - James K */}
                <div className="border-b border-l border-zinc-300">
                    <div className="flex flex-col items-start justify-between h-80 p-12">
                        <Stars />
                        <div className="w-4/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">We felt supported every step of the way</h1>
                            <p className="text-xs text-zinc-800">I was impressed with their attention to detail and creativity. They not only met our goals but also provided innovative solutions we hadn't considered.</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p3.png" alt="James K" />
                            <div>
                                <h1 className="text-lg text-zinc-900">James K</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 - John H */}
                <div className="border-r border-zinc-300">
                    <div className="flex flex-col items-start justify-between h-80 py-12">
                        <Stars />
                        <div className="w-3/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">Thanks to this agency, our brand identity</h1>
                            <p className="text-xs text-zinc-800">The team was professional and responsive throughout the project. Our sales have increased significantly thanks to their strategic approach.</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p4.png" alt="John H" />
                            <div>
                                <h1 className="text-lg text-zinc-900">John H</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 5 - Rachel M */}
                <div className="">
                    <div className="flex flex-col items-start justify-between h-80 p-12">
                        <Stars />
                        <div className="w-4/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">They helped us connect with our audience like never before!</h1>
                            <p className="text-xs text-zinc-800">Their comprehensive understanding of digital marketing helped us reach a wider audience. We saw tangible results in just a few months!</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p5.png" alt="Rachel M" />
                            <div>
                                <h1 className="text-lg text-zinc-900">Rachel M</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 6 - David S */}
                <div className="border-l border-zinc-300">
                    <div className="flex flex-col items-start justify-between h-80 p-12">
                        <Stars />
                        <div className="w-4/5 space-y-2">
                            <h1 className="text-zinc-900 text-lg">Working with this agency transformed</h1>
                            <p className="text-xs text-zinc-800">I appreciated their collaborative spirit. They truly listened to our needs and tailored their services accordingly. Highly recommend!</p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <img className="rounded-full h-10" src="/p6.png" alt="David S" />
                            <div>
                                <h1 className="text-lg text-zinc-900">David S</h1>
                                <p className="text-sm text-zinc-600">Founder @agency</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
