import React from "react";
import Fade from "react-reveal/Fade";

import gal1 from "../../../Resources/img/gal1.jpeg";
import gal2 from "../../../Resources/img/gal2.jpeg";
import gal3 from "../../../Resources/img/gal3.jpeg";
import gal4 from "../../../Resources/img/gal4.jpeg";
import gal5 from "../../../Resources/img/gal5.jpeg";
import gal6 from "../../../Resources/img/gal6.jpeg";
import gal7 from "../../../Resources/img/gal7.jpeg";
import gal8 from "../../../Resources/img/gal8.jpeg";
import gal9 from "../../../Resources/img/gal9.jpeg";
import gal10 from "../../../Resources/img/gal10.jpeg";
import gal11 from "../../../Resources/img/gal11.jpg";
import gal12 from "../../../Resources/img/gal12.jpg";
import gal13 from "../../../Resources/img/gal13.jpeg";
import gal14 from "../../../Resources/img/gal14.jpeg";

import "./gallery.scss";

const GallerySection = () => {
  return (
    <Fade delay={1500}>
      <section className="gallery">
        <div>
          <h1 className="gallery__title">
            <Fade left delay={2000}>
              Photos from recent projects
            </Fade>
          </h1>
          <div className="gallery__masonry">
            <div className="gallery__item">
              <img src={gal1} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal2} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal3} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal4} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal5} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal6} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal7} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal8} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal9} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal10} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal11} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal12} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal13} alt="" className="gallery__img" />
            </div>
            <div className="gallery__item">
              <img src={gal14} alt="" className="gallery__img" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default GallerySection;
