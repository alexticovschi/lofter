import React from "react";

import showcase2 from "../../../Resources/img/showcase2.jpeg";

import "./showCase2.scss";

const ShowCase = () => {
  return (
    <section className="showcase2">
      <img src={showcase2} className="showcase2__img" />

      <div className="showcase2__text">
        <h2 className="showcase2__title">
          Our Design Communicate Your Personal Stories
        </h2>

        <div className="inner-text">
          <p>
            From small-to large-scale projects, our dedicated team is here to
            help you find the right products for your designs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
