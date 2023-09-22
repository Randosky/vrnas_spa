import React from 'react';
import "../../style/HomepageStyle/Homepage.css"
import {observer} from "mobx-react-lite";
import Header from "../../ui/header/header";
import HomepageHero from "./HomepageHero";
import HomepageAbout from "./HomepageAbout";
import BgGridSvg from "../../svg/BgGridSvg";
import HeaderAngleSvg from "../../svg/HeaderAngleSvg";

const Homepage = observer(() => {
    return (
        <main className="homepage">
            <Header/>
            <HomepageHero/>
            <HomepageAbout/>
        </main>
    );
})

export default Homepage;
