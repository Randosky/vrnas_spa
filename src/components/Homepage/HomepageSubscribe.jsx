import React from 'react';
import {observer} from "mobx-react-lite";

const HomepageSubscribe = observer(() => {
    return (
        <section className="homepage__subscribe">
            <div className="subscribe__container container">
                <div className="subscribe__block">
                    <h2 className="subscribe__title">
                        Subscribe to our newsletter for latest updates
                    </h2>
                    <div className="subscribe__email">
                        <input type="email" className="subscribe__input"
                               placeholder="Enter your email address"/>
                        <button className="subscribe__send">
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default HomepageSubscribe;
