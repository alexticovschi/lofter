import React from "react";
import Banner from "../../components/AboutComponents/Banner/Banner";
import Process from "../../components/AboutComponents/Process/Process";

import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <Banner />
      <Process />
    </div>
  );
};

export default About;
