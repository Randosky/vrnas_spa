import React from 'react';
import {observer} from "mobx-react-lite";

const HomepageTestimonial = observer(
    () => {
        return (
            <section className="homepage__testimonial"
            data-aos="zoom-out" data-aos-duration="1600" data-aos-easing="ease-in">
                <div className="testimonial__container container">
                    <div className="testimonial__text">
                        <p className="testimonial__name">
                            testimonial
                        </p>
                        <h2 className="testimonial__title">
                            What Our Clients Are Saying
                        </h2>
                    </div>
                    <div className="testimonial__clients">
                        <div className="testimonial__client testimonial__client1"></div>
                        <div className="testimonial__client testimonial__client2"></div>
                        <div className="testimonial__client testimonial__client3"></div>
                        <div className="testimonial__client testimonial__client4"></div>
                        <div className="testimonial__client testimonial__client5"></div>
                        <div className="testimonial__client testimonial__client6"></div>
                    </div>
                </div>
            </section>
        );
    }
)

export default HomepageTestimonial;
