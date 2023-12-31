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
import HomepageTestimonial from "./HomepageTestimonial";
import HomepagePrice from "./HomepagePrice";
import HomepagePartners from "./HomepagePartners";
import HomepageArticles from "./HomepageArticles";
import HomepageSubscribe from "./HomepageSubscribe";
import Footer from "../../ui/footer/footer";

const Homepage = observer(() => {
    return (
        <main className="homepage">
            <Header/>
            <HomepageHero/>
            <HomepageAbout/>
            <HomepageService/>
            <HomepageWhyChooseUs/>
            <HomepageHowToStart/>
            <HomepageTestimonial/>
            <HomepagePrice/>
            <HomepagePartners/>
            <HomepageArticles/>
            <HomepageSubscribe/>
            <Footer/>
        </main>
    );
})

export default Homepage;
