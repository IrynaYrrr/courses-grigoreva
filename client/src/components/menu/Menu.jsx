import React from 'react'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Головна</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#schedule">Курси</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#seminars">Консультація</a>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                    <a href="#certificate">Сертифікат</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#students">Студенти</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#reviews">Таємно</a>
                </li>

                <li onClick={() => setMenuOpen(false)} >
                    <a href="#contacts">Контакти</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
