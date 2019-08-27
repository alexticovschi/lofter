import React from "react";
import brand from "../../../Resources/img/brand-message.jpg";

import "./brandMessage.scss";

const BrandMessage = () => {
  return (
    <section className="brand-message">
      <img src={brand} alt="brand-back" className="brand-message__img" />
      <div className="centered">
        <h1 className="heading-1 mb-md">Different by Design</h1>
        <p>
          We find the best independent designers and makers around the world to
          create your pieces. Producing designs in small batches keeps costs low
          - and we think it’s a more responsible way of working.
        </p>
      </div>
    </section>
  );
};

export default BrandMessage;
