import React from 'react'
import "./testimonials.scss"

const Testimonials = () => {

    const data = [
        {
            id: 1,
            name: "Екатерина",
            title: "Выпускница",
            img:
                "assets/katyaroshupko.jpg",
            icon: "assets/twitter.png",
            desc:
                "Людмила Петровна - профессионал своего дела, прекрасный педагог и консультант! Спасибо Вам за отзывчивость и помощь.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
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
