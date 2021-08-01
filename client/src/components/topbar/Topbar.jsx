import React from "react"
import "./topbar.scss"
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from "@material-ui/icons/Instagram";


const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">«Центр обучения Григорьева»</a>
                    <div className="itemContainer">
                        <PhoneIcon className="icon" />
                        <span>
                            <a href="tel:380679143119"> +38(067)914-31-19</a>
                        </span>
                    </div>
                    <div className="itemContainer">
                        <InstagramIcon className="icon" />
                        <span>
                            <a href="https://www.instagram.com/grigoreva__lp/">grigoreva__lp</a>
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

export default Topbar
