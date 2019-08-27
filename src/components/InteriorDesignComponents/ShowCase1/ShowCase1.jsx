import React from "react";

import showcase1 from "../../../Resources/img/showcase1.jpg";

import "./showCase1.scss";

const ShowCase = () => {
  return (
    <section className="showcase1">
      <div className="showcase1__text">
        <div className="inner-text">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque placeat aspernatur nostrum labore repellendus, voluptas
            blanditiis tempore! Id impedit error provident consequatur illum.
          </p>
        </div>
      </div>
      <img src={showcase1} className="showcase1__img" />
    </section>
  );
};

export default ShowCase;
