import React from "react";

const ExpCard = ({ title, desc, company, tags }) => {
    return (
        <div className="  bg-white flex flex-col gap-2 p-5 rounded-xl border-y-4 border-blue-400">
            <div className="flex gap-3">
                <p className="p-5">w</p>
                <p className="p-5">x</p>
                <p className="p-5">a</p>
                <p className="p-5">w</p>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex items-center gap-5 ">
                <h2 className="text-xl ">{company}</h2>
                <div className="text-gray-500 ">2018 - 2021</div>
            </div>

            <p>{desc}</p>

            <div className="flex gap-1 items-center flex-wrap my-3">
                {/* <div className="border-[2px] border-blue-400 px-2 rounded-sm ">
                    web develoer
                </div>
                <div className="border-[2px] border-blue-400 px-2 rounded-sm ">
                    react dev
                </div>
                <div className="border-[2px] border-blue-400 px-2 rounded-sm ">
                    web
                </div> */}

                {tags?.map((tag, index) => (
                    <div
                        className="border-[2px] border-blue-400 px-2 rounded-sm "
                        key={index}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpCard;
