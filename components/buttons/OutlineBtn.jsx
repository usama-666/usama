import Link from "next/link";
import React from "react";

const OutlineBtn = ({
    // type="submit",
    // onclick,
    href = "/",
    classname,
    children,
}) => {
    return (
        <Link
            href={href}
            // onclick={onclick}
            target={"_blank"}
            className={`${classname} px-3 md:px-8 py-2 md:py-4 border-blue-400 border-2  text-black  hover:bg-blue-500 hover:text-white flex items-center gap-3 `}
        >
            {children}
        </Link>
    );
};

export default OutlineBtn;
