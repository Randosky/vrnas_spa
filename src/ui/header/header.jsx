import React from 'react';
import "../../style/HomepageStyle/Homepage.css"
import {observer} from "mobx-react-lite";
import LogoSvg from "../../svg/LogoSvg";
import HeaderAngleSvg from "../../svg/HeaderAngleSvg";

const Header = observer(() => {
    return (
        <header className="homepage__header">
            <div className="header__container container">
                <div className="header__angle">
                    <HeaderAngleSvg/>
                </div>
                <LogoSvg/>
                <ul className="header__links">
                    <li className="links__link">
                        <span>
                            Home
                        </span>
                    </li>
                    <li className="links__link">
                        <span>
                            About&nbsp;us
                        </span>
                    </li>
                    <li className="links__link">
                        <span>
                            Service
                        </span>
                    </li>
                    <li className="links__link">
                        <span>
                            Page
                        </span>
                        <button className="link__button">
                        </button>
                    </li>
                    <li className="links__link">
                        <span>
                            Blog
                        </span>
                        <button className="link__button">
                        </button>
                    </li>
                </ul>
                <button className="header__button">
                    <span>
                        Contact&nbsp;us
                    </span>
                </button>
            </div>
        </header>
    );
})

export default Header;
