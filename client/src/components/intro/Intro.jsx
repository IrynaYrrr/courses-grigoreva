import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['считать налоги', 'вести ФОП', 'сдавать отчётность', 'проходить собеседования','расставлять приоритеты'],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/mainphoto.jpg" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Людмила Петровна</h2>
                    <h4>Преподаватель «Центра обучения Григорьева»</h4>
                    <br/>
                    <h3> Научу Вас:
                    <br/>
                    <br/>
                    <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro;
