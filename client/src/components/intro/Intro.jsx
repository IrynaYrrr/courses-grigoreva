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
                'рахувати податки',
                'вести ФОП',
                'здавати звітність',
                'проходити співбесіди'
            ],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="container">
                <div className="photo">
                    <img
                        src="assets/teacher5.jpg"
                        alt="Фото викладача"
                    />
                </div>
            </div>

            <div className="greeting">
                <div className="appeal">
                    <h2>Людмила Петрівна</h2>
                    <h6>Викладач «Центру бізнес-навчання Григорєва»</h6>
                    <h4>Йде набір на <br /> навчання грудень-січень 2022-2023</h4>
                    <h3>Навчаю:<br /><br /><span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Intro;
