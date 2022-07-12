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
                         alt="Ви за 6 кроків від мети:
                         1.Записуєтесь на курс,
                         2.Відвідуєте заняття,
                         3.Складаєте підсумковий іспит,
                         4.Отримуєте сертифікат,
                         5.Додаєте навички в резюме,
                         6.Використовуєте знання на роботі"
                    />

                    :

                    <span className="desktop">
                        <h1 className="title">Ви за 6 кроків від мети:
                        </h1>
                        <ul>
                            <Filter1Icon /> <li><CheckIcon /> Записуєтесь на курс</li>
                            <Filter2Icon /> <li><CheckIcon /> Відвідуєте заняття</li>
                            <Filter3Icon /> <li><CheckIcon /> Складаєте підсумковий іспит</li>
                            <Filter4Icon /> <li><CheckIcon /> Отримуєте сертифікат</li>
                            <Filter5Icon /> <li><CheckIcon /> Додаєте навички в резюме</li>
                            <Filter6Icon /> <li><CheckIcon /> Використовуєте знання на роботі</li>
                        </ul>
                    </span>
                }
            </div>

            <div className="right">
                <img className="diploma"
                     src="assets/certificate.png"
                     alt="Фотокартка сертифіката"
                />
            </div>
        </div>
    )
}

export default Certificate;
