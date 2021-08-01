import React from 'react'
import "./testimonials.scss"

const Testimonials = () => {

    const data = [
        {
            id: 1,
            name: "Елена",
            title: "Выпускница",
            img:
                "assets/student2.jpg",
            icon: "assets/insta.jpg",
            desc:
                "На курсы к Людмиле Петровне попала по рекомендации знакомых. Осталась очень довольна. Великолепныей преподаватель, креативная подача информации. Про таких людей говорят: 'Держит руку на пульсе'. И самое главное - своих учеников курирует и после курсов.",
        },
        {
            id: 2,
            name: "Юлия",
            title: "Выпускница",
            img:
                "assets/student1.jpg",
            icon: "assets/insta.jpg",
            desc:
                "Людмила Петровна - настоящий специалист своего дела! Проходила обучение 4 года назад. Очень доходчиво объясняет материал как в теории, так и на практике. Неоднократно обращалась за консультациями после прохождения курса. Спасибо Вам! 🤗",
            featured: true,
        },
        {
            id: 3,
            name: "Виктория",
            title: "Выпускница",
            img:
                "assets/student3.png",
            icon: "assets/insta.jpg",
            desc:
                "Людмила Петровна умеет очень доступно и понятно донести информацию. Благодаря ей освоила новую профессию, получила много новых знаний. После курсов устроилась бухгалтером (единственным). Умение преподавателя вселять уверенность в себя и научить работать стоит многого.",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Отзывы</h1>
            <div className="container">
                {data.map(d => (
                    <div className={d.featured ? "card featured" : "card"} >
                        <div className="top">
                            <img className="left"
                                src="assets/right-arrow.png"
                                alt=""
                            />
                            <img className="user"
                                src={d.img}
                                alt=""
                            />
                            <img className="right"
                                src={d.icon}
                                alt=""
                            />
                        </div>
                        <div className="center">
                            {d.desc}
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

export default Testimonials
