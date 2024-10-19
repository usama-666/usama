import { Download, Send } from "lucide-react";
import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";
import OutlineBtn from "../buttons/OutlineBtn";

const Header = () => {
    return (
        <div className="w-full flex justify-center items-center bg-[#042366] py-10 md:py-20 text-white">
            <div className="w-[90%] md:w-1/2 flex flex-col  gap-10">
                <div className="mx-auto ">
                    <h3 className=" border-b-2 border-b-blue-400 rounded-md pb-2">
                        Welcome to Usama Dev
                    </h3>
                </div>

                <div>
                    <h1 className="capitalize text-2xl md:text-4xl text-center font-bold">
                        Freelance Full Stack Developer, Experienced in Crafting
                        High-Performance Web Solutions with Latest Technologies
                    </h1>
                </div>
                <div>
                    <p className="text-slate-300 text-center text-sm  md:text-md">
                        I am Usama Riaz, a dedicated software developer
                        specializing in web development with expertise in
                        ReactJS, ExpressJS, and MongoDB. I focus on building
                        intuitive, scalable, and reusable web solutions,
                        blending clean design with powerful functionality. Let’s
                        work together to bring your ideas to life!
                    </p>
                </div>
                <div className=" mx-auto flex justify-center gap-5 items-center">
                    {/* <PrimaryBtn>Hire Me</PrimaryBtn> */}
                    <PrimaryBtn classname="px-3 md:px-8 py-2 md:py-4 border-blue-500 bprde-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-3">
                        <span>Hire Me</span>
                        <span>
                            <Send />
                        </span>
                    </PrimaryBtn>

                    <OutlineBtn classname="px-4 md:px-8 py-2 md:py-4 border-2 border-blue-500 text-white rounded-md hover:bg-blue-500  flex items-center gap-3">
                        <span>
                            <Download />
                        </span>
                        <span>Download CV</span>
                    </OutlineBtn>
                </div>
            </div>
        </div>
    );
};

export default Header;
