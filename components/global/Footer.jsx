import React from "react";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";
import Link from "next/link";
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    MessageCircle,
} from "lucide-react";
const Footer = () => {
    return (
        <div className="relative " id="contact">
            <div className="h-40 md:h-10 bg-white"></div>
            {/* White card positioned in the middle */}
            <div className="absolute w-[90%] md:w-[80%] left-1/2 transform -translate-x-1/2 -top-5 md:-top-10 bg-white text-black flex flex-col gap-5 md:flex-row border-2 rounded-md py-10 px-5 justify-center items-center">
                <h1 className="font-bold">Start a Project</h1>
                <p className=" md:w-2/4 text-center">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <div className="flex gap-3">
                    <OutlineBtn
                        href="mailto:osamariaz369@gmail.com"
                        classname={"rounded-full "}
                    >
                        Contact Me
                    </OutlineBtn>
                    <PrimaryBtn href="/" classname={"rounded-full"}>
                        Learn More
                    </PrimaryBtn>
                </div>
            </div>

            <div className="bg-[#151C24] h-72">
                <div className=" flex flex-col gap-10 justify-center items-center h-full py-5">
                    <p className="text-white text-md ">
                        �� 2024 by Usama. All rights reserved.
                    </p>

                    <div className="w-2/3 md:w-1/3  flex justify-evenly items-center ">
                        <Link
                            href={"https://github.com/usama-666"}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className="w-10 h-10 md:w-16 md:h-16 border-2 text-white border-blue-500 hover:bg-blue-400 hover:text-white rounded-full flex justify-center items-center cursor-pointer ">
                                <Github className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </div>
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/usama-riaz666"}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className="w-10 h-10 md:w-16 md:h-16 border-2 text-white border-blue-500 hover:bg-blue-400 hover:text-white rounded-full flex justify-center items-center cursor-pointer ">
                                <Linkedin className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </div>
                        </Link>

                        <Link
                            href="https://wa.me/923145454494" // Replace with your number
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <div className="w-10 h-10 md:w-16 md:h-16 border-2 text-white border-blue-500 hover:bg-blue-400 hover:text-white rounded-full flex justify-center items-center cursor-pointer ">
                                <MessageCircle className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
