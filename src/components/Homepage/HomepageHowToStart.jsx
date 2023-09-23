import React from 'react';
import {observer} from "mobx-react-lite";
import PlayButton2 from "../../svg/PlayButton2";
import startBG from "../../img/StartBg.png";

const HowToStart = observer(() => {
    return (
        <section className="homepage__start">
            <div className="start__container container">
                <p className="start__name">
                    HOW TO GET STARTED
                </p>
                <h2 className="start__title">
                    Bringing Your Virtual Reality Dreams&nbsp;to&nbsp;Life
                </h2>
                <picture className="start__picture">
                    <img src={startBG} alt="video bg"
                         className="start__img"/>
                    <p className="start__videoVR">
                        VR Service
                    </p>
                    <h3 className="start__videoTitle">
                        How to get started
                    </h3>
                    <div className="start__playButton">
                        <PlayButton2/>
                    </div>
                </picture>
                <button className="start__button">
                    <span>
                        get started
                    </span>
                </button>
            </div>
        </section>
    );
})

export default HowToStart;
