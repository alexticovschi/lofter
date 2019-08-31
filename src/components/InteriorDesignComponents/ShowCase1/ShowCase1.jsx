import React from "react";

import showcase1 from "../../../Resources/img/showcase1.jpg";

import Fade from "react-reveal/Fade";

import "./showCase1.scss";

const ShowCase = () => {
  return (
    <Fade>
      <section className="showcase1">
        <div className="showcase1__text">
          <h2 className="showcase1__title">
            <Fade left delay={1000}>
              We Craft Elegant Spaces
            </Fade>
          </h2>

          <div className="inner-text">
            <Fade delay={500}>
              <p>
                We craft elegant, inspirational and distilled solutions to
                complex problems through strategic thought, dynamic creativity
                and technological excellence.
              </p>
            </Fade>
          </div>
        </div>

        {/* <Fade duration={2000}> */}
        <div className="showcase1__img-wrapper">
          <img src={showcase1} className="showcase1__img" />
        </div>
        {/* </Fade> */}
      </section>
    </Fade>
  );
};

export default ShowCase;
