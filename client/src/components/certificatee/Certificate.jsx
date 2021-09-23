import React from 'react'
import './certificate.scss'
import CheckIcon from '@material-ui/icons/Check';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import { useMediaQuery } from 'react-responsive';

const Certificate = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    return (
        <div className="certificate" id="certificate">
            <div className="left">

                {isMobile ?

                    <div className="screen">
                        <img
                            className="screenimg"
                            src="assets/sixsteps.png"
                            alt="Вы в 6 шагах от цели:
                            1.Записываетесь на курс,
                            2.Посещаете занятия,
                            3.Сдаёте итоговый экзамен,
                            4.Получаете сертификат,
                            5.Добавляете навыки в резюме,
                            6.Практикуете знания на работе"
                        />
                    </div>
                    :
                    <span className="container">
                      <span className="items">
                        <h1 className="heading">Вы в 6 шагах от цели:
                        </h1>
                        <ul className="ul">
                            <Filter1Icon /> <li className="li"><CheckIcon /> Записываетесь на курс</li>
                            <Filter2Icon /> <li className="li"><CheckIcon /> Посещаете занятия</li>
                            <Filter3Icon /> <li className="li"><CheckIcon /> Сдаёте итоговый экзамен</li>
                            <Filter4Icon /> <li className="li"><CheckIcon /> Получаете сертификат</li>
                            <Filter5Icon /> <li className="li"><CheckIcon /> Добавляете навыки в резюме</li>
                            <Filter6Icon /> <li className="li"><CheckIcon /> Практикуете знания на работе</li>
                        </ul>
                      </span>
                    </span>
                }
            </div>

            <div className="right">
                <div className="imgcontainer">
                    <img
                        className="imgitem"
                        src="assets/certificate.png"
                        alt="certificate"
                    />
                </div>
            </div>
        </div>
    )
}

export default Certificate;
