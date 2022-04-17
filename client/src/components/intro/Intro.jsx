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
                'проходить собеседования'
            ],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="container">
                <div className="photo">
                    <img
                        src="assets/teacher4.jpg"
                        alt="Фото преподавателя"
                    />
                </div>
            </div>

            <div className="greeting">
                <div className="appeal">
                    <h2>Людмила Петровна</h2>
                    <h6 className="signature">Преподаватель «Центра обучения Григорьева»</h6>
                    <h4>Всем, кто у меня учился или планирует это делать:</h4>
                    <h4>Я продолжаю работать в любой день недели.</h4>
                    <h4>Консультирую бухгалтеров и кадровиков по вопросам </h4>
                    <h4>работы в период военного положения.</h4>
                    <h4>Буду вам полезна. Звоните и приходите.</h4>
                    <br />
                    <h3>Научу Вас:<br /><br /><span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Intro;
