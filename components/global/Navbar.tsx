"use client";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const routes = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 1,
        title: "About",
        path: "#experience",
    },
    {
        id: 1,
        title: "Project",
        path: "#project",
    },
    {
        id: 1,
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    };
    return (
        <div className="relative w-full bg-[#042366]    ">
            <div className="w-[90%]  h-[80px] mx-auto flex justify-between items-center ">
                <div className="logo  px-4">
                    <span className="text-white">
                        <Link href={"/"}>HIV</Link>
                    </span>
                </div>

                <div className="hidden md:flex md:items-center md:gap-20">
                    <ul className="   flex  justify-evenly  items-center gap-10 ">
                        {routes.map((route) => (
                            <Link
                                href={route.path}
                                key={route.id}
                                className="text-white text-center p-4  w-full   text-md"
                            >
                                {route.title}
                            </Link>
                        ))}
                    </ul>
                    <div>
                        <button className="px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 ">
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* //hamburger */}
                <div
                    className="  flex md:hidden justify-center items-center cursor-pointer"
                    onClick={handleToggle}
                >
                    {show ? (
                        <X size={25} color={"white"} />
                    ) : (
                        <AlignRight size={25} color={"white"} />
                    )}
                </div>
            </div>

            {/* mobile menu  */}
            <div className="fixed z-40 w-full bg-[#042366] flex md:hidden">
                {show && (
                    <div className="flex flex-col justify-center  items-center w-full md:hidden">
                        <ul className=" w-full   flex  flex-col  items-center gap-5 ">
                            {routes.map((route) => (
                                <Link
                                    href={route.path}
                                    key={route.id}
                                    onClick={handleToggle}
                                    className="text-white text-center p-4  w-full border border-slate-300 text-md hover:bg-slate-200 hover:text-blue-800"
                                >
                                    {route.title}
                                </Link>
                            ))}
                        </ul>
                        <div className="w-full py-5 flex justify-center">
                            <button className="w-2/4 px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600  mx-auto">
                                Hire Me
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
