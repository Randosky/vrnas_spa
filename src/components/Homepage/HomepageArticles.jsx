import React from 'react';
import {observer} from "mobx-react-lite";

const HomepageArticles = observer(() => {
    return (
        <section className="homepage__articles">
            <div className="articles__container container">
                <div className="articles__top">
                    <div className="articles__titles">
                        <p>
                            OUR ARTICLES
                        </p>
                        <h2>
                            Stay Up-to-Date with Our VR Insights
                        </h2>
                    </div>
                    <button className="articles__button">
                        see all
                    </button>
                </div>
                <div className="articles__popular">

                </div>
                <div className="articles__recent">

                </div>
            </div>
        </section>
    );
})

export default HomepageArticles;
