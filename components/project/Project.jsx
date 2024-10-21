"use client";
import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import OutlineBtn from "../buttons/OutlineBtn";
import Wrapper from "../global/Wrapper";
import { motion } from "framer-motion";

const Project = () => {
    const [showProject, setShowProject] = useState(false);

    const toggleProject = () => {
        setShowProject(!showProject);
    };
    return (
        <Wrapper width="w-[95%] md:w-[70%]">
            <div
                className="p-5 mt-5 md:p-10 md:mb-10  scroll-pt-20"
                id="project"
            >
                <h1 className="text-center text-2xl font-bold">
                    My Recent Projects
                </h1>

                <p className="text-center text-gray-500 my-5">
                    Here are some of my recent projects that I've worked on.
                </p>

                <div className="grid grid-cols-6 grid-row-3 gap-2 ">
                    {/* row 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:col-span-4 col-span-6 md:row-span-2"
                    >
                        <ProjectCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:col-span-2 col-span-6 md:row-span-1"
                    >
                        <ProjectCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:col-span-2 col-span-6 md:row-span-1"
                    >
                        <ProjectCard />
                    </motion.div>

                    {/* row-2  */}
                    {/* <div className="row-span-1 md:row-span-3 col-span-6 md:col-span-2">
                        <ProjectCard />
                    </div>
                    <div className="row-span-1 md:row-span-3 col-span-6 md:col-span-4">
                        <ProjectCard />
                    </div> */}
                    {/* <div className="row-span-1 md:row-span-1 col-span-6 md:col-span-1">
                        <ProjectCard />
                    </div> */}

                    {/* row-3  */}
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 hidden md:flex"
                    >
                        <ProjectCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 hidden md:flex"
                    >
                        <ProjectCard />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        // animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 hidden md:flex"
                    >
                        <ProjectCard />
                    </motion.div>

                    {showProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                // animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 md:hidden"
                            >
                                <ProjectCard />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                // animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 md:hidden"
                            >
                                <ProjectCard />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 150 }}
                                // animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.2 }}
                                className="row-span-1 md:row-span-1 col-span-6 md:col-span-2 md:hidden"
                            >
                                <ProjectCard />
                            </motion.div>
                        </>
                    )}
                </div>

                <div className=" flex md:hidden justify-center my-5">
                    <OutlineBtn
                        // href="/projects"
                        classname={"px-3 py-2 rounded-md text-sm md:text-lg "}
                        onclick={toggleProject}
                    >
                        {showProject ? "Hide Psrojects" : "View More Projects"}
                        {/* View More Projects */}
                    </OutlineBtn>
                </div>
            </div>
        </Wrapper>
    );
};

export default Project;
