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
          <h5>Засновниця та викладач «Центру бізнес-навчання Григорєва»</h5>
          <br />
          <br /> 
          <br />

          <h4>
           Ласкаво просимо до Центру бізнес-навчання Григорєва!
            <br /> 
Тут навчають практично, з душею та результатом. <br /> 
Постійний набір на курси, вигідні знижки, <br />  зручні формати — в офісі або дистанційно. <br /> 
Після навчання — офіційний диплом і <br /> нові кар’єрні можливості! <br /> 
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Intro;
