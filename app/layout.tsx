"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    > */}
                <div className=" relative   overflow-hidden">
                    <div className="text-white relative flex justify-center items-center flex-col  mx-auto px-5 sm:px-10 w-full  bg-[#042366]"></div>
                    <Navbar />
                    {children}
                </div>
                {/* </motion.div>
                </AnimatePresence> */}
            </body>
        </html>
    );
}
