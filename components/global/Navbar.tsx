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
        path: "/about",
    },
    {
        id: 1,
        title: "Project",
        path: "/project",
    },
    {
        id: 1,
        title: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    const [show, setShow] = useState(true);

    const handleToggle = () => {
        setShow(!show);
    };
    return (
        <div className="w-full  bg-red-400  ">
            <div className="w-[90%]  h-[80px] mx-auto flex justify-between items-center ">
                <div className="logo  bg-blue-200 ">
                    <span className="text-black">HIV</span>
                </div>
                {show && (
                    <div className="hidden md:flex">
                        <ul className="   flex  flex-col justify-evenly  items-center ">
                            {routes.map((route) => (
                                <li key={route.id} className="px-4 ">
                                    <a href={route.path}>{route.title}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <button className="px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 ">
                                Hire Me
                            </button>
                        </div>
                    </div>
                )}

                {/* //hamburger */}
                <div
                    className="flex justify-center items-center cursor-pointer"
                    onClick={handleToggle}
                >
                    {show ? (
                        <X size={25} color={"white"} />
                    ) : (
                        <AlignRight size={25} color={"white"} />
                    )}
                </div>
            </div>

            <div className="bg-red-700">
                {/* mobile menu  */}
                {show && (
                    <div className="flex flex-col justify-center  items-center w-full md:hidden">
                        <ul className=" w-full   flex  flex-col  items-center gap-5 ">
                            {/* <li className="px-4 ">Home</li>
                        <li className="px-4 ">About</li>
                        <li className="px-4 ">Services</li>
                        <li className="px-4 ">Contact</li> */}

                            {routes.map((route) => (
                                <Link
                                    href={route.path}
                                    key={route.id}
                                    className=" text-center p-4  w-full border border-slate-300 text-md hover:bg-blue-100"
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
