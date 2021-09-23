import React from 'react'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import './intro.scss'

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [
                'считать налоги',
                'вести ФОП',
                'сдавать отчётность',
                'проходить собеседования',
                'расставлять приоритеты'
            ],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="container">
                <div className="photo">
                    <img
                        src="assets/teacher.jpg"
                        alt="Фото преподавателя"
                    />
                </div>
            </div>

            <div className="greeting">
                <div className="appeal">
                    <h2>Людмила Петровна</h2>
                    <h4>Преподаватель «Центра обучения Григорьева»</h4>
                    <br />
                    <h3>Научу Вас:<br /><br /><span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Intro;
