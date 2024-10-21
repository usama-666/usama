import React from "react";
import OutlineBtn from "@/components/buttons/OutlineBtn";
import PrimaryBtn from "@/components/buttons/PrimaryBtn";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
const Footer = () => {
    return (
        <div className=" relative" id="contact">
            <div className="w-[90%] md:w-[80%]  mx-auto relative border-t-[3px] border-t-blue-400 bg-white -mb-10 z-10 p-4 rounded-md">
                <h1 className="font-bold text-lg">Start a Project</h1>
                <p className=" md:w-2/4 text-start md:text-center">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <div className="flex gap-3 text-sm md:text-md my-2 ">
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

            <div className="bg-[#151C24] h-72 flex justify-center items-center relative ">
                <div className=" flex flex-col gap-10 justify-center items-center h-48 py-5">
                    <p className="text-white text-md ">
                        �� 2024 by Usama. All rights reserved.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="w-2/3 md:w-1/3  flex justify-evenly items-center "
                    >
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
