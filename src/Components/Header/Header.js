import React from "react";

// Components
import Limit from "../Generics/Limit/Limit";

// Styles
import "./Header.scss";

// Logos
import Stefanini from "../../Assets/img/stefanini.png";
import Hp from "../../Assets/img/hp-logo.png";

const Header = () => {
    return (
        <div className="header">
            <Limit styles={"header-limit"}>
                <a
                    href="/"
                    className="header-logo"
                    title="Stefanini feat. Harry Potter"
                >
                    <span className="cinzel-decorative-bold">
                        <img src={Stefanini} alt="Stefanini logo" />
                        feat.
                    </span>
                    <img src={Hp} alt="Harry Potter" />
                </a>
            </Limit>
        </div>
    );
};

export default Header;
