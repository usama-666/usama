import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const OutlineBtn = ({
    // type="submit",
    // onclick,
    href = "/",
    classname,
    children,
}) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <Link
                href={href}
                // onclick={onclick}
                target={"_blank"}
                className={`${classname} text-nowrap  px-3 sm:px-5 md:px-8 py-2 md:py-4 border-blue-400 border-2  text-black  hover:bg-blue-500 hover:text-white flex items-center gap-3 `}
            >
                {children}
            </Link>
        </motion.button>
    );
};

export default OutlineBtn;
