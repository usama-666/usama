import Link from "next/link";
import React from "react";

const PrimaryBtn = ({
    // type="submit",
    onclick,
    href = "/",
    classname,
    children,
}) => {
    return (
        <Link
            href={href}
            // onclick={onclick}
            className={`${classname} px-3 md:px-8 py-2 md:py-4 border-blue-500 bprde-2 bg-blue-500 text-white  hover:bg-blue-600 flex items-center gap-3 `}
        >
            {children}
        </Link>
    );
};

export default PrimaryBtn;
