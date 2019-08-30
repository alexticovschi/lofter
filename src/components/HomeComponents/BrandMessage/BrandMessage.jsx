import React from "react";
import brand from "../../../Resources/img/brand-message.jpg";

import Fade from "react-reveal/Fade";

import "./brandMessage.scss";

const BrandMessage = () => {
  return (
    <Fade>
      <section className="brand-message">
        <img src={brand} alt="brand-back" className="brand-message__img" />
        <div className="centered">
          <h1 className="heading-1 mb-md">Different by Design</h1>
          <p>
            We find the best independent designers and makers around the world
            to create your pieces. Producing designs in small batches keeps
            costs low - and we think it’s a more responsible way of working.
          </p>
        </div>
      </section>
    </Fade>
  );
};

export default BrandMessage;
