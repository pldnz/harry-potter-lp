import React from "react";

import "./Footer.scss";
import Limit from "../Generics/Limit/Limit";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Limit styles={"footer-limit"}>
                    <a
                        href="https://www.linkedin.com/in/pldnz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Paulo Diniz - 2024
                    </a>
                </Limit>
            </div>
        </>
    );
};

export default Footer;
