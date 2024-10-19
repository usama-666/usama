import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/global/Navbar";

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

export const metadata: Metadata = {
    title: "Usama Portfolio",
    description: "Created in Next JS with Acernity UI",
};

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
                <div className=" relative   overflow-hidden">
                    <div className="text-white relative flex justify-center items-center flex-col  mx-auto px-5 sm:px-10 w-full  bg-[#042366]"></div>
                    <Navbar />
                    {children}
                </div>
                <div className="w-full h-10 bg-red-400"></div>
            </body>
        </html>
    );
}
