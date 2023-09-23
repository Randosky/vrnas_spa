import React from 'react';

const PlayButton2 = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_34_2857)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM42.1875 68.3402L70.3125 52.62C72.3958 51.4556 72.3958 48.5444 70.3125 47.38L42.1875 31.6598C40.1042 30.4954 37.5 31.9509 37.5 34.2799V65.7201C37.5 68.049 40.1042 69.5046 42.1875 68.3402Z"
                      fill="white" fillOpacity="0.3"/>
            </g>
            <defs>
                <filter id="filter0_b_34_2857" x="-16" y="-16" width="132" height="132" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_34_2857"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_34_2857" result="shape"/>
                </filter>
            </defs>
        </svg>

    );
};

export default PlayButton2;
