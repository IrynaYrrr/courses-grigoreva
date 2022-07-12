import React from 'react'
import { useState } from 'react';
import './seminars.scss';
import ContactForm from './ContactForm';

const Seminars = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: '1',
            img: './assets/consultation.png'
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

                        <div className="left">
                            <img src={d.img} alt="Анонс консультації " />
                        </div>

                        <div className="right">
                            <ContactForm />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seminars;
