import React from "react";
import Banner from "../../components/AboutComponents/Banner/Banner";
import Process from "../../components/AboutComponents/Process/Process";
import ImageGrid from "../../components/AboutComponents/ImageGrid/ImageGrid";

import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
      <Banner />
      <Process />
      <ImageGrid />
    </div>
  );
};

export default About;
