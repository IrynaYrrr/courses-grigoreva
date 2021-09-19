import React from 'react'
import { useState } from 'react';
import './Reviews.scss';

const data = [
    {
        id: 1000000,
        imgleft: './assets/chat2.jpg',
        imgcenter: './assets/chat1.jpg',
        imgright: './assets/chat3.jpg'
    },
    {
        id: 1000001,
        imgleft: './assets/chat4.jpg',
        imgcenter: './assets/chat6.jpg',
        imgright: './assets/chat5.jpg'
    },
    {
        id: 1000002,
        imgleft: './assets/chat7.jpg',
        imgcenter: './assets/chat8.jpg',
        imgright: './assets/chat9.jpg'
    },
    {
        id: 1000003,
        imgleft: './assets/chat10.jpg',
        imgcenter: './assets/chat11.jpg',
        imgright: './assets/chat12.jpg'
    },
];

for (let i = 0; i < 4; i++) {
    data.push(...data);
}
const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(data.length / 2);

    const handleClick = (way) => {
        if (way === 'left') {
            if (currentSlide === 0) {
                setCurrentSlide(data.length - 1);
            } else {
                setCurrentSlide(currentSlide - 1);
            }
        } else {
            if (currentSlide === data.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }
    };

    return (
        <div className="reviews" id="reviews">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <img src={d.imgleft} alt="" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="center">
                                <img src={d.imgcenter} alt="" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="right">
                                <img src={d.imgright} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick('left')}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Reviews;
