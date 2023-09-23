import React from 'react';
import "../../style/HomepageStyle/Homepage.css"
import {observer} from "mobx-react-lite";
import Header from "../../ui/header/header";
import HomepageHero from "./HomepageHero";
import HomepageAbout from "./HomepageAbout";
import BgGridSvg from "../../svg/BgGridSvg";
import HeaderAngleSvg from "../../svg/HeaderAngleSvg";
import HomepageService from "./HomepageService";
import HomepageWhyChooseUs from "./HomepageWhyChooseUs";
import HomepageHowToStart from "./HomepageHowToStart";

const Homepage = observer(() => {
    return (
        <main className="homepage">
            <Header/>
            <HomepageHero/>
            <HomepageAbout/>
            <HomepageService/>
            <HomepageWhyChooseUs/>
            <HomepageHowToStart/>
        </main>
    );
})

export default Homepage;
