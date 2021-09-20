import React from 'react'
import './students.scss'

const Students = () => {

    const data = [
        {
            id: 1,
            name: 'Евгения',
            title: 'Выпускница',
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
            title: 'Выпускница',
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
            title: 'Выпускница',
            img: 'assets/Lilia.jpg',
            desc: 'Став директором предприятия, решила что должна знать ' +
                'бухгалтерский учёт и ведение кадров не хуже своих коллег. ' +
                'За плечами 2 курса -' +
                ' «Специалист отдела кадров» и «Бухгалтерский учёт. Налогообложение» ',
            featured: true,
        },
    ];

    return (
        <div className="students" id="students">
            <h1>Студенты</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? 'card featured' : 'card'}>
                        <div className="mobile">
                            <div className="top">
                                <img className="user"
                                     src={d.img}
                                     alt=""
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
        </div>
    )
}

export default Students
