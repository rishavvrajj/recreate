import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishav Raj",
  description:
    "I reverse‑engineer designs I like and rebuild them to learn. 19‑year‑old full‑stack developer using business analysis, product design, and engineering to craft simple, personal tools.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://recreate-murex.vercel.app",
    siteName: "Rishav Raj",
    title: "Rishav Raj — reverse‑engineering designs to learn",
    description:
      "I reverse‑engineer designs I like and rebuild them to learn. 19‑year‑old full‑stack developer using business analysis, product design, and engineering to craft simple, personal tools.",
    images: [
      {
        url: "/openGraph.png",
        width: 1200,
        height: 630,
        alt: "rishav — reverse‑engineering designs to learn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Raj — reverse‑engineering designs to learn",
    description:
      "I reverse‑engineer designs I like and rebuild them to learn. 19‑year‑old full‑stack developer using business analysis, product design, and engineering to craft simple, personal tools.",
    images: ["/openGraph.png"],
    creator: "@rishavvrajj", // update if you have a different handle
  },
  keywords: [
    "Rishav Raj",
    "full-stack developer",
    "product designer",
    "business analyst",
    "React",
    "Next.js",
    "TypeScript",
    "AI engineer",
    "early-stage founder",
    "open source",
    "voice AI",
    "startup founder",
    "reverse engineering designs",
    "learning by building",
  ],
  authors: [{ name: "Rishav Raj", url: "https://github.com/rishavvrajj" }],
  category: "Technology",
  robots: "index, follow",
  alternates: {
    canonical: "https://recreate-murex.vercel.app",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased [--pattern-fg:var(--color-neutral-950)]/10 dark:[--pattern-fg:var(--color-white)]/5`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}