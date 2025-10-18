import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NodeMapBackground from "@/components/NodeMapBackground";
/* Custom Components */
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello World!",
  description: "NextJS Portfolio and project site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >

      <div className="relative min-h-screen">
        {/* Cosmetic node map background */}
        <NodeMapBackground
          className="absolute inset-0 -z-10"
          interactive={false}     // no pointer interaction
          speed={0.9}             // gentle drift
          density={0.50}          // light touch (adjust 0.04–0.08)
          maxConnectionDistance={120}
          nodeColor="rgba(148,163,184,0.75)"  // slate-400-ish
          lineColor="rgba(148,163,184,0.28)"
          baseNodeRadius={1.1}
        />


        {/* Navbar stays at top */}
        <Navbar />

        {/* Main content fills remaining space */}
        <main className="flex-1" >
          {children}
        </main>

      </div>
        
      </body>
    </html>
  );
}
