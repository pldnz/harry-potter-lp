import React from "react";

import "./Limit.scss";

const Limit = ({ styles, children }) => {
    return <div className={`limit ${styles}`}>{children}</div>;
};

export default Limit;
