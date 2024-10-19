import Image from "next/image";
import React from "react";

const ProjectCard = () => {
    return (
        <div className="relative bg-red-100 w-full h-full group ">
            <Image
                src={"/assets/images/proj.jpg"}
                alt="proe"
                width={1000}
                height={1000}
                className="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />

            {/* Button (hidden by default, shown on hover) */}
            <div className=" backdrop-blur-sm  border-2 absolute inset-0 flex justify-center items-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <a
                    href="#"
                    className="border-blue-400 px-4   py-2 border-2 rounded-full "
                >
                    Visit Now
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
