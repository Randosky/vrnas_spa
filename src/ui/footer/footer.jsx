import React from 'react';
import LogoSvg from "../../svg/LogoSvg";
import FooterLinkTwitter from "../../svg/FooterLinkGithub";
import FooterLinkFacebook from "../../svg/FooterLinkFacebook";
import FooterLinkInstagram from "../../svg/FooterLinkInstagram";
import FooterLinkGithub from "../../svg/FooterLinkGithub";
import FooterAngleSvg from "../../svg/FooterAngleSvg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__angle">
                    <FooterAngleSvg/>
                </div>
                <div className="footer__top">
                    <div className="footer__contacts">
                        <LogoSvg/>
                        <div className="contacts__links">
                            <div className="contacts__contact">
                                <FooterLinkTwitter/>
                            </div>
                            <div className="contacts__contact">
                                <FooterLinkFacebook/>
                            </div>
                            <div className="contacts__contact">
                                <FooterLinkInstagram/>
                            </div>
                            <div className="contacts__contact">
                                <FooterLinkGithub/>
                            </div>
                        </div>
                    </div>
                    <ul className="footer__column">
                        <li className="footer__item footer__columnTitle">
                            Quicklinks
                        </li>
                        <li className="footer__item">
                            Home
                        </li>
                        <li className="footer__item">
                            Pricing Plan
                        </li>
                        <li className="footer__item">
                            Service
                        </li>
                        <li className="footer__item">
                            Blog
                        </li>
                        <li className="footer__item">
                            Our Team
                        </li>
                    </ul>
                    <ul className="footer__column">
                        <li className="footer__item footer__columnTitle">
                            Support
                        </li>
                        <li className="footer__item">
                            About us
                        </li>
                        <li className="footer__item">
                            Contact us
                        </li>
                        <li className="footer__item">
                            FAQ
                        </li>
                        <li className="footer__item">
                            Terms & Conditions
                        </li>
                        <li className="footer__item">
                            Privacy Policy
                        </li>
                    </ul>
                    <ul className="footer__column">
                        <li className="footer__item footer__columnTitle">
                            Need Help?
                        </li>
                        <li className="footer__item footer__address">
                            Tanjung Sari Street no.48, Pontianak City
                        </li>
                        <li className="footer__item footer__email">
                            Support@VRNas.com
                        </li>
                        <li className="footer__item footer__phone">
                            +123 456 7890
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <p className="footer_copyright">
                        © Copyright 2023, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
