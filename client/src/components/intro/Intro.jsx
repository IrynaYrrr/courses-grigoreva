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
                        src="assets/teacher4.jpg"
                        alt="Фото викладача"
                    />
                </div>
            </div>

            <div className="greeting">
                <div className="appeal">
                    <h2>Людмила Петрівна</h2>
                    <h6 className="signature">Викладач «Центру навчання Григорєва»</h6>
                    <h4>Усім, хто в мене навчався чи планує це робити:</h4>
                    <h4>Я продовжую працювати у будь-який день тиждня.</h4>
                    <h4>Надаю консультації бухгалтерам та кадровикам</h4>
                    <h4>з питань роботи у період воєнного стану.</h4>
                    <h4>Буду вам в нагоді. Телефонуйте та приходьте.</h4>
                    <br />
                    <h3>Навчу Вас:<br /><br /><span ref={textRef}></span></h3>
                </div>
            </div>
        </div>
    )
}

export default Intro;
