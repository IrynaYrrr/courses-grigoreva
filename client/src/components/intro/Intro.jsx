import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="teacher-photo">
          <img src="assets/lpphoto25-2.jpg" alt="Фото викладача" />
        </div>
      </div>

      <div className="greeting">
        <div className="appeal">
          <h2>Людмила Петрівна</h2>
          <h6>Засновниця та викладач «Центру бізнес-навчання Григорєва»</h6>
          <br />
          <br /> 
          <br />

          <h4>
            Триває активний набір на курси: <br /> 
            <br /> "ЕхсеІ" 1 рівень
            <br /> "Бухгалтерський облік і оподаткування" + працевлаштування
            <br /> "Сучасна автотранспортна логістика"
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Intro;
