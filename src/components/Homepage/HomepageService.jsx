import React from 'react';
import ServiceListItem1 from "../../svg/ServiceListItem1";
import ServiceListItem2 from "../../svg/ServiceListItem2";
import ServiceListItem3 from "../../svg/ServiceListItem3";
import ServiceListItem4 from "../../svg/ServiceListItem4";
import ServiceListItem5 from "../../svg/ServiceListItem5";
import ServiceListItem6 from "../../svg/ServiceListItem6";

const HomepageService = () => {
    return (
        <section className="homepage__service">
            <div className="service__container container">
                <div className="service__top">
                    <div className="service__titles">
                        <p>
                            our&nbsp;service
                        </p>
                        <h2>
                            Our&nbsp;Service
                        </h2>
                    </div>
                    <p className="service__description">
                        We&nbsp;use the latest&nbsp;VR hardware and software to&nbsp;create high-quality
                        VR&nbsp;experiences that are accessible and affordable. Our goal is&nbsp;to&nbsp;provide
                        exceptional customer service and support, and our team is&nbsp;always available to&nbsp;answer
                        any questions and address any concerns you may have.
                    </p>
                </div>
                <div className="service__lists">
                    <ul className="service__column">
                        <li className="service__item">
                            <ServiceListItem1/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Development
                            </h3>
                            <p className="service__itemDescription">
                                From concept to&nbsp;creation, our team of&nbsp;VR developers will bring your vision
                                to&nbsp;life.
                            </p>
                        </li>
                        <li className="service__item">
                            <ServiceListItem2/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Games
                            </h3>
                            <p className="service__itemDescription">
                                We&nbsp;offer a&nbsp;wide selection of&nbsp;VR games that are suitable for players
                                of&nbsp;all ages and skill levels.
                            </p>
                        </li>
                    </ul>
                    <ul className="service__column">
                        <li className="service__item">
                            <ServiceListItem3/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Design
                            </h3>
                            <p className="service__itemDescription">
                                Our talented&nbsp;VR designers will create immersive and engaging environments that will
                                captivate your audience.
                            </p>
                        </li>
                        <li className="service__item">
                            <ServiceListItem4/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Events
                            </h3>
                            <p className="service__itemDescription">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque eaque quod
                                sapiente
                                sed! Ab&nbsp;aliquid eius nostrum velit. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aliquid blanditiis consectetur, corporis cupiditate delectus
                                distinctio, dolor laboriosam nisi placeat provident repellat repudiandae sequi sunt. Ab
                                commodi cum exercitationem illo recusandae.
                            </p>
                        </li>
                    </ul>
                    <ul className="service__column">
                        <li className="service__item">
                            <ServiceListItem5/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Consulting
                            </h3>
                            <p className="service__itemDescription">
                                Our VR&nbsp;consultants will work with you to&nbsp;ensure that your&nbsp;VR experience
                                meets
                                your goals and exceeds your expectations.
                            </p>
                        </li>
                        <li className="service__item">
                            <ServiceListItem6/>
                            <h3 className="service__itemTitle">
                                VR&nbsp;Entertainment
                            </h3>
                            <p className="service__itemDescription">
                                Create a&nbsp;VR escape room, or&nbsp;offer&nbsp;VR experiences at&nbsp;a&nbsp;theme
                                park,
                                we&nbsp;have the expertise and experience to&nbsp;make it&nbsp;happen.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomepageService;
