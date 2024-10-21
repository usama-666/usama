import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const OutlineBtn = ({ onclick, href, classname, children }) => {
    // Check if 'href' is provided. If yes, render Link, otherwise render a button.
    return href ? (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
            <Link
                href={href}
                className={`${classname} text-nowrap px-3 sm:px-5 md:px-8 py-2 md:py-4 border-blue-400 border-2 text-black hover:bg-blue-500 hover:text-white flex items-center gap-3`}
            >
                {children}
            </Link>
        </motion.div>
    ) : (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.0 }}
            onClick={onclick}
            className={`${classname} text-nowrap px-3 sm:px-5 md:px-8 py-2 md:py-4 border-blue-400 border-2 text-black hover:bg-blue-500 hover:text-white flex items-center gap-3`}
        >
            {children}
        </motion.button>
    );
};

export default OutlineBtn;
