import React from "react";

const Client = ({ card }) => {
    return (
        <div className="w-full border-t-4 rounded-t-xl border-t-blue-400 col-span-3 md:col-span-1 shadow-xl p-5">
            <div className="flex justify-center items-center mt-10 ">
                <div className="w-20 h-20 rounded-full ">
                    <img
                        src={card.image}
                        alt={`${card.name} profile`}
                        className="w-full h-full rounded-full shadow-xl"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center">
                <p className="m-3 text-justify ">{card.comment}</p>
                <h1 className="font-bold">{card.name}</h1>
                <h2>{card.title}</h2>
            </div>
        </div>
    );
};

export default Client;
