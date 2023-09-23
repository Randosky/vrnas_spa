import React from 'react';
import {observer} from "mobx-react-lite";
import partnersBG from "../../img/PartnersBG.svg";

const HomepagePartners = observer(() => {
    return (
        <section className="homepage__partners">
            <div className="partners__container container">
                <p className="partners__name">
                    Our Trusted Partners
                </p>
                <h2 className="partners__title">
                    Discover the Companies We Work With
                </h2>
                <div className="partners__names">
                    <img src={partnersBG} alt="partners"/>
                </div>
            </div>
        </section>
    );
})

export default HomepagePartners;
