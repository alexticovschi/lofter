import React from "react";
import commercial from "../../Resources/img/commercial.jpg";

import "./commercialFirst.scss";

const CommercialFirst = () => {
  return (
    <section className="commercial-first">
      <img
        src={commercial}
        alt="commercial"
        className="commercial-first__img"
      />
      <div className="commercial__article-container article__container">
        <h2 className="article__container--title">Accessible accessorising</h2>
        <p className="article__container--content">
          Colour lover and fashion cool girl, Francesca Antonini shares her tips
          on making your interior choices wheelchair friendly.
        </p>
      </div>
    </section>
  );
};

export default CommercialFirst;
