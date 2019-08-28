import React from "react";

import designer1 from "../../../Resources/img/designer1.jpg";
import designer2 from "../../../Resources/img/designer2.jpg";
import designer3 from "../../../Resources/img/designer3.jpg";
import designer4 from "../../../Resources/img/designer4.jpg";

import "./designers.scss";

const Designers = () => {
  return (
    <section className="designers">
      <h3>Meet the Team</h3>
      <div className="designer-wrapper">
        <div className="designer-card">
          <img
            src={designer1}
            alt="designer 1"
            className="designer-card--img"
          />
          <h3 className="heading-3 designer-name">Francesca Antonini</h3>
        </div>
        <div className="designer-card">
          <img
            src={designer2}
            alt="designer 2"
            className="designer-card--img"
          />
          <h3 className="heading-3 designer-name">Claire Simpsson</h3>
        </div>
        <div className="designer-card">
          <img
            src={designer3}
            alt="designer 3"
            className="designer-card--img"
          />
          <h3 className="heading-3 designer-name">Frank Vogel</h3>
        </div>
        <div className="designer-card">
          <img
            src={designer4}
            alt="designer 4"
            className="designer-card--img"
          />
          <h3 className="heading-3 designer-name">Lara Mercado</h3>
        </div>
      </div>
    </section>
  );
};

export default Designers;
