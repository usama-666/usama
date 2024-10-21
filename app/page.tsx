"use client";
import Header from "@/components/header/Header";
// import Hero from "@/components/Hero";
import Experience from "@/components/experience/Experience";
import Project from "@/components/project/Project";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/global/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
    const pathName = usePathname();
    useEffect(() => {
        console.log("rerender");
    }, [pathName]);
    return (
        <main className="">
            {/* <Hero /> */}

            <Header />
            <div className="h-40 bg-[#042366] w-full"></div>
            <Experience />
            <Project />

            <Testimonials />
            <div className="h-10"></div>
            <Footer />

            {/* <div className="w-full max-w-7xl">
                <h1>Hellow PortFolio</h1>
            </div> */}
        </main>
    );
}
