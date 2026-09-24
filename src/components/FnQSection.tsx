import { Plus } from "lucide-react";

export default function FnQSection() {
    return (
        <section className="w-full h-screen px-8 py-20 flex items-start justify-between space-y-8">
            <div className="font-[ClashDisplay] text-9xl text-zinc-900">FAQ</div>
            <div className="w-2/3 space-y-8">
                <p className="flex items-center justify-between text-2xl font-bold border-b border-zinc-400 py-4">Can you work with wireframes or our existing designs?<Plus /></p>
                <p className="flex items-center justify-between text-2xl font-bold border-b border-zinc-400 py-4">What happens after the design is ready & I approve it?<Plus /></p>
                <p className="flex items-center justify-between text-2xl font-bold border-b border-zinc-400 py-4">Do you charge for additional revisions?<Plus /></p>
                <p className="flex items-center justify-between text-2xl font-bold border-b border-zinc-400 py-4">I have an agency. Can I outsource work to you?<Plus /></p>
                <p className="flex items-center justify-between text-2xl font-bold border-b border-zinc-400 py-4">What do I need to give you to get started?<Plus /></p>
            </div>
        </section>
    )
}
