import React from 'react';
import "../../style/HomepageStyle/Homepage.css"
import {observer} from "mobx-react-lite";
import Header from "../../ui/header/header";
import HomepageHero from "./HomepageHero";

const Homepage = observer(() => {
    return (
        <main className="homepage">
            <Header/>
            <HomepageHero/>
        </main>
    );
})

export default Homepage;
