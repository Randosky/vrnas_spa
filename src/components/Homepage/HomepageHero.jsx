import React from 'react';
import {observer} from "mobx-react-lite";
import client1 from "../../img/Client1.svg"
import client2 from "../../img/Client2.svg"
import client3 from "../../img/Client3.svg"
import heroBg from "../../img/HeroBg.png"
import PreviewVideo from "../../svg/PreviewVideo";
import PlayButton from "../../svg/PlayButton";
import HeroListItem1 from "../../svg/HeroListItem1";
import HeroListItem2 from "../../svg/HeroListItem2";
import HeroListItem3 from "../../svg/HeroListItem3";
import BgGridSvg from "../../svg/BgGridSvg";

const HomepageHero = observer(
    () => {
        return (
            <section className="homepage__hero">
                <div className="hero__container container">
                    <div className="hero__main">
                        <div className="hero__content">
                            <h2 className="hero__title" data-aos="fade-up" data-aos-duration="1000">
                                Immerse Yourself in&nbsp;Virtual Reality
                            </h2>
                            <p className="hero__description" data-aos="fade-up" data-aos-duration="1400">
                                Experience Unforgettable Events in&nbsp;VR. Bring your events to life like never before
                                with our&nbsp;VR services
                            </p>
                            <button className="hero__button" data-aos="fade-up" data-aos-duration="1800">
                                <span>discover more</span>
                            </button>
                            <div className="hero__preview">
                                <div className="preview__clients">
                                    <div className="clients__images">
                                        <img src={client1} alt="client img" className="client__img"/>
                                        <img src={client2} alt="client img" className="client__img"/>
                                        <img src={client3} alt="client img" className="client__img"/>
                                    </div>
                                    <span className="clients__count">
                                    <span>32k+</span>&nbsp;Happy&nbsp;Client
                                </span>
                                </div>
                                <div className="preview__video">
                                    <PreviewVideo/>
                                    <div className="video__button">
                                        <PlayButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__image" data-aos="fade-left" data-aos-duration="1800">
                            <img src={heroBg} alt="man in vr glasses"/>
                        </div>
                    </div>
                    <ul className="hero__informationList"
                        data-aos="fade-up"
                        data-aos-duration="1500">
                        <li className="informationList__item">
                            <HeroListItem1/>
                            <h3>
                                Expertise
                            </h3>
                            <p>
                                Our team consists of&nbsp;experienced&nbsp;VR developers, designers, and technicians who
                                have a&nbsp;passion for&nbsp;VR and a&nbsp;commitment to&nbsp;delivering quality work
                                and give the best service
                            </p>
                        </li>
                        <li className="informationList__item">
                            <HeroListItem2/>
                            <h3>
                                Customization
                            </h3>
                            <p>
                                Every client is&nbsp;unique, and we&nbsp;believe every&nbsp;VR experience should
                                be&nbsp;too. We&rsquo;ll work with you to&nbsp;create a&nbsp;customized solution that
                                meets your specific needs and goals
                            </p>
                        </li>
                        <li className="informationList__item">
                            <HeroListItem3/>
                            <h3>
                                Service
                            </h3>
                            <p>
                                We&nbsp;believe in&nbsp;providing exceptional customer service, from initial
                                consultation to&nbsp;final delivery. Our goal is&nbsp;to&nbsp;ensure you&rsquo;re
                                satisfied with every aspect of&nbsp;your&nbsp;VR experience.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
)

export default HomepageHero;
