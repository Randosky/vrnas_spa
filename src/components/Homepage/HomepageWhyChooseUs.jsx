import React from 'react';
import {observer} from "mobx-react-lite";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import PlayButton from "../../svg/PlayButton";
import ChooseVideo from "../../svg/ChooseVideo";
import ChooseBg from "../../img/WhyChooseBg.png";

const HomepageWhyChooseUs = observer(() => {
    return (
        <section className="homepage__choose">
            <div className="choose__container container">
                <div className="choose__left">
                    <p className="choose__name" data-aos="fade-up" data-aos-duration="1400">
                        WHY CHOOSE US
                    </p>
                    <h2 className="choose__title" data-aos="fade-up" data-aos-duration="1400">
                        Why Choose Us for Your VR Needs
                    </h2>
                    <Accordion className="choose__accordion"
                               allowZeroExpanded={true}>
                        <AccordionItem className="accordion__item"
                                       data-aos="fade-up" data-aos-duration="1600">
                            <AccordionItemHeading className="accordion__header">
                                <AccordionItemButton className="accordion__button">
                                    Passionate and Experienced Team
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion__panel">
                                <p>
                                    We are proud of our team of VR experts who are passionate about VR and dedicated to
                                    delivering the highest quality work. Our team consists of experienced VR developers,
                                    designers, and technicians who have a proven track record of creating immersive and
                                    engaging VR experiences.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="accordion__item"
                                       data-aos="fade-up" data-aos-duration="1800">
                            <AccordionItemHeading className="accordion__header">
                                <AccordionItemButton className="accordion__button">
                                    Customized Solutions
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion__panel">
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem className="accordion__item"
                                       data-aos="fade-up" data-aos-duration="2000">
                            <AccordionItemHeading className="accordion__header">
                                <AccordionItemButton className="accordion__button">
                                    Exceptional Customer Service
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="accordion__panel">
                                <p>
                                    In ad velit in ex nostrud dolore cupidatat consectetur
                                    ea in ut nostrud velit in irure cillum tempor laboris
                                    sed adipisicing eu esse duis nulla non.
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className="choose__image"
                     data-aos="fade-left" data-aos-duration="2000">
                    <img src={ChooseBg} alt="man in vr glasses"/>
                    <div className="choose__video">
                        <ChooseVideo/>
                        <div className="video__button">
                            <PlayButton/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default HomepageWhyChooseUs;
