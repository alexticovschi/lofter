import React from "react";

import mission_and_vision from "../../../Resources/img/missionvision.jpeg";

import "./missionAndVision.scss";

const MissionAndVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision__box-left">
        <div className="mission-vision__content">
          <div className="mission">
            <h2 className="mission__title">Mission</h2>
            <p className="mission__text">
              To give our esteemed clients a world class and impressive
              experience. We strive to marry the best of technology with
              out-of-the-box ideas to mould residential and commercial
              properties to the personality and energy of the occupants.
            </p>
          </div>
          <div className="vision">
            <h2 className="vision__title">Vision</h2>
            <p className="vision__text">
              To be different and better from the other interior designing
              establishments. We envisage a future of mature processes and
              presence in other nations as well.
            </p>
          </div>
          <button className="mission-vision__btn btn">View More</button>
        </div>
      </div>

      <img
        src={mission_and_vision}
        alt="mission & vision"
        className="mission-vision__img"
      />
    </section>
  );
};

export default MissionAndVision;
