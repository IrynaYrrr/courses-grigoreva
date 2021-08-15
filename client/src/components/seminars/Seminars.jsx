import React from "react"
import { useState } from "react";
import "./seminars.scss";


const Seminars = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            imgSem: "./assets/VSseminarBuh.png",
            imgProg: "./assets/VSprogramBuh.png",
        },
        {
            id: "2",
            imgSem: "./assets/VSseminarWork.png",
            imgProg: "./assets/VSprogramWork.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
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
                                <img src={d.imgSem} alt="" />
                            </div>
                            <div className="right">
                                <img src={d.imgProg} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick()}
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

export default Seminars;
