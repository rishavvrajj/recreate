import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="min-h-screen w-full flex">
            <div className="w-1/2 flex flex-col items-start justify-center pl-8 pr-16 space-y-12">
                <h1 className="font-[ClashDisplay] text-8xl text-zinc-900">Contact us</h1>
                <div className="flex w-full justify-between pr-12">
                    <div className="flex flex-col space-y-4">
                        <h6 className="font-bold text-lg text-zinc-900">Main</h6>
                        <div className="flex flex-col space-y-4 text-zinc-600 font-medium">
                            <a href="#" className="hover:text-zinc-900 transition-colors">Home</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">About</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Projects</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Project Single</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h6 className="font-bold text-lg text-zinc-900">Others</h6>
                        <div className="flex flex-col space-y-4 text-zinc-600 font-medium">
                            <a href="#" className="hover:text-zinc-900 transition-colors">Services</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Blog</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Blog single</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Contact</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h6 className="font-bold text-lg text-zinc-900">Utility Pages</h6>
                        <div className="flex flex-col space-y-4 text-zinc-600 font-medium">
                            <a href="#" className="hover:text-zinc-900 transition-colors">Style Guide</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Licenses</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Changelog</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">Password Protected</a>
                            <a href="#" className="hover:text-zinc-900 transition-colors">404 Page</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/2 min-h-screen flex items-end justify-end mb-24 pr-8 pl-16">
                <div className="w-3/4 space-y-8">
                    <h1 className="font-[ClashDisplay] text-3xl text-zinc-900">Send a line about your project</h1>
                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col space-y-4 border-b border-zinc-900 pb-2">
                            <label className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full focus:ring-0 px-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 border-b border-zinc-900 pb-2">
                            <label className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full focus:ring-0 px-0"
                            />
                        </div>
                        <div className="flex flex-col space-y-4 border-b border-zinc-900 pb-2">
                            <label className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Your Message</label>
                            <textarea
                                placeholder="Enter your message"
                                rows={1}
                                className="bg-transparent border-none outline-none text-white placeholder-zinc-500 w-full focus:ring-0 px-0 resize-none"
                            />
                        </div>
                        <button className="flex items-center justify-center w-full space-x-2 bg-black text-white px-6 py-3 font-semibold transition-colors mt-4">
                            <span>Send Messages</span>
                            <ArrowUpRight size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
