import React from "react";
import img1 from "../../../Resources/img/gal2.jpg";
import img2 from "../../../Resources/img/brand-message.jpg";
import img3 from "../../../Resources/img/gal7.jpg";
import img4 from "../../../Resources/img/gal6.jpg";
import img5 from "../../../Resources/img/service2.jpg";

import Fade from "react-reveal/Fade";

import "./imageGrid.scss";

const ImageGrid = () => {
  return (
    <section className="img-grid">
      <Fade>
        <figure className="img-grid__item img-grid__item--1">
          <img src={img1} className="img-grid__img" alt="grid item 1" />
        </figure>
      </Fade>

      <Fade>
        <figure className="img-grid__item img-grid__item--2">
          <img src={img2} className="img-grid__img" alt="grid item 2" />
        </figure>
      </Fade>

      <Fade>
        <figure className="img-grid__item img-grid__item--3">
          <img src={img3} className="img-grid__img" alt="grid item 3" />
        </figure>
      </Fade>

      <Fade>
        <figure className="img-grid__item img-grid__item--4">
          <img src={img4} className="img-grid__img" alt="grid item 4" />
        </figure>
      </Fade>

      <Fade>
        <figure className="img-grid__item img-grid__item--5">
          <img src={img5} className="img-grid__img" alt="grid item 5" />
        </figure>
      </Fade>
    </section>
  );
};

export default ImageGrid;
