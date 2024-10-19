import React from "react";

const Wrapper = ({ width, children }) => {
    return <div className={`${width} mx-auto`}>{children}</div>;
};

export default Wrapper;
