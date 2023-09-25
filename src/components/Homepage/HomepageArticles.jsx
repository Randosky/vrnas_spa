import React from 'react';
import {observer} from "mobx-react-lite";
import RecentNextButton from "../../svg/RecentNextButton";
import popularBG from "../../img/ArticlesPopularBG.png";
import recentImg1 from "../../img/ArticlesRecent1.png";
import recentImg2 from "../../img/ArticlesRecent2.png";
import recentImg3 from "../../img/ArticlesRecent3.png";
import recentImg4 from "../../img/ArticlesRecent4.png";
import BgGridSvg from "../../svg/BgGridSvg";

const HomepageArticles = observer(() => {
    return (
        <section className="homepage__articles">
            <div className="articles__container container">
                <div className="articles__grid">
                    <BgGridSvg/>
                </div>
                <div className="articles__main">
                    <div className="articles__top"
                         data-aos="fade-up"
                         data-aos-duration="1400">
                        <div className="articles__titles">
                            <p>
                                OUR ARTICLES
                            </p>
                            <h2>
                                Stay Up-to-Date with Our VR Insights
                            </h2>
                        </div>
                        <button className="articles__button">
                            <span>see all</span>
                        </button>
                    </div>
                    <div className="articles__bottom">
                        <div className="articles__popular"
                             data-aos="fade-right"
                             data-aos-duration="1600">
                            <h3 className="popular__title">
                                Popular Article
                            </h3>
                            <div className="popular__image">
                                <img src={popularBG} alt="man in vr glasses"/>
                                <div className="popular__text">
                                    <p className="popular__textTitle">
                                        VR Games
                                    </p>
                                    <p className="popular__textDescription">
                                        Entertainment Goes Virtual: The Rise of VR Gaming
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="articles__recent"
                             data-aos="fade-left"
                             data-aos-duration="1600">
                            <h3 className="recent__title">
                                Recent Article
                            </h3>
                            <ul className="recent__items">
                                <li className="recent__item">
                                    <img src={recentImg1} alt="recent article"/>
                                    <div className="recent__itemText">
                                        <div className="recent__itemTitle">
                                            VR Education
                                        </div>
                                        <div className="recent__itemDescription">
                                            The Future of Education: How VR is Revolutionizing the Classroom
                                        </div>
                                    </div>
                                    <RecentNextButton/>
                                </li>
                                <li className="recent__item">
                                    <img src={recentImg2} alt="recent article"/>
                                    <div className="recent__itemText">
                                        <div className="recent__itemTitle">
                                            VR Architecture
                                        </div>
                                        <div className="recent__itemDescription">
                                            Bringing Designs to Life: How VR is Changing Architecture
                                        </div>
                                    </div>
                                    <RecentNextButton/>
                                </li>
                                <li className="recent__item">
                                    <img src={recentImg3} alt="recent article"/>
                                    <div className="recent__itemText">
                                        <div className="recent__itemTitle">
                                            VR Entertainment
                                        </div>
                                        <div className="recent__itemDescription">
                                            Making Events Memorable: The Power of VR for Corporate and Special Occasions
                                        </div>
                                    </div>
                                    <RecentNextButton/>
                                </li>
                                <li className="recent__item">
                                    <img src={recentImg4} alt="recent article"/>
                                    <div className="recent__itemText">
                                        <div className="recent__itemTitle">
                                            VR Event
                                        </div>
                                        <div className="recent__itemDescription">
                                            Exploring New Worlds: The Benefits of VR Travel
                                        </div>
                                    </div>
                                    <RecentNextButton/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default HomepageArticles;
