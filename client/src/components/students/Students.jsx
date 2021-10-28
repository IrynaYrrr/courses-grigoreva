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
            name: 'Евгения',
            title: 'Главный бухгалтер',
            img: 'assets/Evgenia.jpg',
            desc: 'Прошла курс по бухгалтерскому учёту 6 лет назад. ' +
                'В данный момент - главный бухгатер в компании! ' +
                'Дополнительно учила внешне-экономическую деятельность и ФОП. ' +
                'Любит посещать семинары.',
            featured: true,
        },
        {
            id: 2,
            name: 'Юлия',
            title: 'Кадровик',
            img: 'assets/Julia.jpg',
            desc: 'Работает в отделе кадров строительной компании. ' +
                'Позади - курс «Специалист отдела кадров». ' +
                'Впереди - обучение на тему «Управление персоналом». ' +
                '\n-Знаний много не бывает, - утверждает Юлия.',
            featured: true,
        },
        {
            id: 3,
            name: 'Лилия',
            title: 'Директор',
            img: 'assets/Lilia.jpg',
            desc: 'Став директором предприятия, решила что должна знать ' +
                'бухгалтерский учёт и ведение кадров не хуже своих коллег. ' +
                'За плечами 2 курса -' +
                ' «Специалист отдела кадров» и «Бухгалтерский учёт. Налогообложение». ',
            featured: true,
        },
    ];

    return (
        <div className="students" id="students">
            <h1>Студенты</h1>

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
