import React from "react";
import commercial2 from "../../../Resources/img/commercial2.jpg";

import "./commercialSecond.scss";

const CommercialSecond = () => {
  return (
    <section className="commercial-second">
      <div className="commercial__article-container-second article__container-second">
        <h2 className="article__container-second--title">
          Interior design service
        </h2>
        <p className="article__container-second--content">
          At LOFTER Interiors we have a dedicated interior design service
          providing each client with a personalised interior design experience
          from initial consultation through to completion.
        </p>
      </div>
      <img
        src={commercial2}
        alt="commercial 2"
        className="commercial-second__img"
      />
    </section>
  );
};

export default CommercialSecond;
