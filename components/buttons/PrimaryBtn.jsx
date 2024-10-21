"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const PrimaryBtn = ({
    // type="submit",
    onclick,
    href = "/",
    classname,
    children,
}) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <Link
                href={href}
                // onclick={onclick}
                className={`${classname} text-nowrap px-3 md:px-8 py-2 md:py-4 border-blue-500 bprde-2 bg-blue-500 text-white  hover:bg-blue-600 flex items-center gap-3 `}
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default PrimaryBtn;
