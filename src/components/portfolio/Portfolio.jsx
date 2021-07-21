import React from "react"
import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data"

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Курс «Бухгалтерский учёт. Налогообложение»",
        },
        {
            id: "web",
            title: "Курс «Физическиое лицо предприниматель»",
        },
        {
            id: "mobile",
            title: "Курс «Специалист отдела кадров»",
        },
        {
            id: "design",
            title: "Семинар «Техника безопасности и охрана труда»",
        },
        {
            id: "content",
            title: "Семинар «Повышение квалификации бухгалтера»",
        },
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Регулярный набор на курс</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
