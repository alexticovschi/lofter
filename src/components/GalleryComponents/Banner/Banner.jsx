import React from "react";

import Fade from "react-reveal/Fade";

import "./banner.scss";

const Banner = () => {
  return (
    <Fade>
      <section className="gallery-banner">
        <div className="gallery-banner__message">
          <div className="gallery-banner__title-box">
            <Fade right delay={500}>
              <h1 className="gallery-banner__title">
                Gallery
              </h1>
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
