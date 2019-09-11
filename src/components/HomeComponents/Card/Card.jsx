import React from "react";
import Fade from "react-reveal/Fade";

import "./card.scss";

const Card = ({ children, imgSrc, cardName }) => {
  return (
    <Fade>
      <div className="card">
        <img src={imgSrc} alt="House 6" className="card__img" />

        <h5 className="card__name">{cardName}</h5>
        <div className="card__description">{children}</div>
        <button className="btn card__btn">Read More</button>
      </div>
    </Fade>
  );
};

export default Card;
