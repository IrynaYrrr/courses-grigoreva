import React from 'react'
import './students.scss'
import { useMediaQuery } from 'react-responsive';
import Filter1Icon from '@material-ui/icons/Filter1';
import CheckIcon from '@material-ui/icons/Check';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
import Filter5Icon from '@material-ui/icons/Filter5';
import Filter6Icon from '@material-ui/icons/Filter6';

const Students = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const data = [
        {
            id: 1,
            name: 'Євгенія',
            title: 'Головний бухгалтер',
            img: 'assets/Evgenia.jpg',
            desc: 'Пройшла курс з бухгалтерського обліку 6 років тому. '+
            'На даний момент - головний бухгатер у компанії! '+
            'Додатково вивчала зовнішньо-економічну діяльність та ФОП. '+
            'Любить відвідувати семінари.',
            featured: true,
        },
        {
            id: 2,
            name: 'Юлія',
            title: 'Кадровик',
            img: 'assets/Julia.jpg',
            desc: 'Працює у відділі кадрів будівельної компанії. '+
            'Позаду – курс «Спеціаліст відділу кадрів». '+
            'Попереду – навчання на тему «Управління персоналом». '+
            '\n-Знань багато не буває, - стверджує Юлія.',
            featured: true,
        },
        {
            id: 3,
            name: 'Лілія',
            title: 'Директор',
            img: 'assets/Lilia.jpg',
            desc: 'Ставши директором підприємства, вирішила що повинна знати ' +
            'бухгалтерський облік і ведення кадрів не гірше своїх колег. '+
            'За плечима 2 курси -' +
            '«Фахівець відділу кадрів» та «Бухгалтерський облік. Оподаткування». ',
            featured: true,
        },
    ];

    return (
        <div className="students" id="students">
            <h1>Студенти</h1>

            {isMobile ?
                <>
                    <div className="container">
                        <img className="mobile"
                             src="assets/std1.png"
                             alt=""
                        />
                        <br />
                        <img className="mobile"
                             src="assets/std2.png"
                             alt=""
                        />
                        <br />
                        <img className="mobile"
                             src="assets/std3.png"
                             alt=""
                        />
                    </div>
                </>
                :
                <div className="container">
                    {data.map(d => (
                        <div className={d.featured ? 'card featured' : 'card'}>
                            <div className="mobile">
                                <div className="top">
                                    <img className="user"
                                         src={d.img}
                                         alt="Фото студента"
                                    />
                                </div>
                                <div className="center">
                                    {d.desc}
                                </div>
                            </div>
                            <div className="bottom">
                                <h3>{d.name}</h3>
                                <h4>{d.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Students
