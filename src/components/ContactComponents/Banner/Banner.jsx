import React from "react";

import Fade from "react-reveal/Fade";

import "./banner.scss";

const Banner = () => {
  return (
    <Fade>
      <section className="contact-banner">
        <div className="contact-banner__message">
          <div className="contact-banner__title-box">
            <Fade left delay={500}>
              <h1 className="contact-banner__title">Contact</h1>
            </Fade>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
