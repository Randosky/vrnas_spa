import React from 'react';
import priceBG from "../../img/PriceBG.png";
import {observer} from "mobx-react-lite";
import PriceIcon from "../../svg/PriceIcon";

const HomepagePrice = observer(() => {
    return (
        <section className="homepage__price">
            <div className="price__container container">
                <p className="price__name">
                    our pricing
                </p>
                <h2 className="price__title">
                    Affordable VR&nbsp;Services for Everyone
                </h2>
                <p className="price__description">
                    At&nbsp;VRNas, we&nbsp;believe that everyone should have access to&nbsp;the benefits of&nbsp;VR.
                    That&rsquo;s why we&nbsp;offer a&nbsp;range of&nbsp;pricing options to&nbsp;meet the needs
                    of&nbsp;any budget.
                </p>
                <div className="price__content">
                    <ul className="price__list">
                        <li className="price__item">
                            <div className="price__icon">
                                <PriceIcon/>
                            </div>
                            <div className="price__itemBlock">
                                <h3>
                                    Customizable Packages
                                </h3>
                                <p>
                                    We&nbsp;understand that each project is&nbsp;unique, so&nbsp;we&nbsp;offer
                                    customizable
                                    packages to&nbsp;ensure that you get the services you need at&nbsp;a&nbsp;price that
                                    works for you. Our team will work with you to&nbsp;create a&nbsp;package that meets
                                    your
                                    specific goals and budget.
                                </p>
                            </div>
                        </li>
                        <li className="price__item">
                            <div className="price__icon">
                                <PriceIcon/>
                            </div>
                            <div className="price__itemBlock">
                                <h3>
                                    Flexible Payment Options
                                </h3>
                                <p>
                                    We&nbsp;offer flexible payment options to&nbsp;make it&nbsp;easy for you to&nbsp;get
                                    started with our services. We&nbsp;accept various payment methods, including credit
                                    cards, bank transfers, and PayPal, and we&nbsp;can also work with you to&nbsp;create
                                    a&nbsp;payment plan that suits your needs.
                                </p>
                            </div>
                        </li>
                        <li className="price__item">
                            <div className="price__icon">
                                <PriceIcon/>
                            </div>
                            <div className="price__itemBlock">
                                <h3>
                                    Satisfaction Guarantee
                                </h3>
                                <p>
                                    We&nbsp;stand behind our services and are committed to&nbsp;ensuring that you are
                                    completely satisfied with the final product. If&nbsp;for any reason you are not
                                    happy
                                    with our services, we&nbsp;will work with you to&nbsp;make it&nbsp;right
                                    or&nbsp;provide
                                    a&nbsp;full refund.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className="price__image">
                        <img src={priceBG} alt="man in vr glasses"/>
                        <div className="price__priceBlock">
                            <p className="priceBlock__start">
                                Start from
                            </p>
                            <p className="priceBlock__price">
                                $99
                            </p>
                            <button className="priceBlock__button">
                                <span>
                                    get&nbsp;started
                                </span>
                            </button>
                            <p className="priceBlock__guarantee">
                                30&nbsp;Days&nbsp;Moneyback&nbsp;Guarantee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default HomepagePrice;
