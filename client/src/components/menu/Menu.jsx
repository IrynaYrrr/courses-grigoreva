import React from 'react'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Главная</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#schedule">Курсы</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#seminars">Семинары</a>
                </li>


                <li onClick={() => setMenuOpen(false)} >
                    <a href="#testimonials">Отзывы</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#comments">Комментарии</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#certificate">Сертификат</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#contactform">Контакты</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
