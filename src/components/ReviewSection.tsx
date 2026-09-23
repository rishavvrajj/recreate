import { Star } from "lucide-react";

const reviews = [
    {
        title: "I am working with Viragǒ studio️ was a pleasure.",
        body: "\"Their team turned our vision into a digital masterpiece, with stunning design and seamless functionality. We're thrilled with the results.\"",
        name: "Harper Jackson",
        role: "Founder @agency",
        img: "/p1.png",
    },
    {
        title: "They took our ideas and turned them into a stunning reality",
        body: "The expertise and dedication of this agency were evident from day one. Our project was completed on time, and the quality was exceptional.",
        name: "Samantha L",
        role: "Founder @agency",
        img: "/p2.png",
    },
    {
        title: "We felt supported every step of the way",
        body: "I was impressed with their attention to detail and creativity. They not only met our goals but also provided innovative solutions we hadn't considered.",
        name: "James K",
        role: "Founder @agency",
        img: "/p3.png",
    },
    {
        title: "Thanks to this agency, our brand identity",
        body: "The team was professional and responsive throughout the project. Our sales have increased significantly thanks to their strategic approach.",
        name: "John H",
        role: "Founder @agency",
        img: "/p4.png",
    },
    {
        title: "They helped us connect with our audience like never before!",
        body: "Their comprehensive understanding of digital marketing helped us reach a wider audience. We saw tangible results in just a few months!",
        name: "Rachel M",
        role: "Founder @agency",
        img: "/p5.png",
    },
    {
        title: "Working with this agency transformed",
        body: "I appreciated their collaborative spirit. They truly listened to our needs and tailored their services accordingly. Highly recommend!",
        name: "David S",
        role: "Founder @agency",
        img: "/p6.png",
    },
];

const Stars = () => (
    <div className="flex space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill="black" />
        ))}
    </div>
);

// Border classes per cell to recreate the 3×2 grid lines
const borderClasses = [
    "border-b border-r border-zinc-300",
    "border-b border-zinc-300",
    "border-b border-l border-zinc-300",
    "border-r border-zinc-300",
    "",
    "border-l border-zinc-300",
];

export default function ReviewSection() {
    return (
        <section className="w-full h-screen px-8 flex flex-col items-center justify-evenly space-y-8">
            <h1 className="font-[ClashDisplay] text-8xl text-left w-full text-zinc-900 py-2">
                Client reviews
            </h1>
            <div className="grid grid-cols-3 w-full">
                {reviews.map((review, idx) => (
                    <div key={idx} className={borderClasses[idx]}>
                        <div className="flex flex-col items-start justify-between h-80 p-12">
                            <Stars />
                            <div className="w-2/3 space-y-2">
                                <h1 className="text-zinc-900 text-lg">{review.title}</h1>
                                <p className="text-xs text-zinc-800">{review.body}</p>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <img className="rounded-full h-10" src={review.img || '/p1.webp'} alt={review.name} />
                                <div>
                                    <h1 className="text-lg text-zinc-900">{review.name}</h1>
                                    <p className="text-sm text-zinc-600">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
