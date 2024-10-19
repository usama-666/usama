import Header from "@/components/header/Header";
// import Hero from "@/components/Hero";
import Experience from "@/components/experience/Experience";
import Project from "@/components/project/Project";
import Footer from "@/components/global/Footer";

export default function Home() {
    return (
        <main className="">
            {/* <Hero /> */}

            <Header />
            <div className="h-40 bg-[#042366] w-full"></div>
            <Experience />
            <Project />
            <Footer />

            {/* <div className="w-full max-w-7xl">
                <h1>Hellow PortFolio</h1>
            </div> */}
        </main>
    );
}
