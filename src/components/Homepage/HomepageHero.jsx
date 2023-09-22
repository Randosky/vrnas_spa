import React from 'react';
import {observer} from "mobx-react-lite";
import client1 from "../../img/Client1.svg"
import client2 from "../../img/Client2.svg"
import client3 from "../../img/Client3.svg"
import heroBg from "../../img/HeroBg.png"
import PreviewVideo from "../../svg/PreviewVideo";
import PlayButton from "../../svg/PlayButton";

const HomepageHero = observer(
    () => {
        return (
            <section className="homepage__hero">
                <div className="hero__container container">
                    <div className="hero__main">
                        <div className="hero__content">
                            <h1 className="hero__title" data-aos="fade-up" data-aos-duration="1000">
                                Immerse Yourself in&nbsp;Virtual Reality
                            </h1>
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
                </div>
            </section>
        );
    }
)

export default HomepageHero;
