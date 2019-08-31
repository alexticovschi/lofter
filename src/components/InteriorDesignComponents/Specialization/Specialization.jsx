import React from "react";

import specialization from "../../../Resources/img/specialization.jpg";

import Fade from "react-reveal/Fade";

import "./specialization.scss";

const Specialization = () => {
  return (
    <Fade>
      <section className="specialization">
        <img src={specialization} alt="" className="specialization__img" />

        <div className="specialization__box-right">
          <h2 className="specialization__title">
            <Fade right delay={1000}>
              OUR SPECIALIZATION
            </Fade>
          </h2>

          <Fade delay={300} duration={1800}>
            <div className="specialization__icons">
              <div className="specialization__icon">
                <p>Interior Design</p>
              </div>
              <div className="specialization__icon">
                <p>Unique Designs</p>
              </div>
              <div className="specialization__icon">
                <p>Lighting</p>
              </div>
              <div className="specialization__icon">
                <p>Material Studio</p>
              </div>
              <div className="specialization__icon">
                <p>Art/Installation</p>
              </div>
              <div className="specialization__icon">
                <p>Architecture</p>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default Specialization;
