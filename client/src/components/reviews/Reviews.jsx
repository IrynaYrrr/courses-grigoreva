import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { nanoid } from 'nanoid';
import './Reviews.scss';

let data = [
        {
            imgleft: './assets/chat2.jpg',
            imgcenter: './assets/chat1.jpg',
            imgright: './assets/chat3.jpg'
        },
        {
            imgleft: './assets/chat4.jpg',
            imgcenter: './assets/chat6.jpg',
            imgright: './assets/chat5.jpg'
        },
        {
            imgleft: './assets/chat7.jpg',
            imgcenter: './assets/chat8.jpg',
            imgright: './assets/chat9.jpg'
        },
        {
            imgleft: './assets/chat10.jpg',
            imgcenter: './assets/chat11.jpg',
            imgright: './assets/chat12.jpg'
        },
    ]
;

for (let i = 0; i < 3; i++) {
    data.push(...data);
}

data = data.map((d) => {
    const nd = { ...d };
    nd.id = nanoid();
    return nd;
});

let data2 = [
    {
        img: './assets/chat2.jpg',
    },
    {
        img: './assets/chat1.jpg',
    },
    {
        img: './assets/chat3.jpg'
    },
    {
        img: './assets/chat4.jpg',
    },
    {
        img: './assets/chat6.jpg',
    },
    {
        img: './assets/chat5.jpg'
    },
    {
        img: './assets/chat7.jpg',
    },
    {
        img: './assets/chat8.jpg',
    },
    {
        img: './assets/chat9.jpg'
    },
    {
        img: './assets/chat10.jpg',
    },
    {
        img: './assets/chat11.jpg',
    },
    {
        img: './assets/chat12.jpg'
    },
];

for (let i = 0; i < 2; i++) {
    data2.push(...data2);
}

data2 = data2.map((d) => {
    const nd = { ...d };
    nd.id = nanoid();
    return nd;
});

const Reviews = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const currentData = isMobile ? data2 : data;

    const [currentSlide, setCurrentSlide] = useState(currentData.length / 2);

    const handleClick = (way) => {
        if (way === 'left') {
            if (currentSlide === 0) {
                setCurrentSlide(currentData.length - 1);
            } else {
                setCurrentSlide(currentSlide - 1);
            }
        } else {
            if (currentSlide === currentData.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }
    };

    return (
        <div className="reviews" id="reviews">
            <div className="slider"
                 style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {isMobile ?
                    currentData.map((d) => (
                        <div key={d.id} className="container">
                            <div className="item">
                                <div className="center">
                                    <img src={d.img} alt="Скріншот листування" />
                                </div>
                            </div>
                        </div>
                    )) :
                    currentData.map((d) => (
                        <div key={d.id} className="container">
                            <div className="item">
                                <div className="left">
                                    <img src={d.imgleft} alt="Скріншот листування" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="center">
                                    <img src={d.imgcenter} alt="Скріншот листування" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="right">
                                    <img src={d.imgright} alt="Скріншот листування" />
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt="Стрілка ліворуч"
                onClick={() => handleClick('left')}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt="Стрілка праворуч"
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Reviews;
