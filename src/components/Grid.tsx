import { cn } from "@/lib/utils";
import { Brain, Zap, Layers } from "lucide-react";
import React from "react"

export default function Grid() {
    return (
        <div className="z-10 max-w-5xl h-full mx-auto relative flex items-center justify-center">
            <div className="absolute h-screen w-px right-0 bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-900 dark:via-neutral-600 dark:to-neutral-900"></div>
            <div className="absolute h-screen w-px left-0 bg-gradient-to-b from-neutral-100 via-neutral-400 to-neutral-100 dark:from-neutral-900 dark:via-neutral-600 dark:to-neutral-900"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Card className="border-b border-neutral-200 dark:border-neutral-900 lg:border-r">
                    <CardHeader>
                        <Brain />
                        <CardTitle>Model Playground</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        Explore LLMs side‑by‑side. Tweak prompts, compare outputs, and learn what each model is actually good at.
                    </CardDescription>
                    <CardSkeleton>
                        <div className="h-40 rounded-lg w-full" />
                    </CardSkeleton>
                </Card>

                <Card className="border-b border-neutral-200 dark:border-neutral-900 ">
                    <CardHeader>
                        <Zap />
                        <CardTitle>Smart Routing</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        Let the system pick the right model for each task. Balance speed, cost, and quality without thinking about providers.
                    </CardDescription>
                    <CardSkeleton>
                        <div className="h-40 rounded-lg w-full" />
                    </CardSkeleton>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <Layers />
                        <CardTitle>Unified Inference</CardTitle>
                    </CardHeader>
                    <CardDescription>
                        One API for every model. Manage keys, rate limits, and usage in a single place so you can focus on building, not dashboards.
                    </CardDescription>
                    <CardSkeleton>
                        <div className="h-40 rounded-lg w-full" />
                    </CardSkeleton>
                </Card>
            </div>
        </div>
    )
}

const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return <div className={cn("p-4 space-y-2", className)}>{children}</div>
}

const CardSkeleton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={cn(
                "min-h-40 w-full",
                "bg-[radial-gradient(var(--color-neutral-800)_1px,_transparent_1px)] dark:bg-[radial-gradient(var(--color-neutral-200)_1px,_transparent_1px)]",
                "[background-size:10px_10px]",
                // "mask-radial-from-10%",
                className
            )}
        >
            {children}
        </div>
    )
}

const CardHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center gap-2">{children}</div>
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
    return <div className="font-medium text-lg tracking-tight">{children}</div>
}

const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("text-sm text-neutral-400", className)}>{children}</div>
}