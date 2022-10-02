import React from "react"
import "./topbar.scss"
import PhoneIcon from '@material-ui/icons/Phone';

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <div className="logoimg">
                        <img
                            src="assets/logo.png"
                            alt=""
                            className="logotype"
                        />
                    </div>
                    <a href="#intro" className="logo">«Центр бізнес-навчання Григорєва»</a>
                    <div className="itemContainer">
                        <PhoneIcon className="icon" />
                        <span>
                            <a href="tel:380679143119"> +38(067)914-31-19</a>
                        </span>
                    </div>
                    <div className="itemContainer">
                        <PhoneIcon className="icon" />
                        <span>
                            <a href="tel:380667854551"> +38(066)785-45-51</a>
                        </span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;
