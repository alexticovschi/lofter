import React from "react";
import commercial from "../../../Resources/img/commercial1.jpg";

import Fade from "react-reveal/Fade";

import "./commercialFirst.scss";

const CommercialFirst = () => {
  return (
    <section className="commercial-first">
      <Fade delay={500}>
        <img
          src={commercial}
          alt="commercial"
          className="commercial-first__img"
        />
      </Fade>

      <div className="commercial__article-container article__container">
        <Fade delay={300}>
          <h2 className="article__container--title">
            Accessible accessorising
          </h2>
          <p className="article__container--content">
            Colour lover and fashion cool girl, Francesca Antonini shares her
            tips on making your interior choices wheelchair friendly.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default CommercialFirst;
