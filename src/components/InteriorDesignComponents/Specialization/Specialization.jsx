import React from "react";

import specialization from "../../../Resources/img/specialization.jpg";

import "./specialization.scss";

const Specialization = () => {
  return (
    <section className="specialization">
      <img src={specialization} alt="" className="specialization__img" />

      <div className="specialization__box-right">
        <h2 className="specialization__title">OUR SPECIALIZATION</h2>

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
      </div>
    </section>
  );
};

export default Specialization;
