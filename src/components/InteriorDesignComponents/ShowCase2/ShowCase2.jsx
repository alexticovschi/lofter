import React from "react";

import showcase2 from "../../../Resources/img/showcase2.jpg";

import "./showCase2.scss";

const ShowCase = () => {
  return (
    <section className="showcase2">
      <img src={showcase2} className="showcase2__img" />

      <div className="showcase2__text">
        <div className="inner-text">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            neque placeat aspernatur nostrum labore repellendus, voluptas
            blanditiis tempore! Id impedit error provident consequatur illum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
