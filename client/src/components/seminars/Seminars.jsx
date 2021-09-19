import React from 'react'
import { useState } from 'react';
import './seminars.scss';


const Seminars = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: '1',
            imgOne: './assets/seminar1.png',
            imgTwo: './assets/seminar2.png',
        }
    ];

    const handleClick = (way) => {
        way === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="seminars" id="seminars">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <img src={d.imgOne} alt="" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="right">
                                <img src={d.imgTwo} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seminars;
