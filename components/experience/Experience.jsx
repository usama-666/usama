import React from "react";
import ExpCard from "../cards/ExpCard";
const Experience = () => {
    return (
        <div
            className="-mt-32 w-[90%] md:w-[70%] mx-auto flex flex-col "
            id="experience"
        >
            <div className="grid  md:grid-cols-2  gap-5 ">
                <div className="col-span-2">
                    <ExpCard
                        title="Full Stack Developer"
                        company={"Sparkleo"}
                        desc="Developed scalable full-stack web applications using the MERN stack. Led frontend and backend development with a focus on performance optimization and best practices."
                        tags={[
                            "ReactJS",
                            "NodeJS",
                            "MSSQL",
                            "Azure",
                            "RESTful APIs",
                        ]}
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ExpCard
                        title={"Frontend Developer"}
                        company={"Game Drift Technologies"}
                        desc="Developed frontend components using ReactJS and improved UI/UX design with MUI. Collaborated with the backend team to ensure seamless integration and improved app performance."
                        tags={["ReactJS", "Tailwind CSS", "Git", "Bootstrap"]}
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ExpCard
                        title={"Backend Developer"}
                        company={"Doc-Q"}
                        desc="Collaborated with cross-functional teams to streamline project workflows and deliver high-quality solutions. Developed versatile web applications with  Backend in Node JS using ExpressJS."
                        tags={[
                            "ReactJS",
                            "NodeJS",
                            "MSSQL",
                            "Azure",
                            "RESTful APIs",
                        ]}
                    />
                </div>
                <div className="col-span-2">
                    <ExpCard
                        title="Freelance Development"
                        desc="Engineered an intuitive interface using ReactJS and NodeJS, managing state with Context API. Utilized MongoDB for backend services and developed a decentralized NFT marketplace using Solidity and ERC721 smart contracts."
                        company="SoulClub"
                        tags={[
                            "ReactJS",
                            "NodeJS",
                            "MongoDB",
                            "ERC721",
                            "RESTful APIs",
                            "Blockchain",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
