import React from "react";

import showcase1 from "../../../Resources/img/showcase1.jpg";

import "./showCase1.scss";

const ShowCase = () => {
  return (
    <section className="showcase1">
      <div className="showcase1__text">
        <h2 className="showcase1__title">We Craft Elegant Spaces</h2>
        <div className="inner-text">
          <p>
            We craft elegant, inspirational and distilled solutions to complex
            problems through strategic thought, dynamic creativity and
            technological excellence.
          </p>
        </div>
      </div>
      <img src={showcase1} className="showcase1__img" />
    </section>
  );
};

export default ShowCase;
