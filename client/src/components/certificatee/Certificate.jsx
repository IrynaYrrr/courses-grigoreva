import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';
import { useMediaQuery } from 'react-responsive';
import './certificate.scss'

const Certificate = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    return (
        <div className="certificate" id="certificate">
            <div className="left">

                {isMobile ?
                    <img className="mobile"
                         src="assets/sixsteps.png"
                         alt="Вы в 6 шагах от цели:
                            1.Записываетесь на курс,
                            2.Посещаете занятия,
                            3.Сдаёте итоговый экзамен,
                            4.Получаете сертификат,
                            5.Добавляете навыки в резюме,
                            6.Применяете знания на работе"
                    />

                    :

                    <span className="desktop">
                        <h1 className="title">Вы в 6 шагах от цели:
                        </h1>
                        <ul>
                            <Filter1Icon /> <li><CheckIcon /> Записываетесь на курс</li>
                            <Filter2Icon /> <li><CheckIcon /> Посещаете занятия</li>
                            <Filter3Icon /> <li><CheckIcon /> Сдаёте итоговый экзамен</li>
                            <Filter4Icon /> <li><CheckIcon /> Получаете сертификат</li>
                            <Filter5Icon /> <li><CheckIcon /> Добавляете навыки в резюме</li>
                            <Filter6Icon /> <li><CheckIcon /> Применяете знания на работе</li>
                        </ul>
                    </span>
                }
            </div>

            <div className="right">
                <img className="diploma"
                     src="assets/certificate.png"
                     alt="Фотокарточка сертификата"
                />
            </div>
        </div>
    )
}

export default Certificate;
