import React from 'react'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Обо мне</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Курсы</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#works">Семинары</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#testimonials">Отзывы</a>
                </li>
                <li onClick={() => setMenuOpen(false)} >
                    <a href="#contact">Контакт</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#contactform">Запись</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
