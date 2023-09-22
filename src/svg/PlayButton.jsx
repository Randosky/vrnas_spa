import React from 'react';

const PlayButton = () => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_11_242)">
                <path
                    d="M19.6875 13.2664C20.2708 13.5924 20.2708 14.4076 19.6875 14.7336L11.8125 19.1352C11.2292 19.4613 10.5 19.0537 10.5 18.4016L10.5 9.59836C10.5 8.94626 11.2292 8.53871 11.8125 8.86475L19.6875 13.2664Z"
                    fill="white"/>
                <rect x="0.583333" y="0.583333" width="26.8333" height="26.8333" rx="13.4167" stroke="white"
                      strokeWidth="1.16667"/>
            </g>
            <defs>
                <filter id="filter0_b_11_242" x="-6.22222" y="-6.22222" width="40.4444" height="40.4444"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.11111"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11_242"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11_242" result="shape"/>
                </filter>
            </defs>
        </svg>

    );
};

export default PlayButton;
