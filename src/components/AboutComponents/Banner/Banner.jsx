import React from "react";

import Fade from "react-reveal/Fade";

import "./banner.scss";

const Banner = () => {
  return (
    <Fade>
      <section className="about-banner">
        <div className="about-banner__message">
          <div className="about-banner__title-box">
            <Fade right delay={500}>
              <h1 className="about-banner__title">About Us</h1>
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
