import React from 'react';
import PlayButton from "../../svg/PlayButton";
import AboutVideo from "../../svg/AboutVideo";
import {observer} from "mobx-react-lite";
import aboutBG from "../../img/AboutBg.png";

const HomepageAbout = observer(
    () => {
        return (
            <section className="homepage__about">
                <div className="about__container container">
                    <div className="about__image" data-aos="fade-right" data-aos-duration="1800">
                        <img src={aboutBG} alt="man in glasses"/>
                        <div className="about__video">
                            <AboutVideo/>
                            <div className="video__button">
                                <PlayButton/>
                            </div>
                        </div>
                    </div>
                    <div className="about__content">
                        <p className="about__name" data-aos="fade-up" data-aos-duration="1000">
                            about&nbsp;us
                        </p>
                        <h2 className="about__title" data-aos="fade-up" data-aos-duration="1200">
                            Bring your events to&nbsp;life like never before with our&nbsp;VR services.
                        </h2>
                        <p className="about__description" data-aos="fade-up" data-aos-duration="1400">
                            VRNas is&nbsp;a&nbsp;leading provider of&nbsp;VR services for education, entertainment,
                            architecture, and events. Our mission is&nbsp;to&nbsp;bring the power of&nbsp;virtual reality
                            to&nbsp;everyone, allowing them to&nbsp;explore new worlds, learn in&nbsp;new ways, and
                            experience events in&nbsp;a&nbsp;whole new light.
                        </p>
                        <ul className="about__aboutList" data-aos="fade-up" data-aos-duration="1600">
                            <li className="aboutList__item">
                                Cutting-Edge Technology
                            </li>
                            <li className="aboutList__item">
                                Versatile Applications
                            </li>
                            <li className="aboutList__item">
                                Affordable and Accessible
                            </li>
                        </ul>
                        <button className="about__readMore" data-aos="fade-up" data-aos-duration="1800">
                        <span>
                            read&nbsp;more
                        </span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }
)

export default HomepageAbout;
